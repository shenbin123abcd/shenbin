//屏幕缓冲区
var screenArray=[];

//运算缓冲区
var calArray=[];

function PressDown(id){
	var screen=document.getElementById("screen");
	//如果按得按钮是数字
	if(!isNaN(id)){
		if(screenArray.length>=20){
			alert("输入的数字过大，无法运算");
			screen.innerHTML=0;
			screenArray.length=0;
		}else{
			screenArray.push(id);
			var outValue=" ";
			for(var i=0;i<screenArray.length;i++){
				outValue+=screenArray[i];
			}
			screen.innerHTML=outValue;
		}
	}
	//如果按得是“pointer”,将点加进数组
	else if(id=="pointer"){
		screenArray.push(".");
	}
	//如果按得是负数
	else if(id=="negative"){
		if(screenArray.indexOf("-")==-1){
			screenArray.push("-");
			screen.innerHTML="-";
		}
	}
	//如果按得是“退格”
	else if(id=="delete"){
		screenArray.length=screenArray.length-1;
		var outValue="";
		for(var i=0;i<screenArray.length;i++){
			outValue+=screenArray[i];
		}
		screen.innerHTML=outValue;
	}
	//如果按得是“清屏”
	else if(id=="clear"){
		screen.innerHTML="0";
		screenArray.length=0;
		calArray.length=0;
	}
	//如果单目运算(sin,cos,tan,cot)
	else if(id=="sin" || id=="cos" || id=="tan" || id=="cot"){
		var oldValue=Number(screen.innerHTML);
		var result;
		switch(id){
			case "sin":
			result=Math.sin(oldValue);
			break;
			case "cos":
			result=Math.cos(oldValue);
			break;
			case "tan":
			result=Math.tan(oldValue);
			break;
			case "cot":
			result=Math.cot(oldValue);
			break;
		}
		screen.innerHTML=result;
		screenArray.length=0;
	}
	//如果按了“=”号，或者双目运算符(+ - * /)
	else{
		calArray.push(screen.innerHTML);
		var oldResult;
		if(calArray.length>=3){
			var x=Number(calArray[2]);
			var operator=calArray[1];
			var y=Number(calArray[0]);
			switch(operator){
				case "add":
					oldResult=y+x;
					break;
				case "minus":
					oldResult=y-x;
					break;
				case "avail":
					oldResult=y*x;
					break;
				case "divide":
					oldResult=y/x;
					break;
			}
			screen.innerHTML=oldResult;
			calArray.length=0;
			if(id!=="equal"){
				calArray.push(oldResult);
			}		
		}
		if(id!=="equal"){
			calArray.push(id);
		}
		screenArray.length=0;
	}
}