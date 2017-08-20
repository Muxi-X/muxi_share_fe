<template>
  <div :class="$style.list_container">
    <div v-for="item in items">
      <div :class="$style.card_container">
        <md-card md-with-hover class="md-warn">
          <md-card-header>
            <md-avatar class="md-large">
              <img v-bind:src="item.avatar" alt="People"> <md-ink-ripple />
            </md-avatar>
            <md-card-header-text>
              <div class="md-title"><div>{{item.title}}</div></div>
              <div class="md-subhead"><div>{{item.username}}</div></div>
            </md-card-header-text>
          </md-card-header>
          <div :class="$style.content_container">
            <md-card-content>
              {{item.share}}
            </md-card-content>
          </div>
          <md-divider></md-divider>
          <div :class="$style.clear_float">
            <div :class="$style.ic_container">
              <md-icon class="md-primary">comment</md-icon>
            </div>
            <div :class="$style.comment_container">{{item.comment_num}}</div>
            <md-chip>{{item.tag}}</md-chip>
            <div :class="$style.readmore_container">
              <md-card-actions>
                <md-button class="md-primary" :href="'/view/' + item.id" >READ MORE</md-button>
              </md-card-actions>
            </div>
          </div>
        </md-card>
      </div>
    </div>
    <!-- <div v-if="!this.page_count">nothing</div> -->
    <div :class="$style.fab">
      <div :class="$style.back_container" v-on:click="pageDown">
        <md-button class="md-fab">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </div>
      <div :class="$style.forward_container" v-on:click="pageUp">
        <md-button class="md-fab">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    props:["items","pages_count"],
    data() {
      return {
        page_num: 1
      }
    },
    mounted(){
      console.log(this.pages_count)
    },
    methods: {
	    // pageDown() {
	    //   this.$emit('pageDown')
		  // },
		  // pageUp() {
			//   this.$emit('pageUp')
		  // }
    }
}



</script>


<style lang="scss" module>
/*不要写死 子组件撑开 */
.list_container{
  padding-bottom: 72px;
  height: 100%;
}
.card_container{
  width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  margin-bottom: 56px;
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
.fab{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.back_container{
  float: left;
}
.forward_container{
  float: right;
}
</style>
