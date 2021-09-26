import i18n from "@assets/i18n";

export const formatSeconds = (value) => {
    var theTime = parseInt(value); // 秒
    var middle = 0; // 分
    var hour = 0; // 小时

    if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }
    var result = "" + parseInt(theTime) + "秒";
    if (middle > 0) {
        result = "" + parseInt(middle) + "分" + result;
    }
    if (hour > 0) {
        result = "" + parseInt(hour) + "小时" + result;
    }
    return result;
};


export function getWeek(date) {
    date = parseFloat(date);
    if (date) {
        var week;
        var time = new Date(date);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        let enMouth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"]
        let zhWeek = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
        let enWeek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat")
        var weekArray = i18n.locale == 'zh' ? zhWeek : enWeek
        week = weekArray[time.getDay()]
        let dataVal = ''
        if (i18n.locale == 'zh') {
            dataVal = y + '.' + m + '.' + d + ' ' + week
        } else {
            dataVal = week + ',' + d + ' ' + enMouth[time.getMonth()] + ',' + y
        }
        return dataVal;
    }
}

// 通过传入开始时间和结束时间算出时间差
export function calTime(startTime, endTime) {
    // var timestamp=new Date().getTime(); //计算当前时间戳
    // var timestamp = (Date.parse(new Date()))/1000;//计算当前时间戳 (毫秒级)
    var date3 = endTime - startTime; //时间差的毫秒数
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.floor(leave3 / 1000);
    if (days > 0) {
        return days + "day " + (hours > 0 ? hours + "h " : "") + (minutes > 0 ? minutes + "m " : "") + (seconds > 0 ? seconds + "s" : "")
    }

    var result = seconds > 0 ? "" + seconds + 's' : "";
    if (minutes > 0) {
        result = "" + minutes + "m " + result;
    }
    if (hours > 0) {
        result = "" + hours + "h " + result;
    }
    if (date3 > 0) {
        return result
    } else {
        return "0h"
    }
}

// 通过传入开始时间和结束时间算出时间差
export function calTotalTime(startTime, endTime) {
    // var timestamp=new Date().getTime(); //计算当前时间戳
    // var timestamp = (Date.parse(new Date()))/1000;//计算当前时间戳 (毫秒级)
    var date3 = parseFloat(endTime) - parseFloat(startTime); //时间差的毫秒数
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.floor(leave3 / 1000);
    // return   days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒"

    // var weekArray =  i18n.locale == 'zh' ? zhWeek:enWeek
    var s = 's'
    var m = 'm'
    var h = 'h'
    var d = 'day '
    if (i18n.locale == 'zh') {
        s = '秒'
        m = '分 '
        h = '小时 '
        d = '天 '
    }
    if (days > 0) {
        return days + d + (hours > 0 ? hours + h : "") + (minutes > 0 ? minutes + m : "") + (seconds > 0 ? seconds + s : "")
    }
    var result = seconds > 0 ? "" + seconds + s : "";
    if (minutes > 0) {
        result = "" + minutes + m + result;
    }
    if (hours > 0) {
        result = "" + hours + h + result;
    }
    return result
}

// 通过传入开始时间和结束时间 算出时间差
export function timeMeridiem(date) {
    date = parseFloat(date)
    if (date) {
        var timestamp = new Date(date)
        var h = timestamp.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = timestamp.getMinutes();
        // var second = timestamp.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        // second = second < 10 ? ('0' + second) : second;
        var am = ''
        var pm = ''
        if (timestamp.getHours() >= 0 && timestamp.getHours() <= 12) {

            return h + ":" + minute + am
        } else {
            return h + ":" + minute + pm
        }
    }
}

// 通过传入开始时间和结束时间 算出时间差
export function timeStandard(date) {
    if (date) {
        date = parseFloat(date)
        var timestamp = new Date(date)
        var h = timestamp.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = timestamp.getMinutes();
        // var second = timestamp.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        // second = second < 10 ? ('0' + second) : second;
        if (timestamp.getHours() >= 0 && timestamp.getHours() <= 12) {
            return h + ":" + minute + ' '
        } else {
            return h + ":" + minute + ' '
        }
    }
}

// 通过传入开始时间和结束时间 算出时间差
export function livingTime(startTime, endTime) {
    // var timestamp=new Date().getTime(); //计算当前时间戳
    // var timestamp = (Date.parse(new Date()))/1000;//计算当前时间戳 (毫秒级)
    var date3 = endTime - startTime; //时间差的毫秒数
    //计算出相差天数
    // var days = Math.floor(date3 / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    // return   days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒"
    return hours + ":" + minutes + ":" + seconds
}


// 通过传入开始时间和结束时间 算出时间差
export function timeDay(time) {
    if (time) {
        let date = new Date(time)
        let yearVal = date.getFullYear(); //年;
        let monthVal = date.getMonth() + 1; //月;
        let dayVal = date.getDate(); //日;
        if (monthVal < 10) {
            monthVal = '0' + monthVal
        }
        if (dayVal < 10) {
            dayVal = '0' + dayVal
        }
        return yearVal + '.' + monthVal + '.' + dayVal
    }
}


export function getWeekTxt(date) {
    date = parseFloat(date)
    var week;
    var time = new Date(date);
    let zhWeek = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
    let enWeek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat")
    var weekArray = i18n.locale == 'zh' ? zhWeek : enWeek
    week = weekArray[time.getDay()]
    return week;
}


export function projectTime(time) {
    if (time) {
        time = time.slice(0, 10)
        time.replace('-', '.')
    }
    return time
}

// 计算脚本时长
export function scriptDuration(time) {
    var s = 's '
    var m = 'm '
    var h = 'h '
    var d = 'days '
    if (i18n.locale == 'zh') {
        s = '秒'
        m = '分 '
        h = '小时 '
        d = '天 '
    }
    if (time) {
        var secondTime = parseInt(time);// 秒
        //计算出相差天数
        var daysTime = 0; // 天
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                if (hourTime > 24) {
                    daysTime = parseInt(hourTime / 24)
                    hourTime = hourTime - (daysTime * 24)
                }
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);

            }
            //   Math.floor(secondTime / (24 * 3600))
        }
        var result = parseInt(secondTime) > 0 ? parseInt(secondTime) + s : '';
        if (minuteTime > 0) {
            result = parseInt(minuteTime) + m + result;
        }
        if (hourTime > 0) {
            result = "" + parseInt(hourTime) + h + result;
        }
        if (daysTime > 0) {
            result = daysTime + d + result;
        }
        result = result == '' ? '0s' : result
    } else {
        result = 0 + s
    }

    return result
}

// 计算脚本时长
export function scriptDurationTime(time) {
    if (time) {
        var secondTime = parseInt(time);// 秒
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }

        var result = "";

        if (hourTime > 0) {
            result = "" + parseInt(hourTime) + "h ";
        } else {
            result += "0h ";
        }

        if (minuteTime > 0) {
            result += "" + parseInt(minuteTime) + "m ";
        } else {
            result += "0m ";
        }
        result += parseInt(secondTime) + "s";
    } else {
        result = "0h 0m 0s"
    }

    return result
}

// 开播时间
export function livingStartDay(time) {
    if (time) {
        var _time = (typeof (time) == "string") ? new Date(parseFloat(time)) : new Date(time);
        var y = _time.getFullYear();
        var m = _time.getMonth() + 1;
        var d = _time.getDate();
        var h = _time.getHours();
        var minute = _time.getMinutes();
        var second = _time.getSeconds();
        m = m >= 10 ? m : "0" + m;
        d = d >= 10 ? d : "0" + d;
        h = h < 10 ? ('0' + h) : h;
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
}

export function toLocaleString(num) {
    if (!num) num = 0
    return parseFloat(num).toLocaleString()
}


export function unitData(value, livingPlatform) {
    if (value) {
        // console.log(livingPlatform,'livingPlatform',value)
        value = parseFloat(value) > 0 && value.toString().indexOf(',') != -1 ? value.replace(/,/gi, '') : value
        value = parseFloat(value)
        let newValue = ['', '', ''];
        let fr = 1000;
        let num = 3;
        var type = 1
        if (value < 0) {
            type = 2
            value = value + ''
            value = parseFloat(value.slice(1, value.length))
        }
        while (value / fr >= 1) {
            fr *= 10;
            num += 1;
        }
        if (num <= 3) {
            newValue[1] = '';
            newValue[0] = value;
        } else if (num <= 4) { // 千
            newValue[1] = 'k';
            newValue[0] = (value % 1000) == 0 ? parseFloat(value / 1000) + '' : Math.floor((value / 1000) * 100) / 100;
        } else { // 万
            if (livingPlatform == 3 || livingPlatform == 4) {
                newValue[1] = 'k';
                newValue[0] = fmoney((value % 1000) == 0 ? parseFloat(value / 1000) + '' : Math.floor((value / 1000) * 100) / 100, 2)
            } else {
                const fm = 10000;
                newValue[1] = 'w';
                newValue[0] = Math.floor((value / fm) * 100) / 100 + '';
            }
        }
        if (type == 1) {
            return newValue.join('')
        } else {
            return '-' + newValue.join('')
        }
    } else {
        return 0
    }
}

export function fmoney(s, n) {
    /*
     * 参数说明：
     * s：要格式化的数字
     * n：保留几位小数
     * */
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    var t = "";
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}


export function AverageDuration(value) {
    if (value) {
        var secondTime = value;// 秒
        // var secondTime = parseInt((value*60).toFixed(2));// 秒
        var minuteTime = 0;// 分
        var hourTime = 0;// 小时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        var s = 's '
        var m = 'm '
        var h = 'h '
        if (i18n.locale == 'zh') {
            s = '秒'
            m = '分'
            h = '小时 '
        }
        var result = "";
        if (hourTime > 0) {
            result = "" + parseInt(hourTime) + h;
        } else {
            result += "";
        }
        if (minuteTime > 0) {
            result += "" + parseInt(minuteTime) + m;
        } else {
            result += "";
        }
        result += parseInt(secondTime) + s;
        return result
    } else {
        return 0
    }
}

/**
 * 传入时间戳转时间格式
 * @param time
 * @returns {string}
 */
export function timeToDate(time) {
    if (time) {
        let date = new Date(time)
        let yearVal = date.getFullYear(); //年;
        let monthVal = date.getMonth() + 1; //月;
        let dayVal = date.getDate(); //日;
        monthVal = monthVal < 10 ? "0" + monthVal : monthVal;
        dayVal = dayVal < 10 ? "0" + dayVal : dayVal;
        return yearVal + '-' + monthVal + '-' + dayVal
    }
}

export default {
    formatSeconds,
    getWeek,
    calTime,
    timeMeridiem,
    livingTime,
    timeDay,
    getWeekTxt,
    projectTime,
    scriptDuration,
    scriptDurationTime,
    toLocaleString,
    unitData,
    timeStandard,
    livingStartDay,
    calTotalTime,
    AverageDuration,
    timeToDate
};

