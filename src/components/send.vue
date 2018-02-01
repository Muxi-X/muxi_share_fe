<template>
  <div>
    <he></he>
    <md-card :class="$style.sendcard">
      <div method="post">
        <md-input-container md-inline :class="$style.title_con">
          <md-input :class="$style.title_font" placeholder="分享主题" v-model="title"></md-input>
        </md-input-container>
      </div>
      <div>
        
        <md-radio v-model="radio1" v-for='(choice,index) in choices' :key="index" name="my-test-group1" :md-value="choice">{{choice}}</md-radio>
      
      </div>
       <div :class="$style.editor">
       <textarea :value="input" @input="update"></textarea>
      <div :class="$style.markdown" v-html="compiledMarkdown"></div> 
    </div>
    </md-card>
     <md-button   :class="$style.post" class="md-raised md-primary"  @click="post">Post</md-button>
    <foot></foot>
  </div>
</template>


<script>
import header from './header.vue'
import footer from './footer.vue'
import Cookie from '../common/cookie.js'
import marked from '../common/marked'
import API from '../common/service'
var _ = require('lodash');


export default {
  data() {
    return {
      choices:['frontend','backend','android','design','product'],
      id:'',
      title:'',
      radio1: "",
      input:'# hello',
      share : {
          type: Object
        }
    }
  },
  components: {
    "he": header,
    "foot": footer,
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input||'', { sanitize: false })
    }
  },
  methods: {
    update:
        _.debounce(function (e) {
        this.input = e.target.value
      }, 300),
    post:function(){
      if(this.title===''||this.radio1===''||this.input===''){
        alert('请将信息填完整')
      }else{
        let token = Cookie.getCookie('token');
        if(this.id!==''&& this.id!==null && this.id!==undefined){
          //重新编辑
          let rewrite = {
            share:this.input,
            title:this.title
          }
          API.rewriteShare(this.id,rewrite,token)  
        }else{
          let data={}
          data.title=this.title
          data.share=this.input
          data.tags=this.radio1 
          API.sendShare(data,token);
 
        
       } 
        this.changeWeb(); 
      }    
    },
    changeWeb:function(){
       
        window.location =  '/'
        
    }
  },
  mounted() {
      let token = Cookie.getCookie('token')
       var api = window.location.pathname;
       this.id = api.split('/')[2]; 
      if(this.id!==''&&this.id!==undefined&&this.id!==null){
      API.getView(this.id)
      .then(value => {
      
        this.share = value.shares;
        this.radio1= this.share.tag;
        this.title = this.share.title;
        this.input = this.share.share;

        
      });
      }
    },
}
</script>


<style lang="scss" module>
.sendcard {
  height: 700px;
  width: 840px;
  margin: 56px auto;
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
.post{
   margin: -3% 46%;
}
code {
  color: #f66;
}
</style>
