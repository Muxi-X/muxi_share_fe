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
      if(this.text) {
        fetch('/api/v2.0/' + this.id + '/add_comment/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '' //token
          },
          body: JSON.stringify({
            comment: this.text
          })
        })
        .then(res => {
          this.text=""
          this.$parent.fetchComments()
        })
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
