import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import App from "./components/App";

Vue.use(VueMaterial);

Vue.material.registerTheme("default", {
  primary: {
    color: "#2296f3",
    hue: 500
  },
  accent: {
    color: "#2296f3",
    hue: 100
  },
  warn: {
    color: "white",
    hue: 100
  }

  // background: 'orange'
});

new Vue({
  el: "#app",
  render: h => h(App)
});
