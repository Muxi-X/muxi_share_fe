<template>
  <div :class="$style.footer_container">
    <div :class="$style.muxi_logo"> Hello from Wuhan © 2014-2017 Muxistudio</div>
    <md-button href="http://muxistudio.com/" :class="$style.muxi_web">木犀官网</md-button>
    <md-button href="http://book.muxixyz.com/" :class="$style.muxi_web">木犀图书</md-button>
  </div>
</template>
<script>
</script>
<style lang="scss" module>
.footer_container{
  width: auto;
  height: 100px;
  background-color: #0d47a1;
}
.muxi_logo{
  font-size: 16px;
  color: white;
  display: inline-block;
  vertical-align: middle;
  margin-left: 32%;
  line-height: 100px;
}
.muxi_web{
  color: white;
  width: 100px;
  display: inline-block;
  vertical-align: middle;
}
</style>
