<template>
<div>
  <he></he>
  <foot></foot>
</div>
</template>


<script>
import header from './header.vue'
import footer from './footer.vue'

export default {
    data() {

    },
    components: {
      "he": header,
      "foot": footer,
    }
  }
</script>


<style lang="scss" module>
</style>
