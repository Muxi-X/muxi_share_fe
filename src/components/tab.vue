<template  >
  <div >
    <a href="/send" v-if="getToken()">
      <div :class="$style.button_container ">
        <md-button class="md-fab md-fab-bottom-right" style="background-color:#2296f3">
          <md-icon >add</md-icon>
        </md-button>
      </div>
    </a>
    <md-tabs md-centered  @change="change"  >
      <md-tab md-label="NEW" md-icon="fiber_new"></md-tab>
      <md-tab md-label="HOT" md-icon="whatshot"></md-tab>
      <md-tab md-label="FRONTEND" md-icon="important_devices"></md-tab>
      <md-tab md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab md-label="ANDROID" md-icon="android"></md-tab>
      <md-tab md-label="DESIGN" md-icon="photo"></md-tab>
      <md-tab md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>
      <md-tab v-if="mine" md-label="MINE" md-icon="assignment_ind"></md-tab>
    </md-tabs>
  </div>
</template>



<script>
import { bus } from '../bus.js'
import Cookie from '../common/cookie.js'
import API from '../common/service'
import haveToken from '../common/haveToken'
var route = ['/new',"/hot","/frontend","/backend","/android","/design","/product"]
export default {
  data() {
    return {
      api: "",
      url: "",
      Items: [],
      page_num: 1,
      mine:false,

    }
  },

    methods: {
      getToken(){
        return haveToken();
      },
      change(e) {

        if(route.indexOf(window.location.pathname) > -1||window.location.pathname==='/'){
         
          window.history.pushState(null, null,route[e]);
          this.api = window.location.pathname.split('/')[1];
         
          if (this.api == "new" ){
            this.url = ""
          }
          else if(this.api == 'mine'){
            this.url = 'get_one_all/'+Cookie.getCookie('uid');
          }
          else {
            this.url = "?sort=" + this.api
          
          }
         
          API.getSortedPage(this.url).then(value => {
            this.Items = value.shares
          }).then(()=>{
            bus.$emit('getItems',this.Items)
            bus.$emit('mark')
          })

          
          
        }
      } 
    },
    mounted(){
      let uid = Cookie.getCookie('uid');
      if(uid!==undefined&&uid!==null&&uid!==''){
        this.mine = true;
        route.push('/mine')
      }
      
    } 
    
    
  }
</script>
<style lang="scss" module>
.button_container{
  position: absolute;
  width: 56px;
  height: 56px;
  top: 334px;
  right: 140px;
}
</style>
