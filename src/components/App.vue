<template >
  <div>
    <he></he>
    <tab></tab>
    <list></list>
   
    <foot></foot>
  </div>
</template>


<script>
import header from "./header.vue";
import tab from "./tab.vue";
import list from "./list.vue";
import footer from "./footer.vue";
import API from "../common/service";
export default {
  data() {
    return {
      items: [],
      pages_count: "",
      page_num: 0
    };
  },
  components: {
    he: header,
    tab: tab,
    list: list,
    foot: footer
  }
};
</script>


<style lang="scss" module>
html,
body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.fab {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 16px;
}
.back_container {
  float: left;
}
.forward_container {
  float: right;
}
</style>
