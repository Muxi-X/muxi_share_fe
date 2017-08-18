<template>
  <div :class="$style.list_container">
    <div v-for="item in items">
      <div :class="$style.card_container">
        <md-card class="md-warn">
          <md-card-header>
            <md-avatar class="md-large">
              <img v-bind:src="item.avatar" alt="People">
            </md-avatar>
            <md-card-header-text>
              <div class="md-title">  <div>{{item.title}}</div></div>
              <div class="md-subhead"><div>{{item.username}}</div></div>
              <div>{{item.comment_num}}</div>
            </md-card-header-text>
          </md-card-header>
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
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  height: 240px;
  margin-top: 20px;
}
</style>
