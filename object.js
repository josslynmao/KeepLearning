function displayInfo(args){
	var output="";

	if (typeof args.name == "string") {
		output += "Name:" + args.name + "\n";
	}

	if (typeof args.age == "number") {
		output += "Age:" + args.age + "\n";
	}

	alert(output);
}

displayInfo({name:"Mao",age:24});
displayInfo({name:"Mao"});