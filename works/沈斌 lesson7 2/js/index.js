requirejs.config({
	paths:{
		jquery: 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
	}
});

requirejs(['jquery'],function($){
	$(document).ready(function(){
	//鼠标滑过，切换内容
	$(".hotest-lesson").on("mouseover",function(){
		$(".new-lessonbox,.free-lessonbox,.project-lessonbox,.world-lessonbox,.company-lessonbox").css("display","none");
		$(".hot-lessonbox").css("display","block");
	});
	$(".new-lesson").on("mouseover",function(){
		$(".hot-lessonbox,.free-lessonbox,.project-lessonbox,.world-lessonbox,.company-lessonbox").css("display","none");
		$(".new-lessonbox").css("display","block");
	});
	$(".free-lesson").on("mouseover",function(){
		$(".hot-lessonbox,.new-lessonbox,.project-lessonbox,.world-lessonbox,.company-lessonbox").css("display","none");
		$(".free-lessonbox").css("display","block");
	});
	$(".project-lesson").on("mouseover",function(){
		$(".hot-lessonbox,.new-lessonbox,.free-lessonbox,.world-lessonbox,.company-lessonbox").css("display","none");
		$(".project-lessonbox").css("display","block");
	});
	$(".world-lesson").on("mouseover",function(){
		$(".hot-lessonbox,.new-lessonbox,.free-lessonbox,.project-lessonbox,.company-lessonbox").css("display","none");
		$(".world-lessonbox").css("display","block");
	});
	$(".company-lesson").on("mouseover",function(){
		$(".hot-lessonbox,.new-lessonbox,.free-lessonbox,.project-lessonbox,.world-lessonbox").css("display","none");
		$(".company-lessonbox").css("display","block");
	});

	//战略合作伙伴轮播
	var last=0;
	var value;
	$("#right1").on("click",function(){
			$("#company-wrapper").css("left",function(){
			value = last - 160;
			last=value;
			//第一轮图片滚动完毕，再动态添加所有图片，并分别给id区分
			if(value ==  -1760){
				for(var _index=44;_index<62;++_index){
					var  newSlide= "<div class='swiper-slide company-slide' id='newSlide'> <img src='img/img"+ _index.toString() + ".jpg' ></div>";
			  		$("#company-wrapper").append(newSlide);
			  		   $("#newSlide").attr("id","newSlide"+_index.toString());	  	
				}
			}
			//第二轮图片滚动，滚动到某一位置，返回0，重新回到第一个位置
			if(value == -2720){
				for(var _index=44;_index<62;++_index){	  
			  		$("#newSlide"+_index.toString()).remove();	  	
				}
				last = 0;
				return 0;
			}
			return value;
		});
	});	

	$("#left1").on("click",function(){
		if(value  == 0){
			return;
		}		
		$("#company-wrapper").css("left",function(){
			value=last + 160;
			last = value;
			return value;
		});
	});	

	//sidebar
	$("#toolbar-top").on("click",function(){
		$("body,html").animate({
			scrollTop:0
		},1000);
	});

	$(window).on("scroll",function(){
		var W_top=$(window).scrollTop();
		var W_height=$(window).height();
		if(W_top<=W_height){
			$("#toolbar-top").hide();
		}else{
			$("#toolbar-top").show();
		}
	});

	//合作院校轮播
	var last2=0;
	var value2;
	$("#right2").on("click",function(){
		$("#school-wrapper").css("left",function(){
			value2=last2-160;
			last2=value2;
			if(value2==-1280){
				for(var index=62;index<75;++index){
					var newSlides='<div class="swiper-slide" id="newSlide-s"><img src="img/img' +index.toString()+ '.png" alt=""></div>';
					$("#school-wrapper").append(newSlides);
					$("#newSlide-s").attr("id","newSlide-s"+index.toString());
				}
			}
			if(value2==-1440){
				for(var index=62;index<76;++index){
					$("#newSlide-s"+index.toString()).remove();
				}
				last2=0;
				return 0;
			}
			return value2;
		});
	});
	$("#left2").on("click",function(){
		if(value2 == 0 || $("#school-wrapper").css("left")==""){
			return 0;
		}		
		$("#school-wrapper").css("left",function(){
			value2=last2 + 160;
			last2 = value2;
			return value2;
		});
	});	


	})
});