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
        target: "https://uatapi.kaiboke.net",  // 56
        changeOrigin: true,
      },
      "/user/": {
        target: "https://uatapi.kaiboke.net",
        changeOrigin: true,
      },
      "/template": {
        target: "https://uatapi.kaiboke.net",
        changeOrigin: true,
      },
      "/third": {
        target: "https://uatapi.kaiboke.net",
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    // 设置一些常用alias
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
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
