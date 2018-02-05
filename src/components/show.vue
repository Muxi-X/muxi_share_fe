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
    <div >
      <md-button v-on:click="submit_method" :class="$style.submit_button" class="md-raised">Submit</md-button>
    </div>
  </div>
</template>


<script>
import haveToken from '../common/haveToken'
import Cookie from '../common/cookie'
import API from '../common/service'
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
        let body ={comment: this.text};
        let token = Cookie.getCookie('token');
        if(this.text) {
          API.sendComment(this.id,body,token).then(res => {
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
  color:#2296f3;
  border: solid 1px #2296f3;
  border-radius: 10%;
}
</style>
