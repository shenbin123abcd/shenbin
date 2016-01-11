$(document).ready(function(){
	var wHeight=$(window).height();
	$(".more-ul").css("height",wHeight);

	//tab标签
	$(".block-title a").each(function(index){
		$(this).on("click",function(){
			$(".data-box").removeClass("active");
			$(".block-title a").removeClass("linked");
			$(".data-box").eq(index).addClass("active");
			$(".block-title a").eq(index).addClass("linked");
		});
	});

	//换肤弹框
	$("#change-skin").on("click",function(){
		$(".skin-wrapper").css({
			top:0,
			opacity:1
		});
	});
	$(".skin-header p").on("click",function(){
		$(".skin-wrapper").css({
			top:-310,
			opacity:0
		});	
	});
	//当弹出框弹出时，我想点击页面其他地方就能将隐藏弹出框，为啥这段无法运行？
	if($(".skin-wrapper").css("top")==0 && $(".skin-wrapper").css("opacity")==1){
		$("body,html").not($(".skin-wrapper")).click(function(){
			$(".skin-wrapper").css({
				top:-310,
				opacity:0
			});	
		})
	}
	//换肤tab
	$(".skin-header a").each(function(index){
		$(this).on("click",function(){
			$(".skin-header a").removeClass("a-linked");
			$(".skin-header a").eq(index).addClass("a-linked");
			$(".skin-body").removeClass("skin-active");
			$(".skin-body").eq(index).addClass("skin-active");
		})
	});
	//鼠标滑过预览效果
	$(".skin-body-content img").each(function(index){
		$(this).on("mouseover",function(){
			var src=$(this).attr("src");
			$(".show-pic img").attr("src",function(){
				return src
			})
		})
	});
	//鼠标点击更改背景图片
	$(".skin-body-content img").each(function(){
		$(this).on("mousedown",function(){
			var src=$(this).attr("src");
			//老师为什么这里的路径是./而不是../
			$("body").css({
				"background":"url(./" +src+ ")",
			});
			$(".img-box img").attr("src","img/logo_white.png")
		})
	});

	//导航栏fixed
	var offset=$(".search-form").offset().top;
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if(scroll>=offset){
			$(".hidden").addClass("hidden-style");
			$(".hidden-logo").css("display","inline-block");
		}else{
			$(".hidden").removeClass("hidden-style");
			$(".hidden-logo").css("display","none");
		}
	})



	//sidebar
	$(".back-top").hover(function(){
		$(".side-pic").hide();
		$(".side-text").show();
	},
	function(){
		$(".side-pic").show();
		$(".side-text").hide();
	});

	$(".back-top").on("click",function(){
		$("body,html").animate({
			scrollTop:0
		},1000);
	});
	$(window).on("scroll",function(){
		var scroll=$(window).scrollTop();
		if(scroll>0){
			$(".back-top").show();
		}else{
			$(".back-top").hide();
		}
	});

	//hot-news fixed
	var hot_scroll=$(".hot-news").offset().top;
	$(window).on("scroll",function(){
		var scroll=$(window).scrollTop();
		if(scroll>=hot_scroll){
			$(".hot-news").addClass("hot-news-fixed");
		}else{
			$(".hot-news").removeClass("hot-news-fixed");
		}
	})
	
	

})
		
		