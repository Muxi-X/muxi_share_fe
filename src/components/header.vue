<template>
  <div class="phone-viewport">
    <md-toolbar style="background-color:transparet" class="md-primary">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">木犀分享</h2>
      <md-button href="/" >首页</md-button>
      <md-button   @click="login"  >{{username}}</md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h2 class="md-title">MUXI SHARE</h2>
        </div>
      </md-toolbar>
      <md-list>
        <md-button href="/">
          <md-list-item>
            <md-icon class="md-accent">home</md-icon> <span>home</span>
          </md-list-item>
        </md-button>
        <md-divider class="md-inset"></md-divider>
        <md-button @click="logout" >
          <md-list-item >
            <md-icon class="md-accent">send</md-icon> 
            <span >login out</span>
          </md-list-item>
        </md-button>
      </md-list>
    </md-sidenav>
    <div :class="$style.parallax">
      <img :src="picture" :class="$style.background" >
    </div>
  </div>
</template>


<script>
import Cookie from '../common/cookie.js'
import haveToken from '../common/haveToken'
export default {
  data() {
    return {
      username:'',
      picture:'',
      srcs:[
        "http://pic32.photophoto.cn/20140929/0008020236750834_b.jpg",
        "https://wx1.sinaimg.cn/mw690/006P0MECgy1foexb1uwbhj30wi0goq6x.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518522886724&di=49f8c6f82377cbf8ba4f933a5790b950&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D89d85c0443540923be646b3dfa31bb7c%2Fdc54564e9258d109b7b70b95db58ccbf6c814d44.jpg",
        "http://pic2.ooopic.com/12/58/16/15bOOOPICae.jpg",
        "http://imgsrc.baidu.com/imgad/pic/item/03087bf40ad162d9ee1ea9311adfa9ec8a13cd2f.jpg",
        
        
      ]
    }
  },
  mounted(){
   if(haveToken()){
     this.username = Cookie.getCookie('username')
   }else{
     this.username = '登陆'
   } 
   console.log(Math.random()*this.srcs.length)
   let randomNum = parseInt(Math.random()*this.srcs.length)
   this.picture =this.srcs[randomNum];
  
  },
  methods: {
    login() {
        if(haveToken()){
          
          //应该跳转到个人中心
          window.location = '/'
        }else{
          // window.location = "http://120.77.246.73:4000?landing=localhost:3000/landing"
          // window.location = "http://pass.muxixyz.com/?landing=share.muxixyz.com/landing";
           window.location = "http://pass.muxixyz.com/?landing=localhost:3000/landing";
        }
       
 
    },
    logout(){
     
      //清除存在cookie中的share设置的属性
      Cookie.clearCookie('token');
      Cookie.clearCookie('Mt');
      Cookie.clearCookie('uid');
      Cookie.clearCookie('username');
      window.location = '/'
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
  
  }
}

</script>


<style lang="scss" module>

.parallax{
  overflow:hidden;
  width: auto;
  height: 370px;
}
.background{
 width: 100%;  
 height: 100%;  

}
</style>
