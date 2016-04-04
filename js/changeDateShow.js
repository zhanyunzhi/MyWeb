/**
 * Created by zhan on 2016/3/22.
 */
var changeDateShow = function(dateS){  //dateS字符串类型的参数
    var dateTimeStamp = Date.parse(dateS.replace(/-/gi, "/"));  //将字符串格式的日期转换为时间戳
    if(isNaN(dateTimeStamp)){       //如果无法转换成时间戳
        return "请输入正确的日期格式，如：2016-01-01";
    }
    var now = new Date().getTime();   //获取当前时间戳
    var changeTimeStamp = now - dateTimeStamp;   //计算需要转换的时间与当前时间的时间戳差
    //alert(now+"--"+dateTimeStamp);
    if(changeTimeStamp < 0){
        return "您转换的日期大于当前日期";
    }
    var minute = 60 * 1000 ;
    var hour = 60 * 60 * 1000;
    var day = 24 * 60 * 60 * 1000;
    var week = 7 * 24 * 60 * 60 * 1000;
    var month = 30 * 24 * 60 * 60 * 1000;
    var result = "";

    minute = changeTimeStamp / minute;
    hour = changeTimeStamp / hour;
    day = changeTimeStamp / day;
    week =  changeTimeStamp / week;
    month = changeTimeStamp / month ;

    if(month >= 1){
        result = parseInt(month) + "个月前";
    } else if(week >= 1){
        result = parseInt(week) + "周前";
    } else if(day >= 1){
        result = parseInt(day) + "天前";
    } else if(hour >= 1){
        result = parseInt(hour) + "小时前";
    } else if(minute >= 1){
        result = parseInt(minute) + "分钟前";
    } else {
        result = "刚刚"
    }
    return result;
}