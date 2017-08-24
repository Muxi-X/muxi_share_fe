<template>
  <div>
    <he></he>
    <div :class="$style.card_container">
      <md-card class="md-warn">
        <md-card-header>
          <md-avatar class="md-large">
            <img v-bind:src="share.avatar" alt="People">
          </md-avatar>
          <md-card-header-text>
            <div class="md-title">{{share.title}}</div>
            <div class="md-subhead">{{share.username}}</div>
          </md-card-header-text>
          <div>{{share.date}}</div>
        </md-card-header>
        <md-divider class="md-inset"></md-divider>
        <div :class="$style.sharetext">
          <md-card-content>{{share.share}}</md-card-content>
        </div>
      </md-card>
    </div>
    <div :class="$style.card_container">
      <md-card>
        <div :class="$style.comment_title">Comments</div>
        <div v-for="item in items">
          <md-card-header>
            <md-avatar>
              <img v-bind:src="item.avatar" alt="People">
            </md-avatar>
            <md-card-header-text>
              <div >{{item.username}}</div>
              <div class="md-subhead">{{item.date}}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>{{item.comment}}</md-card-content>
          <md-divider></md-divider>
        </div>
        <div :class="$style.comment_title">Add New Comments</div>
        <form  :class="$style.cmtextarea">
          <md-input-container >
            <label>Comment here</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </md-card>
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
      fetch('/api/v2.0/' + this.id + '/views/').then(res => {
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
          fetch('/api/v2.0/' + this.id + '/views/').then(res => {
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
.card_container{
  width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  margin-bottom: 56px;
}
.sharetext{
  margin: 36px ;
}
.comment_title{
  margin: 36px 16px;
  font-size: 24px;
}
.cmtextarea{
  margin: 16px 56px;
}
</style>
