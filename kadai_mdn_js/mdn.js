const today = new Date();
const [month, day, year] = [today.getMonth()+1, today.getDate(), today.getFullYear(),];
const date = year + "年" + month + "月" + day + "日";
console.log(date);