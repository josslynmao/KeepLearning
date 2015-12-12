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