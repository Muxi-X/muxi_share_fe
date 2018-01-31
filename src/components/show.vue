<template>
  <div>
    <div :class="$style.comment_title">Add New Comments</div>
    <form novalidate @submit.stop.prevent="submit" :class="$style.cmtextarea">
      <md-input-container md-clearable>
        <md-icon>chat</md-icon>
        <label>Comment here</label>
        <md-textarea v-model.trim="text"></md-textarea>
      </md-input-container>
    </form>
    <div :class="$style.submit_button">
      <md-button v-on:click="submit_method" class="md-primary md-raised">Submit</md-button>
    </div>
  </div>
</template>


<script>
import haveToken from '../common/haveToken'
import Cookie from '../common/cookie'
export default {
  data() {
    return{
      text:""
    }
  },
  props:['id'],
  methods: {
    submit_method(e){
      e.stopPropagation();
      
      if(haveToken()){

        if(this.text) {
          fetch('/api/v2.0/' + this.id + '/add_comment/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': Cookie.getCookie('token') //token
            },
            body: JSON.stringify({
              comment: this.text
            })
          })
          .then(res => {
            this.text=""
            // this.$parent.fetchComments()
            this.$emit('newComment')
          })
        }
      }else{
        alert('请先登陆！')
      }
    }
  }
}

</script>
<style lang="scss" module>
.comment_title{
  margin: 36px 16px;
  font-size: 24px;
}
.cmtextarea{
  margin: 16px 56px;
}
.submit_button{
  float: right;
  margin-right: 48px;
}
</style>
