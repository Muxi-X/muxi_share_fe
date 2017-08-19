<template>
  <div>
    <he :class="$style.header"></he>
    <list :items="this.items"></list>
    <foot></foot>
  </div>
</template>


<script>
import header from './header.vue'
import list from './list.vue'
import footer from './footer.vue'

export default {
  data(){
    return {
      items: []
    }
  },
    components: {
      "he": header,
      "list": list,
      "foot": footer
    },
    mounted() {
      fetch('/get/').then(res => {
        return res.json()
      })
      .then(res => {
        this.items = res.share
      })
    }
}
</script>


<style lang="scss" module>
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
