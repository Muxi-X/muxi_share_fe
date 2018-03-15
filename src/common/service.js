function Fetch(url, opt = {}) {
  opt.method = opt.method || "GET";
  opt.headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (opt.token) {
    opt.headers.token = opt.token;
  }

  opt.body = JSON.stringify(opt.data) || null;

  return fetch(url, opt).then(response => {
    return response.json().then(json => {
      switch (response.status) {
        case 200:
          return json;
        case 502:
          util.message(response.statusText, "err");

        case 403:
          alert("无权限");
          throw response.statusText;
        case 401:
          if (url === "/api/v2.0/token/") {
            window.location.href =
              "http://pass.muxixyz.com/?landing=share.muxixyz.com/landing";
            // "http://pass.muxixyz.com/?landing=localhost:3000/landing";
          }
          // throw response.statusText;
          break;
      }
    });
  });
}

let service = {
  //share
  getSortedChoosePage(page, sort, id = null) {
    if (id === null) return Fetch("/api/v2.0/?page=" + page + "&sort=" + sort);
    else
      return Fetch("/api/v2.0/?page=" + page + "&sort=" + sort + "&id=" + id);
  },
  getSortedPage(url) {
    return Fetch("/api/v2.0/" + url);
  },
  choosePage(pageNum) {
    return Fetch("/api/v2.0/?page=" + pageNum);
  },
  login(body) {
    return Fetch("/api/v2.0/login/", {
      method: "POST",
      data: body
    });
  },
  signup(body) {
    return Fetch("/api/v2.0/signup/", {
      method: "POST",
      data: body
    });
  },
  sendShare(body, token) {
    return Fetch(`/api/v2.0/send/`, {
      method: "POST",
      data: body,
      token: token
    });
  },
  rewriteShare(body, token, id) {
    return Fetch("/api/v2.0/" + id + "/edit/", {
      method: "put",
      data: body,
      token: token
    });
  },
  getView(id) {
    return Fetch("/api/v2.0/" + id + "/views/");
  },
  deleteShare(id, token) {
    return Fetch("/api/v2.0/" + id + "/delete/", {
      method: "delete",
      token: token
    });
  },

  //Comment
  sendComment(id, body, token) {
    return Fetch("/api/v2.0/" + id + "/add_comment/", {
      method: "post",
      data: body,
      token: token
    });
  },
  isTokenEffective(token) {
    return Fetch("/api/v2.0/token/", {
      token: token
    });
  }
};

module.exports = service;
