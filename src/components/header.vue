<template>
  <div class="phone-viewport">
    <md-toolbar>
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
export default {
  data() {
    return {
      username:''
    }
  },
  mounted(){
   if(this.haveToken()){
     this.username = Cookie.getCookie('username')
   }else{
     this.username = '登陆'
   } 
  },
  methods: {
     haveToken(){
      let token = Cookie.getCookie('token');
      if(token!==undefined&&token!==null&&token!=''){
        return true;
      }
      return false;
    },
    login() {
        if(this.haveToken()){
          console.log('!!应该跳转到个人中心')
          //应该跳转到个人中心
          window.location = '/'
        }else{
          window.location = "http://pass.muxixyz.com/?landing=localhost:3000/landing";
          //  window.location = "http://pass.muxixyz.com/?landing=localhost:3000/landing";
        }
        // Cookie.setCookie('url', window.location.href);
 
    },
    logout(){
     
      //清除存在cookie中的share设置的属性
      Cookie.clearCookie('token');
      Cookie.clearCookie('Mt');
      Cookie.clearCookie('uid');
      Cookie.clearCookie('username');
      //href="http://auth.muxixyz.com/logout/"
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
