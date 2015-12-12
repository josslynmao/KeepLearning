//用标签来获取对象，返回一个数组
alert(typeof document.getElementsByTagName("li"));

//输出对象个数
alert(document.getElementsByTagName("li").length);

//用通配符输出整个文档所有对象个数
alert(document.getElementsByTagName("*").length);

//获取一个对象，显示对象下的全部对象类型
var shopping = document.getElementById("purchase");
var item = shopping.getElementsByTagName("*");
for(var i = 0;i < item.length;i++)
{
	alert(typeof item[i]);
}
