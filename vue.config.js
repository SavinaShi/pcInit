const path = require('path')
const webpack = require("webpack");
const title = "kaibo";
function resolve(dir) {
  return path.join(__dirname, dir)
}
const cdn = {
  css: [
    // "https://static.kaiboke.net/living/css/element.min.css",
  ],
  js: [
    "https://static.kaiboke.net/living/js/vue.min.js",
    "https://static.kaiboke.net/living/js/vue-router.min.js",
    "https://static.kaiboke.net/living/js/axios.min.js",
    // "https://static.kaiboke.net/living/js/element.min.js",
  ],
};
const cdnsgp = {
  css: [
    // "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/css/element.min.css",
  ],
  js: [
    "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/js/vue.min.js",
    "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/js/vue-router.min.js",
    "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/js/axios.min.js",
    // "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/js/element.min.js",
  ],
};
module.exports = {
  publicPath: process.env.ROOT_URL,
  runtimeCompiler: true,
  productionSourceMap: false,
  transpileDependencies: [],
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8081,
    disableHostCheck: true,
    https: false,
    proxy: {
      "/living/": {
        // target: "http://192.168.5.51:8001", // 孟
        //  target: "http://192.168.3.230:8001",  // 李
        // target: "http://192.168.3.232:8001",  // 马

        // target: "http://192.168.3.231:8001", // 吕
        // target: "https://dev-starrai.3tilabs.com/cms",  // 56
        //  target: "https://test-starrai.3tilabs.com/cms",  // 56
        // target:"https://api.kaiboke.net",  // 正式
        // target:"https://asiaapi.kaiboke.net",  // 正式 sgp
        target: "https://uatapi.kaiboke.net",  // 56
        // target: "https://daniel.3tilabs.com/cms",  // 55
        changeOrigin: true,
      },
      "/user/": {
        // target: "http://192.168.5.51:8004", // 孟
        //  target: "http://192.168.3.230:8004", // 李
        // target: "http://192.168.3.232:8004", // 马
        // target: "http://192.168.3.231:8004", // 吕
        // target: "https://dev-starrai.3tilabs.com/cms",  // 56
        // target: "https://test-starrai.3tilabs.com/cms",
        // target: "https://daniel.3tilabs.com/cms",
        // target:"https://api.kaiboke.net",
        // target:"https://asiaapi.kaiboke.net",  // 正式 sgp
        target: "https://uatapi.kaiboke.net",
        changeOrigin: true,
      },
      "/template": {
        // target: "http://192.168.5.51:8002", // 孟
        //  target: "http://192.168.3.230:8002", // 李
        // target: "http://192.168.3.232:8002",  //马
        // target: "http://192.168.3.231:8002", // 吕
        // target: "https://dev-starrai.3tilabs.com/cms",  // 56
        //  target: "https://test-starrai.3tilabs.com/cms",
        // target:"https://api.kaiboke.net",
        // target:"https://asiaapi.kaiboke.net",  // 正式 sgp
        target: "https://uatapi.kaiboke.net",
        // target: "https://daniel.3tilabs.com/cms",
        changeOrigin: true,
      },
      "/third": {
        // target: "http://192.168.5.51:8003", // 孟
        // target: "http://192.168.3.230:8003", // 李
        // target: "http://192.168.3.232:8003", //马
        // target: "http://192.168.3.231:8003",
        // target: "https://dev-starrai.3tilabs.com/cms",  // 56
        // target: "https://test-starrai.3tilabs.com/cms",
        // target:"https://api.kaiboke.net",
        // target:"https://asiaapi.kaiboke.net",  // 正式 sgp
        target: "https://uatapi.kaiboke.net",
        // target: "https://daniel.3tilabs.com/cms",
        changeOrigin: true,
      },
      // "/api": {
      //   target: "http://172.16.0.105:9090", // Jam
      //   changeOrigin: true,
      // },
    },
  },
  chainWebpack: (config) => {
    // 设置一些常用alias
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      // .set("@views", resolve("src/views"))
      .set("@assets", resolve("src/assets"))
      .set("@style", resolve("src/style"))
      .set("@utils", resolve("src/utils"))
      .set("@config", resolve("src/config"))
      // .set("@init", resolve("src/init"))
      // .set("@constances", resolve("src/constances"))
      .set("@api", resolve("src/api"));
    config.plugins.delete("prefetch");
    config.module
      .rule("images")
      .test(/\.(jpg|png|gif)$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 1,
        publicPath:
          //  process.env.VUE_APP_STARRAI_ENV === "prd"
          process.env.NODE_ENV === "production"
            ? process.env.VUE_APP_STARRAI_ENV == "prd-sgp" || process.env.VUE_APP_STARRAI_ENV == "uat_sgp" ? "https://kaibostatic.s3.ap-southeast-1.amazonaws.com/living/images" : "https://static.kaiboke.net/living/images"
            : "/images",
        outputPath: "images",
        name: "[name].[ext]",
      })
      .end();

    // config.plugin("html").tap((args) => {
    //   args[0].title = title;
    //   if (process.env.VUE_APP_STARRAI_ENV == 'prd-sgp' || process.env.VUE_APP_STARRAI_ENV == "uat_sgp") {
    //     args[0].cdn = cdnsgp;
    //   } else {
    //     args[0].cdn = cdn;
    //   }
    //   return args;
    // });
  },

  configureWebpack: (config) => {
    // if (process.env.NODE_ENV === "production") {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // }
    // config.plugins.push(
    //   new webpack.ProvidePlugin({
    //     introJs: ["intro.js"],
    //   })
    // );
    // config.externals = {
    //   vue: "Vue",
    //   // "element-ui": "ELEMENT",
    //   "vue-router": "VueRouter",
    //   axios: "axios",
    // };
  },
  css: {
    loaderOptions: {
      sass: {
        // prependData: process.env.VUE_APP_STARRAI_ENV == "prd-sgp" || process.env.VUE_APP_STARRAI_ENV == "uat_sgp" ? `@import "@/style/mixin.scss";@import "@/style/app/fonts-sgp.scss";` : `@import "@/style/mixin.scss";@import "@/style/app/fonts.scss";`,
      },
    },
  },
};
