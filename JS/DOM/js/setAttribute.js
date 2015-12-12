var shopping = document.getElementById("purchase");
var para = document.getElementsByTagName("p");
alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a list of good");//更改shopping的title属性值
alert(shopping.getAttribute("title"));
for (var i = 0; i < para.length; i++) {
	para[i].setAttribute("title","brand new title text");
	alert(para[i].getAttribute("title"));
};
