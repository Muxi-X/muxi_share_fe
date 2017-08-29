<template>
<div>
  <he></he>
  <md-card :class="$style.sendcard">
    <div method="post">
      <md-input-container md-inline :class="$style.title_con">
        <md-input :class="$style.title_font" placeholder="分享主题"></md-input>
      </md-input-container>
    </div>
    <div>
      <md-radio v-model="radio1" name="my-test-group1" md-value="frontend">frontend</md-radio>
      <md-radio v-model="radio1" name="my-test-group1" md-value="backend">backend</md-radio>
      <md-radio v-model="radio1" name="my-test-group1" md-value="Android">Android</md-radio>
      <md-radio v-model="radio1" name="my-test-group1" md-value="design">design</md-radio>
      <md-radio v-model="radio1" name="my-test-group1" md-value="product">product</md-radio>
    </div>
  </md-card>

  <foot></foot>
</div>
</template>


<script>
import header from './header.vue'
import footer from './footer.vue'

export default {
    data() {
      return{
        radio1:""
      }
    },
    components: {
      "he": header,
      "foot": footer,
    },
    methods:{
      change(){
        console.log(this.radio1)
      }
    }
  }
</script>


<style lang="scss" module>
.sendcard{
  height: 700px;
  width: 840px;
  margin: 56px auto;
}
.title_con{
  height: 100%;
  padding-bottom: 20px;
}
.title_font{
  /*font-size: px;*/
  text-align: center;
}
</style>
