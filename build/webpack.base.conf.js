var path = require("path");
var config = require("../config");
var utils = require("./util");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
var webpack = require("webpack");

process.noDeprecation = true;

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  cache: true,
  entry: {
    index: "./src/index.js",
    view: "./src/view.js",
    send: "./src/send.js",
    landing: "./src/landing.js"
  },
  output: {
    path: path.join(__dirname, "../"),
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    //... 其他配置
    modules: [path.resolve(__dirname, "../node_modules")], // node_modules文件夹所在的位置取决于跟webpack.base.conf.js相对的路径
    alias: {
      //... 其他配置
      api: path.resolve(__dirname, "../src/common/service.js"), // api文件所在的位置取决于跟webpack.base.conf.js相对的路径，在项目中会自动转换跟项目文件的相对路径
      dateFormatter: path.resolve(__dirname, "../src/common/dateFormatter.js"),
      cookie: path.resolve(__dirname, "../src/common/cookie.js"),
      mark: path.resolve(__dirname, "../src/common/marked.js"),
      haveToken: path.resolve(__dirname, "../src/common/haveToken.js")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: process.env.NODE_ENV === "production"
        }
      },
      {
        test: /\.js$/,
        loader: ["babel-loader?cacheDirectory=true"],
        include: [resolve("src")], // src是项目开发的目录
        exclude: [path.resolve("../node_modules")] // 不需要编译node_modules下的js
      },

      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    //compress js code
    new UglifyJsPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js|\.css$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, "../node_modules")) >= 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: "shared-module",
      minChunks: (module, count) =>
        count >= 2 // 当一个模块被重复引用2次或以上的时候单独打包起来。
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ["vendor"]
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "template/base.html",
      inject: false,
      template: path.join(__dirname, "../template/base.ejs"),
      chunks: ["manifest", "vendor"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "template/index.html",
      inject: false,
      template: path.join(__dirname, "../template/index.ejs"),
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "template/view.html",
      inject: false,
      template: path.join(__dirname, "../template/view.ejs"),
      chunks: ["view"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "template/send.html",
      inject: false,
      template: path.join(__dirname, "../template/send.ejs"),
      chunks: ["send"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "template/landing.html",
      inject: false,
      template: path.join(__dirname, "../template/landing.ejs"),
      chunks: ["landing"]
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};
