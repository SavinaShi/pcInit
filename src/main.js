import Vue from 'vue'
import App from './App.vue'
import "@style/common.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import store from "./store";
import "./plugins";

// npm i vue-i18n
import i18n from "./assets/i18n/index";

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  i18n,
}).$mount('#app')
