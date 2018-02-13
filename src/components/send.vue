
<template>
  <div>
    <he></he>
    <md-card :class="$style.sendcard">
      <div method="post">
        <md-input-container md-inline :class="$style.title_con">
          <md-input :class="$style.title_font" placeholder="分享主题" v-model="share.title"></md-input>
        </md-input-container>
      </div>
      <div :class="$style.send_radio">
        <md-radio v-if='id===null||id===undefined' v-model="share.tags" v-for='(choice,index) in choices' :key="index" name="my-test-group1" :md-value="choice">{{choice}}</md-radio>
      </div>
       <div :class="$style.editor">
       <textarea :value="share.share" @input="update"></textarea>
      <div :class="$style.markdown" v-html="compiledMarkdown"></div> 
    </div>
    </md-card>
     <md-button   :class="$style.send_post" class="md-raised md-primary"  @click="post">Post</md-button>
    <foot></foot>
  </div>
</template>


 <script>

import header from './header.vue'
import footer from './footer.vue'
import Cookie from '../common/cookie.js'
import marked from '../common/marked'

var _ = require('lodash');


export default {
  data() {
    return {
      choices:['frontend','backend','android','design','product'],
      share : this.shareContent,
      id: this.id
    }
  },
  components: {
    "he": header,
    "foot": footer,
  },
  props : {
    fetchFun:Function,
    shareContent:Object,
    id:[Number,null]
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.share.share||'', { sanitize: false })
    }
  },
  methods: {
    update:
        _.debounce(function (e) {
        this.share.share = e.target.value
      }, 300),
    post:function(){
      if(this.share.title===''||this.share.tags===''||this.share.share===''){
        alert('请将信息填完整')
      }else{
        let token = Cookie.getCookie('token');
        this.fetchFun(this.share,token,this.id)  
        this.changeWeb(); 
      }    
    },
    changeWeb:function(){ 
        window.location =  '/'     
    }
  },
}
</script>

<style lang="scss" module>

.sendcard {
  height: 700px;
  width: 100%;
  margin: 5% auto;
}
.title_con {
  height: 100%;
  padding-bottom: 20px;
}

.title_font {
  /*font-size: px;*/
  text-align: center;
}
  .editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, .markdown{
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}
.send_radio{
  border-bottom:1px solid #2296f3;
  text-align: center;
}
.send_post{
  //  
  text-align: center
}
code {
  color: #f66;
}
</style>
