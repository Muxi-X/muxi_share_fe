//格式化时间戳
export default function(fmt) {
  let date = fmt.split("GMT")[0];

  let DateArray = date.split(" ");
  console.log("date:" + DateArray[1]);
  switch (DateArray[0]) {
    case "Mon,":
      DateArray[0] = "星期一";
      break;
    case "Tue,":
      DateArray[0] = "星期二";
      break;
    case "Wed,":
      DateArray[0] = "星期三";
      break;
    case "Thu,":
      DateArray[0] = "星期四";
      break;
    case "Fri,":
      DateArray[0] = "星期五";
      break;
    case "Sat,":
      DateArray[0] = "星期六";
      break;
    case "Sun,":
      DateArray[0] = "星期天";
      break;
    default:
      break;
  }
  switch (DateArray[2]) {
    case "Jan":
      DateArray[2] = "1";
      break;
    case "Feb":
      DateArray[2] = "2";
      break;
    case "Mar":
      DateArray[2] = "3";
      break;
    case "Apr":
      DateArray[2] = "4";
      break;
    case "May":
      DateArray[2] = "5";
      break;
    case "Jun":
      DateArray[2] = "6";
      break;
    case "Jul":
      DateArray[2] = "7";
      break;
    case "Aug":
      DateArray[2] = "8";
      break;
    case "Sep":
      DateArray[2] = "9";
      break;
    case "Oct":
      DateArray[2] = "10";
      break;
    case "Nov":
      DateArray[2] = "11";
      break;
    case "Dec":
      DateArray[2] = "12";
      break;
    default:
      break;
  }
  let newDate = `${DateArray[3]}年${DateArray[2]}月${DateArray[1]}日  ${
    DateArray[0]
  }`;

  return newDate;
}

// var o = {
//   "M+": this.getMonth() + 1,
//   "d+": this.getDate(),
//   "h+": this.getHours(),
//   "m+": this.getMinutes(),
//   "s+": this.getSeconds(),
//   "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//   S: this.getMilliseconds() //毫秒
// };
// var week = {
//   "0": "/u65e5",
//   "1": "/u4e00",
//   "2": "/u4e8c",
//   "3": "/u4e09",
//   "4": "/u56db",
//   "5": "/u4e94",
//   "6": "/u516d"
// };
// if (/(y+)/.test(fmt)) {
//   fmt = fmt.replace(
//     RegExp.$1,
//     (this.getFullYear() + "").substr(4 - RegExp.$1.length)
//   );
// }
// if (/(E+)/.test(fmt)) {
//   fmt = fmt.replace(
//     RegExp.$1,
//     (RegExp.$1.length > 1
//       ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468"
//       : "") + week[this.getDay() + ""]
//   );
// }
// for (var k in o) {
//   if (new RegExp("(" + k + ")").test(fmt)) {
//     fmt = fmt.replace(
//       RegExp.$1,
//       RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
//     );
//   }
// }
//return fmt;
//};

// var date = new Date();
// date = date.pattern("yyyy-MM-dd hh:mm:ss");
// module.exports = date;
