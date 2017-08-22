<template>
  <div>
    <he></he>
    {{share.title}}
    {{share.avatar}}
    {{share.username}}
    {{share.share}}
    <div v-for="item in items">
      {{item.username}}
    </div>
    <foot></foot>
  </div>
</template>
<script>
import header from './header.vue'
import footer from './footer.vue'


export default {
    data() {
      return {
        "id": 0,
        "share" : {
          type: Object
        },
        "items": []
      }
    },
    components: {
      "he": header,
      "foot": footer
    },
    mounted() {
      var api = window.location.pathname;
      this.id = api.split('/')[2];
      fetch('/api/v2.0/'  + this.id+ '/views/').then(res => {
        return res.json()
      })
      .then(value => {
        this.share = value.share
        this.items = value.comments
      })
    },
    methods: {
      fetchComments() {
        if (this.sendComment) {
          fetch('/api/v2.0/' + '/views/' + this.id ).then(res => {
            return res.json()
          })
          .then(res => {
            this.comments = res.comments
          })
        }
      }
    }
}




</script>
<style lang="scss" module>


</style>
