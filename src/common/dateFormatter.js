//格式化时间戳
export default function(fmt) {
  let date = fmt.split("GMT")[0];

  let DateArray = date.split(" ");

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
