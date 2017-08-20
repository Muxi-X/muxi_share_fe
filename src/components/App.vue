<template>
  <div>
    <he></he>
    <list :items="this.items"
          :pages_count="this.pages_count">
    </list>
    <div :class="$style.fab">
      <div :class="$style.back_container" v-on:click="pageDown" v-show="this.page_num > 1">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </div>
      <div :class="$style.forward_container" v-on:click="pageUp" v-show="this.page_num < this.pages_count">
        <md-button class="md-fab">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </div>
    </div>
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
        this.items = value.share
        this.pages_count = value.pages_count //总页数数
        this.page_num = value.page //当前页数
      })
    },
    methods: {
      pagechange(){
        fetch('/api/v2.0/?page=' + this.page_num).then(res => {
          return res.json();
        })
        .then(value => {
          this.items = value.share
          this.page_num = value.page
        })
      },
      pageUp() {
        if (this.page_num != this.pages_count) {
          this.page_num += 1;
          this.pagechange();
        }
      },
      pageDown() {
        if (this.page_num != 1) {
          this.page_num -= 1;
          this.pagechange();
      }
      }
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
.fab{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 16px;
}
.back_container{
  float: left;
}
.forward_container{
  float: right;
}
</style>
