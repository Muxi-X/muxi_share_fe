<template>
  <div>
    <a href="/send" v-if="getToken()">
      <div :class="$style.button_container">
        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </a>
    <md-tabs md-centered class="md-warn" @change="change">
      <md-tab md-label="NEW" md-icon="fiber_new"></md-tab>
      <md-tab md-label="HOT" md-icon="whatshot"></md-tab>
      <md-tab md-label="MINE" md-icon="assignment_ind"></md-tab>
      <md-tab md-label="FRONTEND" md-icon="important_devices"></md-tab>
      <md-tab md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab md-label="ANDROID" md-icon="android"></md-tab>
      <md-tab md-label="DESIGN" md-icon="photo"></md-tab>
      <md-tab md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>
    </md-tabs>
  </div>
</template>



<script>
import { bus } from '../bus.js'
import Cookie from '../common/cookie.js'
var route = ["/new","/hot","/mine","/frontend","/backend","/android","/design","/product","/"]
export default {
  data() {
    return {
      api: "",
      url: "",
      Items: [],
      page_num: 1,
      // add:true
    }
  },
  // mounted(){
  //   let cookie=Cookie.getCookie("token");
  //   console.log("token:"+cookie);
  //   if(cookie!==""){
  //     this.add=true;
  //   }
  // },
    methods: {
      getToken(){
        let token =Cookie.getCookie('token');
        console.log(token)
        if(token!==null&&token!==undefined&&token!==''){
            return true;
        }
        return false;
      },
      change(e) {
        if(route.indexOf(window.location.pathname) > -1){
          window.history.pushState(null, null, route[e]);
          this.api = window.location.pathname.split('/')[1];
          if (this.api == "new"){
            this.url = ""
          }
          else {
            this.url = "?sort=" + this.api
          }
          fetch('http://share.muxixyz.test:5488/api/v2.0/'+ this.url).then(res => {
            // return res.json();
          })
          .then(value => {
            this.Items = value.shares
          })
          bus.$emit('getItems',this.Items)
        }
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
