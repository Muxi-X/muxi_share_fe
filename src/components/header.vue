<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">木犀分享</h2>
      <md-button href="/" class="md-warn">首页</md-button>
      <md-button href="http://auth.muxixyz.com/logout/" class="md-warn">登出</md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h2 class="md-title">MUXI SHARE</h2>
        </div>
      </md-toolbar>
      <md-list>
        <md-button href="/">
          <md-list-item>
            <md-icon class="md-accent">home</md-icon> <span>home</span>
          </md-list-item>
        </md-button>
        <md-divider class="md-inset"></md-divider>
        <md-button href="http://auth.muxixyz.com/logout/">
          <md-list-item>
            <md-icon class="md-accent">send</md-icon> <span>sign out</span>
          </md-list-item>
        </md-button>
      </md-list>
    </md-sidenav>
    <div :class="$style.parallax">
      <div :class="$style.background"></div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
}

</script>


<style lang="scss" module>
.parallax{
  width: auto;
  height: 270px;
}
.background{
  height: 100%;
  width: 100%;
  background-image: url("../assets/header_img.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
