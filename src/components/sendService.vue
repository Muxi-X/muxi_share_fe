<template>
  <send :id="id" :shareContent="shareContent" :fetchFun="sendApi" ></send>
</template>


<script>
import send from './send'
import Cookie from '../common/cookie.js'
import API from '../common/service'
export default {

    data(){
        return{
            id:null,
            shareContent:{
                  title:'',
                  tags: "",
                  share:'# hello',
            },
            sendApi:API.sendShare
        }

    },
   components: {
       "send":send
    },
   mounted() {
      let token = Cookie.getCookie('token');
      let  api = window.location.pathname;
      this.id = api.split('/')[2]; 
      if(this.id!==''&&this.id!==undefined&&this.id!==null){
            API.getView(this.id)
            .then(value => {
                let res = value.shares;
                this.shareContent.title = res.title;
                this.shareContent.tags = res.tag;
                this.shareContent.share = res.share
                this.sendApi = API.rewriteShare;      
            });
        }else{
            this.sendApi = API.sendShare;
        }
    },
}
</script>
