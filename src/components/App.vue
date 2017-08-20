<template>
  <div>
    <he></he>
    <list :items="this.items"
          :pages_count="this.pages_count">
    </list>
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
      items: [],
      pages_count: "",
      page_num:0
    }
  },
    components: {
      "he": header,
      "list": list,
      "foot": footer
    },
    created() {
      fetch('/api/v2.0/?page=1').then(res => {
        return res.json()
      })
      .then(value => {
        // console.log(value)
        this.items = value.share
        this.pages_count = value.pages_count //总页数数
        this.page_num = value.page //当前页数
        // console.log(this.pages_count)
      })
    },
    methods: {
      // PageUp() {
      //   if (this.page_num != this.pages_count) {
      //     this.page_num += 1;
      //     fetch('/api/v2.0/?page=' + this.page_num).then(res => {
      //       return res.json();
      //     })
      //     .then(res => {
      //       this.items = res.share
      //       // this.page_count = res.pages_count
      //     })
      //   }
      // },
    //   PageDown() {
    //     if (this.page_num != 1) {
    //       this.page_num -= 1;
    //       fetch('/api/v2.0/?page=' + this.page_num).then(res => {
    //         return res.json();
    //       })
    //       .then(res => {
    //         this.items = res.share
    //         // this.page_count = res.pages_count
    //   })
    //   }
    // }
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
