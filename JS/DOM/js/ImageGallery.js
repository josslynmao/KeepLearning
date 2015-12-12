//用js的方式创建节点并插入
function preparePlaceholder(){
	var image = document.createElement("img");
	image.setAttribute("id","placeholder");
	image.setAttribute("src","../img/grey.png");
	image.setAttribute("alt","my image gallery");
	var para = document.createElement("p");
	para.setAttribute("id","description");
	var txt = document.createTextNode("choose an picture.");
	para.appendChild(txt);
	var list = document.getElementById("imagegallery");
	list.parentNode.insertBefore(image,list);
	list.parentNode.insertBefore(para,list);
}

//点击链接替换图片
function prepareLinks(){
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("class") == "showPic") {
			links[i].onclick = function(){
				showPic(this);
				return false;
			}
		}
	}
}

//切换图片和文字
function showPic(whichpic){
	if (!document.getElementById("placeholder")) return false;//如果placeholder不存在，则直接退出，唯一一个出口
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title");
		var description = document.getElementById("description");
		description.childNodes[0].nodeValue = text;
	}
	return true;
}

//js只含有insertBefore不含insertAfter,自己编写insertAfter
function insertAfter(newElement,targetElement){
	if (targetElement.parentNode.lastChild == targetElement) {
		targetElement.parentNode.appendChild(newElement);
	}
	else{
		targetElement.parentNode.insertBefore(newElement,targetElement.nextSibling);
	}
}


//随时添加多个函数到window.onload
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof(window.onload) != 'function') {//判断window.onload是否绑定函数
		window.onload = func;
	}
	else{
		window.onload = function(){//若window.onload之前绑定了函数
			oldonload();//则将新函数打包进匿名函数,与window.onload重新绑定
			func();
		}
	}
}



window.onload = preparePlaceholder;
addLoadEvent(prepareLinks);





















