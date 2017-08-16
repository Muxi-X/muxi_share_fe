<template>
  <div>
    <he :class="$style.header"></he>
  </div>
</template>


<script>
import header from './header.vue'

export default {
    components: {
      "he": header
    }
}
</script>


<style lang="scss" module>
.app {
    margin: 0;
}
.foo {
    margin-top: 180px;
}
.header{
  height: 50px;
}
</style>
