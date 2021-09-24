import i18n from "@assets/i18n";

const http = {};
import { baseURL } from "./baseUrl";
import { getLocalStorage } from "@utils/localStorage";
import router from "../router";
// import { Loading } from "element-ui";
// let loading;
// function startLoading() {
//   loading = Loading.service({
//     lock: true,
//     text: "加载中...",
//     spinner: "el-icon-loading",
//     background: "rgba(0, 0, 0, 0.7)",
//   });
// }
// function endLoading() {
//   if (loading) {
//     loading.close();
//     loading = null;
//   }
// }
var instance = axios.create({
  timeout: 200000,
  baseURL,
  validateStatus(status) {
    switch (status) {
      case 400:
        break;
      case 401:
        return;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
    }
    return status >= 200 && status < 300;
  },
});

instance.interceptors.request.use(
  function (config) {
    if (window.localStorage.getItem('token') && window.localStorage.getItem('token') != 'undefined') {
      config.headers.Authorization = window.localStorage.getItem('token') || '';
    }
    if (getLocalStorage('language') == 'zh') {
      config.headers['Accept-Language'] = 'zh-CN,zh;q=0.9';
    } else {
      config.headers['Accept-Language'] = 'en-US,en;q=0.9';
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // endLoading();
    return response.data;
  },
  (err) => {
    // endLoading();
    return Promise.reject(err);
  }
);

http.get = function (url, options) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (url == '/user/v1/user/info') {
            // if (process.env.VUE_APP_STARRAI_ENV == "prd-sgp" || process.env.VUE_APP_STARRAI_ENV == "uat_sgp") {
            //     router.push({ name: "PresentationEn" }); // 首页
            // } else {
            //     router.push({ name: "Presentation" }); // 首页
            // }
          } else {
            // if(getLocalStorage('loginType') == '1'){
            //     router.push({ name: "Login" }); // 普通用户 登录
            // }else{
            //     router.push({ name: "EnterpriseLogin" }); // 企业登录
            // }
          }

        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        reject(e)
      });
  });
};

http.post = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (getLocalStorage('loginType') == '1') {
            router.push({ name: "Login" }); // 普通用户 登录
          } else {
            router.push({ name: "EnterpriseLogin" }); // 企业登录
          }
        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

// post 请求文件流下载
http.postDown = function (url, data, options) {
  options = {
    responseType: 'blob'
  }
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (getLocalStorage('loginType') == '1') {
            router.push({ name: "Login" }); // 普通用户 登录
          } else {
            router.push({ name: "EnterpriseLogin" }); // 企业登录
          }
        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};


http.put = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (getLocalStorage('loginType') == '1') {
            router.push({ name: "Login" }); // 普通用户 登录
          } else {
            router.push({ name: "EnterpriseLogin" }); // 企业登录
          }
        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

http.patch = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .patch(url, data, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (getLocalStorage('loginType') == '1') {
            router.push({ name: "Login" }); // 普通用户 登录
          } else {
            router.push({ name: "EnterpriseLogin" }); // 企业登录
          }
        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

http.delete = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, data, options)
      .then((response) => {
        if (response.code == 3 || response.code == 4 || response.code == 8) { // 3  token为空   4 token失效
          if (getLocalStorage('loginType') == '1') {
            router.push({ name: "Login" }); // 普通用户 登录
          } else {
            router.push({ name: "EnterpriseLogin" }); // 企业登录
          }
        } else {
          resolve(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export default http;
