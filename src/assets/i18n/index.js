import Vue from 'vue'
//  安装   vue-i18n
// 引入使用
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import en from './en-in.js';
import zh from './zh-hk.js';

Vue.use(VueI18n)

// 放置语言文件
const locales = {
  zh: {
    ...zh,
    ...zhLocale,
  },
  en: {
    ...en,
    ...enLocale,
  },
};
// 创建一个 VueI18n 实例

const i18n = new VueI18n({
  // 表示使用哪种语言渲染页面
  locale: 'en',
  messages: locales
})

export default i18n
