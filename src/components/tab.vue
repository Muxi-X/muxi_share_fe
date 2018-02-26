<template  >
  <div  >
    <a href="/send" v-if="getToken()">
      <div :class="$style.button_container ">
        <md-button class="md-fab md-fab-bottom-right md-primary">
          <md-icon >add</md-icon>
        </md-button>
      </div>
    </a>
    <md-tabs md-centered  @change="change"  >
      <md-tab id="new" md-label="NEW" md-icon="fiber_new" ></md-tab>
      <md-tab id = 'hot' md-label="HOT" md-icon="whatshot"></md-tab>
      <md-tab id = 'frontend' md-label="FRONTEND" md-icon="important_devices"></md-tab>
      <md-tab v-if="this.currentPathName === '/backend'" md-active md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab v-else md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab id = 'android' md-label="ANDROID" md-icon="android"></md-tab>
      <md-tab id = 'design' md-label="DESIGN" md-icon="photo"></md-tab>
      <md-tab id= 'product' md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>
      <md-tab id= 'mine' v-if="mine" md-label="MINE" md-icon="assignment_ind"></md-tab>
    </md-tabs>
  </div>
</template>



<script>
import { bus } from "../bus.js";
import Cookie from "../common/cookie.js";
import API from "../common/service";
import haveToken from "../common/haveToken";
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
    getToken() {
      return haveToken();
    },
    change(e) {
      if (!this.mounted) {
        return;
      }

      if (
        route.indexOf(window.location.pathname) > -1 ||
        window.location.pathname === "/"
      ) {
        window.history.pushState(null, null, route[e]);
        this.api = window.location.pathname.split("/")[1];

        if (this.api == "new") {
          this.url = "";
        } else if (this.api == "mine") {
          this.url = "get_one_all/" + Cookie.getCookie("uid");
        } else {
          this.url = "?sort=" + this.api;
        }

        API.getSortedPage(this.url)
          .then(value => {
            this.Items = value.shares;
          })
          .then(() => {
            bus.$emit("getItems", this.Items);
            bus.$emit("mark");
          });
      }
    }
  },
  mounted() {
    // let url =Cookie.getCookie('history').split('?page =')[0].split('/');
    // let sort = url[url.length-1];
    // if(sort!==null&&sort!==undefined){
    //   let sort1 = '/'+sort;
    //   let index =  route.indexOf(sort1);
    //   this.change(index);
    // }

    // 初始化currentPathName
    this.currentPathName = window.location.pathname;

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
</style>
