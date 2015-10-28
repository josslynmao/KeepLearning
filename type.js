var octalNum = "070";
var intNum = 66;
var message;
var num = "0.78.45";
var result = Number.MAX_VALUE + Number.MAX_VALUE;

alert(typeof(octalNum));//typeof显示类型
alert(message == undefined);//未初始化变量默认值为undefined
alert(Boolean(octalNum));//非空字符串转化为boolean为true
alert(Boolean(message));//undefined转化为boolean为false
alert(isFinite(result));
alert(Number(octalNum));//将字符串转换为数字
alert(parseInt(octalNum , 8));//将字符串转换为为二进制整数（转换成2进制就出问题了，和第一个0有关系？）
alert(parseFloat(num));//将字符串转换为小数
alert(intNum.toString(2));//将整数转换为字符串并输出其二进制形式

window.onload;