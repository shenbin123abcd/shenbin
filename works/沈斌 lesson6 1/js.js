//屏幕缓冲区
var screenArray=[];

//运算栈
var calArray=[];


function PressDown(id)
{
	var newScreen = document.getElementById("screen");
	//if id is a number
	if(id>=0 && id<=9)
	{
		if(screenArray.length>=20)
		{
			return;
		}
		screenArray.push(id);
		var outValue="";
		for(var index=0;index<screenArray.length;++index)
		{
			outValue+=screenArray[index];	
		}
		newScreen.innerHTML = outValue;
		
	}
	else if(id == "save")
	{

	}
	else if(id == "delete")
	{

	}
	else if( id == "clear")
	{
		newScreen.innerHTML = "0";
		screenArray.length = 0;
		calArray.length = 0;


	}
	else if( id =="sin" || id == "cos" || id == "tan" || id =="cot")
	{

		var oldValue =Number(newScreen.innerHTML);
		alert(oldValue);
		var result ;
		switch(id)
		{
			case "sin":
				result = Math.sin(oldValue);
				break;
			case "cos":
				result = Math.cos(oldValue);
				break;
			case "tan":
				result = Math.tan(oldValue);
				break;
			case "cot":
				result = Math.cot(oldValue);
				break;
		}
		newScreen.innerHTML = result;
		screenArray.length=0;	
	}

	else if( id == "equal")
	{
		calArray.push(newScreen.innerHTML);
		//if id is a operator
		var oldResult;
		if( calArray.length>=3 )
		{
			var y = Number(calArray[2]);
			var operator=calArray[1];
			var x= Number(calArray[0]);
			//alert(operator);
			switch(operator)
			{
				case "minus":
					oldResult = x-y;
					break;
				case "add":
					oldResult = x+y;
					break;
				case "avail":
					///////////////////////乘号不对..todo
					oldResult = x*y;
					break;
				case "divide":
					oldResult = x/y;
					break;
			}
			newScreen.innerHTML = oldResult;
			calArray.length=0;
			//calArray.push(oldResult);
		}
		screenArray.length=0;
	}
	else
	{
		
		calArray.push(newScreen.innerHTML);
		//if id is a operator
		var oldResult;
		if( calArray.length>=3 )
		{
			var y = Number(calArray[2]);
			var operator=calArray[1];
			var x= Number(calArray[0]);
			switch(operator)
			{
				case "minus":
					oldResult = x-y;
					break;
				case "add":
					oldResult = x+y;
					break;
				case "avail":
					oldResult = x*y;
					break;
				case "divide":
					oldResult = x/y;
					break;
			}
			newScreen.innerHTML = oldResult;
			calArray.length=0;
			calArray.push(oldResult);
		}
		calArray.push(id);
		screenArray.length=0;
	}
}





function DisplayOnScreen(number)
{
	var newScreen = document.getElementById("screen");
	newScreen.innerHTML = number;
}