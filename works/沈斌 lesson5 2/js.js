window.onload = function() {
	//获取各个input的id
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	var result1 = document.getElementById("result")
	//获取各个button的id
	var add1 = document.getElementById("button1");
	var minus1 = document.getElementById("button2");
	var times1 = document.getElementById("button3");
	var divide1 = document.getElementById("button4");
	var clear1 = document.getElementById("clear");
	//定义一个result保存结果
	var result;
	//定义加、减、乘、除方法

	function add(x, y) {
		result = x + y;
		return result
	}

	function minus(x, y) {
		result = x - y;
		return result;
	}

	function times(x, y) {
		result = x * y;
		return result;
	}

	function divide(x, y) {
		result = x / y;
		return result;
	}
	//num1，num2输入非数字则弹出警告框，并清空内容
	num1.onkeyup = function() {
		if (isNaN(this.value)) {
			alert("请输入数字！");
			this.value = "";
		}
	}
	num2.onkeyup = function() {
		if (isNaN(this.value)) {
			alert("请输入数字！");
			this.value = "";
		}
	}
	//结果栏不允许输入，并清空
	result1.onkeyup = function() {
		if (this.value != "") {
			this.value = "";
		}
	}
	//给每个按钮点击事件分别调用各个函数，并显示结果
	//？？老师这里能用if else语句判断按了哪个键再调用哪个方法吗？
	//还有，转换为int类型这步每个事件我都写了一遍，用什么方法可以只写一遍？求老师完善
	add1.onclick = function() {
		//获得input id中输入的值，并将它转换为int类型
		var val1 = parseInt(num1.value);
		var val2 = parseInt(num2.value);
		add(val1, val2);
		result1.value = result;
	}
	minus1.onclick = function() {
		var val1 = parseInt(num1.value);
		var val2 = parseInt(num2.value);
		minus(val1, val2);
		result1.value = result;
	}
	times1.onclick = function() {
		var val1 = parseInt(num1.value);
		var val2 = parseInt(num2.value);
		times(val1, val2);
		result1.value = result;
	}
	divide1.onclick = function() {
		var val1 = parseInt(num1.value);
		var val2 = parseInt(num2.value);
		//除法判断num2输入框不得为0，否则弹出警告框并清空，结束程序
		if (val2 == 0) {
			alert("不能为0，请重新输入！");
			num2.value = "";
			return;
		} else {
			divide(val1, val2);
			result1.value = result;
		}

	}
	//清空所有输入的数字和结果
	clear1.onclick = function() {
		num1.value = "";
		num2.value = "";
		result1.value = "";
	}
}