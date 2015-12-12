var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
	if(paras[i].getAttribute("title") != null)//不输出返回值为null
	{
		alert(paras[i].getAttribute("title"));//alert显示返回title值
	}
};