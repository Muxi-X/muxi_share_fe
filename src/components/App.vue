<template>
  <div>
    <he :class="$style.header"></he>
    <list></list>
    <foot></foot>
  </div>
</template>


<script>
import header from './header.vue'
import list from './list.vue'
import footer from './footer.vue'

export default {
    components: {
      "he": header,
      "list": list,
      "foot": footer,
    }
}
</script>


<style lang="scss" module>

</style>
