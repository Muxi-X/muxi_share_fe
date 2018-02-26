import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import sendService from "./components/sendService";

Vue.use(VueMaterial);

Vue.material.registerTheme("default", {
  primary: {
    color: "cyan",
    hue: 300
  },
  accent: {
    color: "cyan",
    hue: 500
  },
  warn: {
    color: "blue",
    hue: 500
  },
  background: "white"
});

new Vue({
  el: "#send",
  render: h => h(sendService)
});
