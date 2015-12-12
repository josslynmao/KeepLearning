var movement;

function addFunction(func){
	var oldfunction = window.onload;
	if (typeof(oldfunction) != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldfunction();
			func();
		}
	}
}

function positionMessage(){
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.top = "100px";
	elem.style.left = "300px";
	moveElement("message",400,600,10);
	if (!document.getElementById("message2")) return false;
	var elem = document.getElementById("message2");
	elem.style.position = "absolute";
	elem.style.top = "200px";
	elem.style.left = "300px";
	moveElement("message2",600,600,8);
}

function moveMessage(){
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var ypos = parseInt(elem.style.top);
	var xpos = parseInt(elem.style.left);
	if (ypos == 300 && xpos == 100) return true;
	if (ypos > 300) ypos--;
	if (ypos < 300) ypos++;
	if (xpos > 100) xpos--;
	if (xpos < 100) xpos++;
	elem.style.top = ypos + "px";
	elem.style.left = xpos + "px";
	movement = setTimeout("moveMessage()",10);
}

function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var ypos = parseInt(elem.style.top);
	var xpos = parseInt(elem.style.left);
	if (xpos == final_x && ypos == final_y) return true;
	if (ypos > final_y) ypos--;
	if (ypos < final_y) ypos++;
	if (xpos > final_x) xpos--;
	if (xpos < final_x) xpos++;
	elem.style.top = ypos + "px";
	elem.style.left = xpos + "px";
	var repeat = "moveElement('"+elementID+"','"+final_x+"','"+final_y+"','"+interval+"')";
	movement = setTimeout(repeat,interval);
}


addFunction(positionMessage);