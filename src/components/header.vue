<template>
  <div class="phone-viewport">
    <md-toolbar style="background-color:#2296f3" >
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">木犀分享</h2>
      <md-button @click="turnBackFromView"  v-if="intoView">返回</md-button>
      <md-button   @click="login"  >{{username}}</md-button>
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
      <img :src="picture" :class="$style.background" >
    </div>
  </div>
</template>


<script>
import { bus } from "../bus.js";
import Cookie from "../common/cookie.js";
import haveToken from "../common/haveToken";
export default {
  data() {
    return {
      intoView: false,
      username: "",
      picture: "",
      srcs: [
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzo2ir66j31hc0u0aj3.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECgy1foexb1uwbhj30wi0goq6x.jpg",
        "https://wx4.sinaimg.cn/mw690/006P0MECly1fouzpo0ohzj31hc0u047k.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzo30kc1j31hc0u047e.jpg",
        "https://wx4.sinaimg.cn/mw690/006P0MECly1fouzowxz92j31hc0u07dc.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzowv8n0j31hc0u0jzr.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzo2yl0oj31hc0u077y.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzpnbczrj31hc0u07df.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzo38uxej31hc0u0gu8.jpg",
        "https://wx4.sinaimg.cn/mw690/006P0MECly1fouzo38labj31hc0u010z.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzomlqwvj31hc0u011v.jpg",
        "https://wx4.sinaimg.cn/mw690/006P0MECly1fouzomp40lj31hc0u011e.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzon38nbj31hc0u0qbg.jpg",
        "https://wx2.sinaimg.cn/mw690/006P0MECly1fouzon3qjtj31hc0u047n.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzon3srpj31hc0u0aj6.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzon3oisj31hc0u0n61.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzon3qmfj31hc0u047n.jpg",
        "https://wx3.sinaimg.cn/mw690/006P0MECly1fouzon0f7uj31hc0u0dm7.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECly1fouzon3z3yj31hc0u0k0a.jpg"
      ]
    };
  },
  mounted() {
    let pathArray = window.location.pathname.split("/");

    let index = pathArray.length - 3;

    if (pathArray[index] === "view") {
      this.intoView = true;
    }
    if (haveToken()) {
      this.username = Cookie.getCookie("username");
    } else {
      this.username = "登陆";
    }
    let randomNum = parseInt(Math.random() * this.srcs.length);
    this.picture = this.srcs[randomNum];
  },
  methods: {
    login() {
      if (haveToken()) {
        //应该跳转到个人中心
        window.location = "/";
      } else {
        // window.location = "http://120.77.246.73:4000?landing=localhost:3000/landing"
        // window.location = "http://pass.muxixyz.com/?landing=share.muxixyz.com/landing";
        window.location =
          "http://pass.muxixyz.com/?landing=localhost:3000/landing";
      }
    },
    logout() {
      //清除存在cookie中的share设置的属性
      Cookie.clearCookie("token");
      Cookie.clearCookie("Mt");
      Cookie.clearCookie("uid");
      Cookie.clearCookie("username");
      window.location = "/";
    },
    turnBackFromView() {
      // let location = Cookie.getCookie("history");

      // let url = location.split("?page =")[0];
      // // console.log('url'+url)
      // //Cookie.clearCookie('history');
      // window.location.href = url;
      let url = window.location.href;

      let sort = url.split("&"); //
      let sortName = sort[sort.length - 1]; //sort = new
      let sortFina = sortName.split("=")[1]; //new

      let page = sort[0].split("/?page")[1].split("=")[1];

      window.location = "/" + sortFina + "/?page =" + page;
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
};
</script>


<style lang="scss" module>
.parallax {
  overflow: hidden;
  width: 100%;
  height: 37.5vh;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.background {
  width: 100%;
  height: 100%;
}
</style>
