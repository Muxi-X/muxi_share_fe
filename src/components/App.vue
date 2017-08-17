<template>
  <div>
    <he :class="$style.header"></he>
    <list></list>
  </div>
</template>


<script>
import header from './header.vue'
import list from './list.vue'

export default {
    components: {
      "he": header,
      "list": list
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
