<template  >
  <div  :class="$style.tab_container">
    <a v-if="getToken()" @click="ifToken()">
      <div :class="$style.button_container ">
        <md-button class="md-fab md-fab-bottom-right md-primary">
          <md-icon >add</md-icon>
        </md-button>
      </div>
    </a>
    <md-tabs md-centered  @change="change" class="md-primary" >
      <md-tab v-if="this.currentPathName === '/new'" md-active  md-label="NEW" md-icon="fiber_new"  ></md-tab>
      <md-tab v-else md-label="NEW" md-icon="fiber_new"></md-tab>

      <md-tab v-if="this.currentPathName === '/hot'" md-active  md-label="HOT" md-icon="whatshot"  ></md-tab>
      <md-tab v-else md-label="HOT" md-icon="whatshot"></md-tab>

      <md-tab v-if="this.currentPathName === '/frontend'" md-active  md-label="FRONTEND" md-icon="important_devices"  ></md-tab>
      <md-tab v-else md-label="FRONTEND" md-icon="important_devices"></md-tab>

      <md-tab v-if="this.currentPathName === '/backend'" md-active md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab v-else md-label="BACKEND" md-icon="build"></md-tab>

      <md-tab v-if="this.currentPathName === '/android'" md-active md-label="ANDROID" md-icon="build"></md-tab>
      <md-tab v-else md-label="ANDROID" md-icon="android"></md-tab>

      <md-tab v-if="this.currentPathName === '/design'" md-active md-label="DESIGN" md-icon="photo"></md-tab>
      <md-tab v-else md-label="DESIGN" md-icon="photo"></md-tab>

      <md-tab v-if="this.currentPathName === '/product'" md-active md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>
      <md-tab v-else md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>

      <md-tab v-if="mine&&this.currentPathName === '/mine'" md-active  md-label="MINE" md-icon="assignment_ind"></md-tab>
      <md-tab v-else-if="mine" md-label="MINE" md-icon="assignment_ind"></md-tab>

    </md-tabs>
  </div>
</template>



<script>
import { bus } from "../bus.js";
import Cookie from "cookie";
import API from "api";
import haveToken from "haveToken";
var route = [
  "/new",
  "/hot",
  "/frontend",
  "/backend",
  "/android",
  "/design",
  "/product"
];
export default {
  data() {
    return {
      api: "",
      url: "",
      Items: [],
      page_num: 1,
      mine: false,
      index: 1,
      currentPathName: "",
      mounted: false
    };
  },

  methods: {
    ifToken() {
      let token = Cookie.getCookie("token");

      API.isTokenEffective(token).catch(error => {
        Cookie.clearCookie("token");
        Cookie.clearCookie("Mt");
        Cookie.clearCookie("uid");
        Cookie.clearCookie("username");
        window.location.href =
          "http://pass.muxixyz.com/?landing=share.muxixyz.com/landing";
        // "http://pass.muxixyz.com/?landing=localhost:3000/landing";
      });
      window.location = "/send";
    },
    getToken() {
      return haveToken();
    },
    change(e) {
      if (!this.mounted) {
        return;
      }

      let page_num = window.location.href.split("=")[1] || this.page_num;
      window.history.pushState(null, null, route[e] + "/?page=" + page_num);
      this.api = window.location.pathname.split("/")[1];
      let url = this.api || "new";
      if (this.api == "new") {
        this.url = "";
      } else if (this.api == "mine") {
        this.url = "get_one_all/" + Cookie.getCookie("uid");
      } else {
        this.url = "?sort=" + this.api;
      }
      let uid = Cookie.getCookie("uid");
      page_num = Number(page_num) || this.page_num;

      let sort = window.location.pathname.split("/")[1] || "new";

      sort = sort || this.api;
      API.getSortedChoosePage(page_num, sort, uid)
        .then(value => {
          this.Items = value.shares;
        })
        .then(() => {
          bus.$emit("getItems", this.Items);
          bus.$emit("mark");
        });
    }
  },
  mounted() {
    // 初始化currentPathName
    this.currentPathName = window.location.pathname.split("/")[1];
    this.currentPathName = "/" + this.currentPathName;

    let uid = Cookie.getCookie("uid");
    if (uid !== undefined && uid !== null && uid !== "") {
      this.mine = true;
      route.push("/mine");
    }
    this.mounted = true;
  }
};
</script>
<style lang="scss" module>
.button_container {
  z-index: 999;
  position: fixed;
  top: 50vh;
  right: 20vw;
}
.tab_container {
  background: #eee;
}
@media only screen and (max-width: 767px) {
  .tab_container {
    margin-top: -12vh !important;
  }
}
</style>
