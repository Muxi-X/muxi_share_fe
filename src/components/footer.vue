<template>
  <div :class="$style.footer_container">
    <div :class="$style.text_center">
      <div :class="$style.muxi_logo"> {{ 'Hello from Wuhan © 2014-' + new Date().getFullYear() + ' Muxistudio' }}</div>
      <a href="http://muxi.studio/" :class="$style.muxi_web">木犀官网</a>
      <a href="http://book.muxixyz.com/" :class="$style.muxi_web">木犀图书</a>
       <a href="https://ccnubox.muxixyz.com/" :class="$style.muxi_web">华师匣子</a>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" module>
.footer_container {
  width: 100%;
  height: 100px;
  background-color: #2296f3;
}
.text_center {
  text-align: -webkit-center;
}
.muxi_logo {
  font-size: 16px;
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: 100px;
}
.muxi_web {
  color: white;
  width: 80px;
  display: inline-block;
  vertical-align: middle;
}
</style>
