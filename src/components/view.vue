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
        <show :id="this.id" v-on:newComment="fetchComments"></show>
      </md-card>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import header from './header.vue'
import footer from './footer.vue'
import show from './show.vue'

export default {
    data() {
      return {
        id: 0,
        share : {
          type: Object
        },
        items: []
      }
    },
    components: {
      "he": header,
      "foot": footer,
      "show": show
    },
    mounted() {
      var api = window.location.pathname;
      this.id = api.split('/')[2]; //把 id props 给子组件
      fetch('/api/v2.0/' + this.id + '/views/').then(res => {
        return res.json()
      })
      .then(value => {
        this.share = value.shares
        this.items = value.comments
      })
    },
    methods: {
      fetchComments() {
        fetch('/api/v2.0/' + this.id + '/views/').then(res => {  //api/v2.0/<int:id>/comments/ api改成/view
          return res.json()
        })
        .then(res => {
          console.log(this.id)
          this.items = res.comments
        })
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
</style>
