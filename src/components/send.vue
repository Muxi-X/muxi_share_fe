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
        <md-radio v-model="radio1" name="my-test-group1" md-value="frontend">frontend</md-radio>
        <md-radio v-model="radio1" name="my-test-group1" md-value="backend">backend</md-radio>
        <md-radio v-model="radio1" name="my-test-group1" md-value="android">Android</md-radio>
        <md-radio v-model="radio1" name="my-test-group1" md-value="design">design</md-radio>
        <md-radio v-model="radio1" name="my-test-group1" md-value="product">product</md-radio>
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

var _ = require('lodash');
var marked = require('marked');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

export default {
  data() {
    return {
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
        let header ={
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'token':  Cookie.getCookie('token') //toke
                    };
        
        if(this.id!==''&& this.id!==null && this.id!==undefined){
          //重新编辑
          let rewrite = {
            share:this.input,
            title:this.title
          }
          let myInitRe = { method: 'put', 
                       headers: header,
                       body:JSON.stringify(rewrite)
                      };
          fetch(`/api/v2.0/${this.id}/edit/`,myInitRe).then(res=>{
            if(res.ok){
              this.changeWeb()
            }else{
              alert('服务器出错')
            }
          })   
        }else{
          let data={}
          data.title=this.title
          data.share=this.input
          data.tags=this.radio1  
          let myInitNe = {
            method:'post',
            headers:header,
            body: JSON.stringify(data)
          }
         fetch(`/api/v2.0/send/`,myInitNe)
         .then(res=>{
          if(res.ok){
             this.changeWeb();
          }else{
             alert('服务器发生错误')
          }
            })
         .then(value=>{
           console.log(value)
         })
         .catch(error=>{
           console.log('There has been a problem with your fetch operation:'+ error.message)
         })
       }  
      }    
    },
    changeWeb:function(){
       
        window.location =  '/'
        
    }
  },
  mounted() {
       var api = window.location.pathname;
       this.id = api.split('/')[2]; 
       let myInit = { method: 'GET', 
                       headers: {
                             'Accept': 'application/json',
                             'Content-Type': 'application/json',
                             'token': Cookie.getCookie('token') //token
                              },
                      };
      if(api!==''){
          fetch('/api/v2.0/' + this.id + '/views/' ,myInit).then(res => {
        return res.json();
      })
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
