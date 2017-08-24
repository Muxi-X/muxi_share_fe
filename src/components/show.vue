<template>
  <div>
  <div :class="$style.comment_title">Add New Comments</div>
  <form  novalidate @submit.stop.prevent="submit" :class="$style.cmtextarea">
    <md-input-container md-clearable>
      <md-icon>chat</md-icon>
      <label>Comment here</label>
      <md-textarea></md-textarea>
    </md-input-container>
  </form>
</div>
</template>


<script>

export default {

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
</style>
