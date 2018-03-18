<template>
    <div class="login" id="landing">
        登录中...
    </div>
</template>

<script>
import Cookie from "cookie";
import API from "api";
export default {
  data() {
    return {
      url: "",
      login: false,
      username: ""
    };
  },
  mounted() {
    this.username = window.location.href
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];
    Cookie.setCookie("username", this.username);
    Cookie.setCookie(
      "Mt",
      window.location.href
        .split("?")[1]
        .split("&")[1]
        .split("=")[1]
    );

    let bodyin = {
      username: this.username,
      password: btoa("muxistudio@ccnu")
    };
    let bodyup = {
      username: this.username,
      password: "muxistudio@ccnu"
    };

    API.login(bodyin)
      .then(res => {
        return res;
      })
      .catch(
        API.signup(bodyup).then(value => {
          API.login(bodyin);
        })
      )
      .then(value => {
        Cookie.setCookie("token", value.token);
        Cookie.setCookie("uid", value.user_id);
        // Cookie.setCookie('avatar',value.avatar)
      });
    this.url = Cookie.getCookie("url");
    this.url = "/";
    setTimeout(() => {
      window.location = this.url;
    }, 1000);
  }
};
</script>
