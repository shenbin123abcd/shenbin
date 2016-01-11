$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		//瀑布流动态加载图片
		var dataImg={"data":[{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},
		{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"}]}	
		$(window).scroll(function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box=$("<div>").addClass("box").appendTo($(".container"));
					var content=$("<div>").addClass("content").appendTo(box);
					console.log("./img/"+$(value).attr("src"));
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		})
	});
	var offsetTop=$("#fixed").offset().top;
	$(window).on("scroll",function(){
		//百度搜索框fixed
		var scroll=$(window).scrollTop();
		if(scroll>offsetTop){
			$("#fixed").addClass("fixed");
		}else{
			$("#fixed").removeClass("fixed");
		}
	})
	/*var width=$(".container").width()/2;
	$(".container").css("margin-left",function(){
		return Number(-width);
	});*/
});

function imgLocation(){
	var box=$(".box");
	//获取图片宽度
	var boxWidth=box.eq(0).width();
	//确定一排能摆放多少个,并转化为整数
	var num=Math.floor($(window).width()/boxWidth);
	//创建数组，储存一排盒子的高度（目的是获取最小高度的盒子）
	var boxArr=[];
	box.each(function(index,value){
		/*console.log(index+value);*/
		//获取每个盒子的高度
		var boxHeight=box.eq(index).height();
		//获取第一排盒子的高度,并逐个存放到数组中
		if(index<num){
			boxArr[index]=boxHeight;
		}else{
			//获取图片最小高度
			var minBoxHeight=Math.min.apply(null,boxArr);
			//获取最小高度图片的位置
			var minBoxIndex=$.inArray(minBoxHeight,boxArr);
			$(value).css({
				"position":"absolute",
				"top":minBoxHeight,
				"left":box.eq(minBoxIndex).position().left
			});
			//重新记录新的高度
			boxArr[minBoxIndex]+=box.eq(index).height();
		}
	});
}
function scrollside(){
	var box=$(".box");
	var lastBoxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(document).width();
	var scrollHeight=$(window).scrollTop();
	return(lastBoxHeight<scrollHeight+documentHeight)?true:false;
}
