<template>
  <div>
    <md-tabs md-centered class="md-warn" @change="change">
      <md-tab md-label="NEW" md-icon="fiber_new"></md-tab>
      <md-tab md-label="HOT" md-icon="whatshot"></md-tab>
      <md-tab md-label="MINE" md-icon="assignment_ind"></md-tab>
      <md-tab md-label="FRONTEND" md-icon="important_devices"></md-tab>
      <md-tab md-label="BACKEND" md-icon="build"></md-tab>
      <md-tab md-label="ANDROID" md-icon="android"></md-tab>
      <md-tab md-label="DESIGN" md-icon="photo"></md-tab>
      <md-tab md-label="PRODUCT" md-icon="lightbulb_outline"></md-tab>
    </md-tabs>
  </div>
</template>








<script>
var route = ["/new","/hot","/mine","/frontend","/backend","/android","/design","/product","/"]
export default {
    methods: {
      change(e) {
        console.log(window.location.pathname)
        if(route.indexOf(window.location.pathname) > -1){
          window.history.pushState(null, null, route[e]);
        }
      }
    }
  }

</script>
<style lang="scss" module>
</style>
