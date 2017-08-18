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
          <!-- <md-card-content>
            md-card-contentmd-card-contentmd-card-contentmd-card-contentmd-card-content
              md-card-contentmd-card-contentmd-card-contentmd-card-contentmd-card-content
              md-card-contentmd-card-contentmd-card-contentmd-card-contentmd-card-content
                md-card-contentmd-card-contentmd-card-contentmd-card-contentmd-card-content
          </md-card-content> -->
        </div>
          <div>{{item.comment_num}}</div>
          <md-card-actions>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>




<script>
export default {
    data() {
      return {

      }
    },
    props:['items']
  }
</script>



<style lang="scss" module>
.list_container{
  width: auto;
  height: 1400px;
}
.card_container{
  width: 840px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
}

/*
.content_container{
  width: 600px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}*/

</style>
