//获得要操作的元素
var select=document.getElementById("select");
//这里为什么不能将document.body.style.background提取出来变成bd，在下面的switch语句中使用？
//var bd=document.body.style.background

select.onchange=function(){
	//获取下拉表单下拉序列
	var index=select.selectedIndex;
	//获取下拉各个值
	var value=select.options[index].value;
	document.body.style.background=value;
	//保存cookie值
	setCookie("color",value,365);
}

//创建cookie方法
function setCookie(name,value,overTime){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+overTime);
	document.cookie=name+"="+escape(value)+((overTime=null) ? "" :";expires="+exdate.toGMTString());
}

//读取cookie方法
function getCookie(name){
	if(document.cookie.length>0){
		var start=document.cookie.indexOf(name+"=");
		if(start!=-1){
			start=name.length+1;
			var end=document.cookie.indexOf(";",start);
			if(end==-1){
				end=document.cookie.length;
			}
			return unescape(document.cookie.substring(start,end))
		}
	}
	return""
}

//页面加载完毕读取cookie
window.onload=function(){
	var  color=getCookie('color');
	if (color!=null && color!=""){
		 document.body.style.background = color;
	}
}








