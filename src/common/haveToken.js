//判断是否有cookie
import Cookie from "./cookie";
function haveToken() {
  let token = Cookie.getCookie("token");
  if (token !== undefined && token !== null && token != "") {
    return true;
  }
  return false;
}

module.exports = haveToken;
