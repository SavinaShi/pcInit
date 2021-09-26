import Vue from 'vue'
import filters from "./filters";
// import VueClipboard from "vue-clipboard2";
// import infiniteScroll from "vue-infinite-scroll";
// import { Loading } from "element-ui";
// import VueIntro from "vue-introjs";
// Vue.use(VueIntro);

// import "./assets/introjs/intro.css";
// import i18n from "@assets/i18n";

// Vue.prototype.$loadings = function () {
//   const loading = Loading.service({
//     lock: true,
//     text: i18n.t('loading') + '...',
//     spinner: "el-icon-loading",
//     background: "rgba(255, 255,255, 0.7)",
//   });
//   return loading;
// };

Object.keys(filters).forEach((filterName) => {
  Vue.filter(filterName, filters[filterName]);
});

// Vue.use(VueClipboard);