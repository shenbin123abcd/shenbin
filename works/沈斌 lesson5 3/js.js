window.onload = function() {

var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
//定义一个container对象，保存属性和值
var container = new Object();

for(var index=0;index<arr.length;++index)
{	/*
	用hasOwnProperty方法寻找container对象里是否已存在这个属性，存在说明
	重复了，count+1,并记录重复的位置
	*/
	if(  container.hasOwnProperty(arr[index] ) )
	{
		container[arr[index]].time ++;
		container[arr[index]].position.push(index);
	}
	else
	{
		//在container内部再定义一个对象分别保存属性time,position,value的值
		var newObject = 
		{
			time:1,
			position:new Array(),
			value :arr[index]
		}
		//将此时的index放入对象position属性中
		newObject["position"].push(index);

		container[arr[index]] = newObject;
	}
}
//定义个新数组存放属性
var sortedArray = new Array();
for(var key in container)
{
	//document.write(key);
	//document.write(container[key].time);
	sortedArray.push(container[key]);
}
//数组从小到大排序
sortedArray.sort( function(a,b)
{
	return a.time - b.time;
});

document.write("最大的数是：" +sortedArray[sortedArray.length-1].value +"</br>");
document.write("次数是："+sortedArray[sortedArray.length-1].time+"</br>");
document.write("位置是："+sortedArray[sortedArray.length-1].position);
}

/*var container={
	a:
	{
		time:1,
		position:3,
		value:"a"
	},
	b:{
		time:1,
		position:1,
		value:"b"
	},

}
*/





