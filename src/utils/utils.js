
import i18n from "@assets/i18n";
import {getLocalStorage} from "@utils/localStorage";
export function throttle(method, delay, duration) {
  var timer = null;
  var begin = new Date();
  return function() {
    var context = this,
      args = arguments;
    var current = new Date();
    clearTimeout(timer);
    if (current - begin >= duration) {
      method.apply(context, args);
      begin = current;
    } else {
      timer = setTimeout(function() {
        method.apply(context, args);
      }, delay);
    }
  };
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @desc 下载文件
 */
export const downloadFiles = (url) => {
  try {
    const a = document.createElement("a");
    a.setAttribute("id", "downloadMsg");
    a.setAttribute("download", "");
    a.setAttribute("href", url);
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.getElementById("downloadMsg").remove();
    }, 2000);
  } catch (e) {
  }
};

/**
 * 向指定路径发送下载请求
 * @param{String} url 请求路径
 */
export const downLoadByUrl = (url) =>{
  var xhr = new XMLHttpRequest();
  //GET请求,请求路径url,async(是否异步)
  xhr.open('GET', url, true);
  //设置请求头参数的方式,如果没有可忽略此行代码
  if(getLocalStorage('language') == 'zh'){
    xhr.setRequestHeader('Accept-Language', 'zh-CN,zh;q=0.9');
  }else{
    xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.9');
  }

  // xhr.setRequestHeader("token", token);
  //设置响应类型为 blob
  xhr.responseType = 'blob';
  //关键部分
  xhr.onload = function (res) {
    //如果请求执行成功
    if (this.status == 200) {
      var blob = xhr.response;
      // var filename = "";
      var a = document.createElement('a');
      // blob.type = "application/octet-stream";
      //创键临时url对象
      var url = URL.createObjectURL(blob);
      a.href = url;
      // a.download=filename;
      a.click();
      //释放之前创建的URL对象
      window.URL.revokeObjectURL(url);
    }
  };
  //发送请求
  xhr.send();
}


export function formatNum(num) {
	if(!/^([+\-])?(\d+)(\.\d+)?$/.test(num)){
        return num;
    }
	let a = RegExp.$1;
	let b = RegExp.$2;
	let c = RegExp.$3;
	let re = new RegExp().compile("(\\d)(\\d{3})(,|$)");
	while(re.test(b))
	b = b.replace(re,"$1,$2$3");
	return a +""+ b +""+ c;
};


/**
 * @desc 邮箱验证
 */
export const mailboxVerification = (email) => {
  if (!email) {
    return i18n.t('all.inpute');
  } else if ( !/^(([a-z0-9A-Z]+[- | a-z0-9A-Z . _])|([A-Za-z0-9_\-\.]))+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(email)) {
    return i18n.t('all.youremail');
  } else {
    return "";
  }
};

/**
 * @desc 防抖函数
 */
export const debounceFun = (fn, delay = 300) => {  //默认300毫秒
    var timer;
    return function() {
      var args = arguments;
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);   // this 指向vue
      }, delay);
    };
};
