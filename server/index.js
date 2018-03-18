const send = require("koa-send");
const Koa = require("koa");
const Router = require("koa-router");
const userAgent = require("koa-useragent");
const path = require("path");
const swig = require("swig");
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/template");

app.use(userAgent);

router.get("/", function(ctx, next) {
  // let token =  ctx.cookies.get("passToke");
  //     if(token!==null||token !== ''){
  //         let username = ctx.cookies.get("username");
  //         ctx.cookies.set("token",token,{
  //             httpOnly:false,
  //             expires:new Date(2020,1,1),
  //             domain:".muxixyz.com"
  //         })
  //         ctx.cookies.set("username",username,{
  //             httpOnly:false,
  //             expires:new Date(2020,1,1),
  //             domain:".muxixyz.com"
  //         })
  //     }
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/?sort=:category", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/get_one_all/:id", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/view/:id", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "view.html"));
  ctx.body = template({});
});

router.get("/send", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "send.html"));
  ctx.body = template({});
});

router.get("/landing", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "landing.html"));
  ctx.body = template({});
});

router.get("/android", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});
router.get("/frontend", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/design", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/product", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});
router.get("/backend", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});
router.get("/mine", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});
router.get("/hot", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});
router.get("/new", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

router.get("/send/:id/", function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "send.html"));
  ctx.body = template({});
});

router.get(/^\/static(?:\/|$)/, async ctx => {
  let filepath = ctx.path.replace(/static\//, "");
  await send(ctx, filepath, {
    root: path.join(__dirname, "../dist")
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("listening on port 3000");
