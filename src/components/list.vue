<template >
<div  >
 <!-- <div class="md-layout-item md-size-80">  -->
  <div :class="$style.list_container" >
    <div v-for = "item in items" :key="item.id">

      <div :class="$style.card_container"  >
     
        <md-card md-with-hover class="md-warn">
           
          <md-card-header>
            <md-avatar class="md-large">
              <img v-bind:src="item.avatar" alt="People"> <md-ink-ripple />
            </md-avatar>
            <md-card-header-text>
              <div class="md-title" style="color:#2296f3" @click="intoView(item.id)"><div>{{item.title}}</div></div>
              <div class="md-subhead"><div>{{item.username}}</div></div>
            </md-card-header-text>
            <div class="md-subhead">{{item.date}}</div>
          </md-card-header>
          <div :class="$style.content_container">
            <md-card-content v-html="item.share" :class="$style.share_content">
            </md-card-content>
          </div>
          <md-divider></md-divider>
          <div :class="$style.clear_float">
            <div :class="$style.ic_container">
              <md-icon >comment</md-icon>
            </div>
            <div :class="$style.comment_container">{{item.comment_num}}</div>
            <md-chip>{{item.tag}}</md-chip>
            <div :class="$style.readmore_container">
              <md-card-actions>
                <md-button :class="$style.index_button" @click="intoView(item.id)" >READ MORE</md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card>
      </div>
      <!-- </div> -->
    </div>
     <!-- <div v-if="!this.page_count">nothing</div> -->
      <div :class="$style.card_container" class="md-layout">
        <div :class="$style.page_turn" class="md-layout-item md-size-80">
          <md-button class="md-raised  page_turn_button" :class="$style.index_button"  @click="lastPage" v-show="this.page_num > 0" >Last </md-button>
          <md-button class="page_turn_num_button  md-mini" :class="$style.page_num_button"  v-show="this.page_num > 0" >{{page_num}}</md-button>
          <span :class="$style.slash" v-show="this.page_num < this.pages_count">/</span>
          <md-button class=" pages_turn_count_button" :class="$style.page_num_button"  @click="finalPage" v-show="this.page_num < this.pages_count">{{ pages_count}}</md-button>
          <md-button class="md-raised  page_turn_button" :class="$style.index_button"  @click="nextPage" v-show="this.page_num < this.pages_count">Next </md-button>
          </div>
      </div>
  </div>
</div>
</template>


<script>
import { bus } from "../bus.js";
import marked from "../common/marked";
import API from "../common/service";
import Cookie from "../common/cookie";

export default {
  data() {
    return {
      items: [],
      page_num: 1,
      pages_count: true
    };
  },
  mounted() {
    let page_num = window.location.href.split("=")[1];

    if (page_num !== null && page_num !== undefined) this.page_num = page_num;

    API.choosePage(this.page_num).then(value => {
      this.items = value.shares;
      this.compiledMarkdown();
      this.pages_count = value.pages_count; //总页数数

      this.page_num = value.page; //当前页数
    });
  },
  created() {
    bus.$on("getItems", this.fetchData);

    bus.$on("mark", this.compiledMarkdown);
  },
  methods: {
    intoView(id) {
      let url = window.location.href.split("/");
      url = url[url.length - 1] === "" ? "new" : url[url.length - 1];
      window.location =
        "/view/" + id + "/?page =" + this.page_num + "&sort =" + url;
    },
    fetchData(Items) {
      this.items = Items;
    },

    pageChange() {
      API.choosePage(this.page_num).then(value => {
        this.items = value.shares;
        this.compiledMarkdown();
        this.pages_count = value.pages_count; //总页数数
        this.page_num = value.page; //当前页数
      });
    },

    lastPage() {
      if (this.page_num !== 1) {
        this.page_num--;
        this.pageChange();
      }
    },
    nextPage() {
      if (this.page_num !== this.pages_count) {
        this.page_num++;
        this.pageChange();
        window.scrollTo(0, 0);
      }
    },
    finalPage() {
      this.page_num = this.pages_count;
      this.pageChange();
    },
    compiledMarkdown() {
      this.items.forEach(function(value) {
        value.share = marked(value.share || "", { sanitize: true });
      });
    }
  }
};
</script>


<style lang="scss" module>
/*不要写死 子组件撑开 */
.share_content > p > a {
  color: red !important;
}
.list_container {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.index_button {
  color: #2296f3;
  border: solid 1px #2296f3;
  border-radius: 10%;

  margin: 2vh 0;
  min-height: 2vh !important;
}
.page_num_button {
  margin: 2vh 2vw;
  min-height: 2vh !important;
}
@media screen and (min-width: 1200px) {
  .list_container {
    width: 50vw;
  }
  .page_turn {
    margin-left: 10vw;
  }
}
@media screen and (min-width: 960px) and (max-width: 1199px) {
  .list_container {
    width: 60vw;
  }
  .page_turn {
    margin-left: 8vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 959px) {
  .list_container {
    width: 70vw;
  }
  .page_turn {
    margin-left: 6vw;
  }
}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .list_container {
    width: 80vw;
  }
  .page_turn {
    margin-left: 4vw;
  }
}
@media only screen and (max-width: 479px) {
  .list_container {
    width: 90vw;
  }
  .page_turn {
    margin-left: 2vw;
  }
}

.card_container {
  // width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 2%;
}

.content_container {
  // width: 630px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 5vw;
}
.ic_container,
.comment_container,
.readmore_container,
.back_container,
.forward_container {
  display: inline-block;
}
.ic_container {
  margin-left: 32px;
  line-height: 52px;
}
.comment_container {
  margin-right: 24px;
}
.readmore_container {
  float: right;
}
.clear_float {
  overflow: hidden;
}

.slash {
  line-height: 3;
}
</style>
