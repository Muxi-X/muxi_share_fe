<template>
  <div>
    <he></he>
    <div :class="$style.card_container">
      <md-card >
        <md-card-header>
          <md-avatar class="md-large">
            <img v-bind:src="share.avatar" alt="People">
          </md-avatar>
          <md-card-header-text>
            <div class="md-title md-primary" style="color:#2296f3">{{share.title}}</div>
            <div class="md-subhead">{{decodeURIComponent(share.username)}}</div>
          </md-card-header-text>
          <div>{{share.date}}</div>
        </md-card-header>
        <md-divider class="md-inset"></md-divider>
        <div :class="$style.sharetext">
          <md-card-content  v-html="compiledMarkdown">{{share.share}}</md-card-content>
        </div>
       
        <div v-if="isAuthor">
          <md-button class="md-raised  " @click="delShare"  :class="$style.btn" >DELETE</md-button>
          <md-button class="md-raised  " :href="'/send/'+id "  :class="$style.btn">CHANGE</md-button>
        </div>
      </md-card>
    </div>
    <div :class="$style.card_container">
      <md-card>
        <div :class="$style.comment_title">Comments</div>
        <div v-for="item in items" :key="item">
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
import header from "./header.vue";
import footer from "./footer.vue";
import show from "./show.vue";
import Cookie from "../common/cookie";
import marked from "../common/marked";
import API from "../common/service";

export default {
  data() {
    return {
      id: 0,
      share: {
        type: Object
      },
      items: [],
      isAuthor: false
    };
  },
  components: {
    he: header,
    foot: footer,
    show: show
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.share.share || "", { sanitize: false });
    }
  },
  mounted() {
    var api = window.location.pathname;

    this.id = api.split("/")[2]; //把 id props 给子组件
    API.getView(this.id).then(value => {
      this.share = value.shares;
      this.items = value.comments;
      if (this.share.username === Cookie.getCookie("username")) {
        this.isAuthor = true;
      }
    });
  },
  methods: {
    fetchComments() {
      API.getView(this.id).then(res => {
        this.items = res.comments;
      });
    },
    delShare() {
      let token = Cookie.getCookie("token");
      API.deleteShare(this.id, token).then(res => {
        if (res !== null && res !== undefined) window.location = "/";
      });
    }
  }
};
</script>


<style lang="scss" module>
.btn {
  float: right;
  color: #2296f3;
  border: solid 1px #2296f3 !important;
  border-radius: 10%;
}
@media screen and (min-width: 1200px) {
  .card_container {
    width: 50vw;
  }
}
@media screen and (min-width: 960px) and (max-width: 1199px) {
  .card_container {
    width: 60vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 959px) {
  .card_container {
    width: 70vw;
  }
}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .card_container {
    width: 80vw;
  }
}
@media only screen and (max-width: 479px) {
  .card_container {
    width: 90vw;
  }
}
.card_container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 2%;
}
.sharetext {
  margin: 36px;
}
.comment_title {
  margin: 36px 16px;
  font-size: 24px;
}
</style>
