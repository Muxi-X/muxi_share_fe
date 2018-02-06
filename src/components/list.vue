<template>
  <div :class="$style.list_container">
    <div v-for = "item in items">
      <div :class="$style.card_container">
        <md-card md-with-hover class="md-warn">
          <md-card-header>
            <md-avatar class="md-large">
              <img v-bind:src="item.avatar" alt="People"> <md-ink-ripple />
            </md-avatar>
            <md-card-header-text>
              <div class="md-title" style="color:#2296f3"><div>{{item.title}}</div></div>
              <div class="md-subhead"><div>{{item.username}}</div></div>
            </md-card-header-text>
            <div class="md-subhead">{{item.date}}</div>
          </md-card-header>
          <div :class="$style.content_container">
            <md-card-content v-html="item.share">
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
                <md-button :class="$style.index_button" :href="'/view/' + item.id" >READ MORE</md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card>
      </div>
    </div>
     <!-- <div v-if="!this.page_count">nothing</div> -->
      <div :class="$style.card_container">
        <div :class="$style.page_turn">
          <md-button class="md-raised  page_turn_button" :class="$style.index_button"  @click="lastPage" v-show="this.page_num > 0" >Last Page</md-button>
          <md-button class="page_turn_num_button  md-mini"  v-show="this.page_num > 0" >{{page_num}}</md-button>
          <span :class="$style.slash" v-show="this.page_num < this.pages_count">/</span>
          <md-button class=" pages_turn_count_button" @click="finalPage" v-show="this.page_num < this.pages_count">{{ pages_count}}</md-button>
          <md-button class="md-raised  page_turn_button" :class="$style.index_button"  @click="nextPage" v-show="this.page_num < this.pages_count">Next Page</md-button>
          </div>
      </div>
  </div>
</template>


<script>
import { bus } from '../bus.js'
import marked from '../common/marked'
import API from '../common/service'


export default {
    data() {
      return {
        items:[],
        page_num: 1,
        pages_count:true
      }
    },
    mounted() {
      API.choosePage(this.page_num)
      .then(value => {
        this.items = value.shares
         console.log('first:')
        console.log(this.items)
        this.compiledMarkdown()
        this.pages_count = value.pages_count //总页数数
        this.page_num = value.page //当前页数
      })
      //this.compiledMarkdown()
    },
    created() {
      bus.$on('getItems',this.fetchData)
      bus.$on('mark',this.compiledMarkdown)
    },
    methods: {
	    fetchData(Items) {
        this.items = Items
        console.log('list:')
        console.log(this.items)
      },
      pageChange(){
      API.choosePage(this.page_num)
      .then(value => {
        this.items = value.shares
        this.compiledMarkdown()
        this.pages_count = value.pages_count //总页数数
        this.page_num = value.page //当前页数
      })
      },
      lastPage(){
        if(this.page_num!==1){
          this.page_num--
          this.pageChange()
        }    
      },
      nextPage(){
        if(this.page_num!==this.pages_count){
             this.page_num++
             this.pageChange()
        }
      },
      finalPage(){
        this.page_num=this.pages_count
        this.pageChange()
      },
      compiledMarkdown() {
       this.items.forEach(function(value){
          value.share = marked(value.share||'', {sanitize: true })
       })
      }
    }
}
</script>


<style lang="scss" module>

/*不要写死 子组件撑开 */
.list_container{

  height: 100%;
}
.card_container{
  width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  margin-bottom: 56px;
  
}
.index_button{
 color:#2296f3;
 border: solid 1px #2296f3;
 border-radius: 10%;

}
.content_container{
  
  width: 630px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 180px;
}
.ic_container, .comment_container, .readmore_container, .back_container, .forward_container{
  display: inline-block;
}
.ic_container{
  
  margin-left: 32px;
  line-height: 52px;
}
.comment_container{
  margin-right: 24px;
}
.readmore_container{
  float: right;
}
.clear_float{
  overflow: hidden;
}
.page_turn{
  margin-left:20%;
}
.slash{
  line-height: 3;
}

</style>
