<template>
  <div class="phone-viewport">
    <md-toolbar style="background-color:#2296f3">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">木犀分享</h2>
      <md-button href="/" class="md-warn">首页</md-button>
      <md-button   @click="login"  class="md-warn" >{{username}}</md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h2 class="md-title">MUXI SHARE</h2>
        </div>
      </md-toolbar>
      <md-list>
        <md-button href="/">
          <md-list-item>
            <md-icon class="md-accent">home</md-icon> <span>home</span>
          </md-list-item>
        </md-button>
        <md-divider class="md-inset"></md-divider>
        <md-button @click="logout" >
          <md-list-item >
            <md-icon class="md-accent">send</md-icon> 
            <span >login out</span>
          </md-list-item>
        </md-button>
      </md-list>
    </md-sidenav>
    <div :class="$style.parallax">
      <div :class="$style.background"></div>
    </div>
  </div>
</template>


<script>
import Cookie from '../common/cookie.js'
import haveToken from '../common/haveToken'
export default {
  data() {
    return {
      username:''
    }
  },
  mounted(){
   if(haveToken()){
     this.username = Cookie.getCookie('username')
   }else{
     this.username = '登陆'
   } 
  },
  methods: {
    login() {
        if(haveToken()){
          
          //应该跳转到个人中心
          window.location = '/'
        }else{
          window.location = "http://pass.muxixyz.com/?landing=localhost:3000/landing";
         
        }
       
 
    },
    logout(){
     
      //清除存在cookie中的share设置的属性
      Cookie.clearCookie('token');
      Cookie.clearCookie('Mt');
      Cookie.clearCookie('uid');
      Cookie.clearCookie('username');
      window.location = '/'
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
  
  }
}

</script>


<style lang="scss" module>
.parallax{
  background-color: azure;
  width: auto;
  height: 270px;
}
.background{
  height: 100%;
  width: 100%;
  background-image: url("../assets/header_img.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
