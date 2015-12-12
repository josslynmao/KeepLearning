function getNewContent(){
	var request = getHTTPObject();//由gethttpobject()获取xmlhttprequest对象
	if (request) {
		request.open("GET","example.txt",true);//GET请求，获取文本文件，第三个参数true标记异步方式
		
		request.onreadystatechange = function(){//事件处理函数
			if (request.readyState == 4) {//4为完成状态
				var para = document.createElement("p");//创建元素节点
				var txt = document.createTextNode(request.responseText);//请求到的文本数据建立成文本节点
				para.appendChild(txt);//将文本节点插入到段落中
				document.getElementById("new").appendChild(para);//将段落插入到new的div内
			}
		}
		
		request.send(null);
	}
	else{
		alert('sorry,your browser doesn\'t support XNLHttpRequest.');
	}
}

window.load = getNewContent;