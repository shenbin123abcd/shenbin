/*
	单例模式，并将各个模块简单封装，保证了变量的私有化，和过多的公共变量。
	整个代码看起来更简洁清晰。
*/
var index={
	init:function(){
		this.tab();
		this.skin.play();
		this.sidebar.play();
		this.newsFixed();
	},
	//tab标签切换
	tab:function(){
		var wHeight=$(window).height();
		$(".more-ul").css("height",wHeight);
		$(".block-title a").each(function(index){
			$(this).on("click",function(){
				$(".data-box").removeClass("active");
				$(".block-title a").removeClass("linked");
				$(".data-box").eq(index).addClass("active");
				$(".block-title a").eq(index).addClass("linked");
			});
		});
	},
	//换肤
	skin:{
		play:function(){
			var _this=this;
			_this.show();
			_this.hide();
			_this.hideother();
			_this.change();
			_this.hover();
			_this.mclick();
		},
		//显示弹框
		show:function(){
			$("#change-skin").on("click",function(){
				$(".skin-wrapper").css({
					top:0,
					opacity:1
				});
			});
		},
		//隐藏弹框
		hide:function(){
			$(".skin-header p").on("click",function(){
				$(".skin-wrapper").css({
					top:-310,
					opacity:0
				});	
			});
		},
		//当弹出框弹出时，点击页面其他地方隐藏弹出框
		hideother:function(){
			$(".skin-wrapper").click(function(){
				return false;
			});
			$("body,html").click(function(){
				if($(".skin-wrapper").css("top")=="0px" && $(".skin-wrapper").css("opacity")==1){
					$(".skin-wrapper").css({
						top:-310,
						opacity:0
					});	
				}
			});
		},
		//换肤tab
		change:function(){
			$(".skin-header a").each(function(index){
				$(this).on("click",function(){
					$(".skin-header a").removeClass("a-linked");
					$(".skin-header a").eq(index).addClass("a-linked");
					$(".skin-body").removeClass("skin-active");
					$(".skin-body").eq(index).addClass("skin-active");
				})
			});
		},
		//鼠标滑过预览效果
		hover:function(){
			$(".skin-body-content img").each(function(index){
				$(this).on("mouseover",function(){
					var src=$(this).attr("src");
					$(".show-pic img").attr("src",function(){
						return src
					})
				})
			});
		},
		//鼠标点击更改背景图片
		mclick:function(){
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
		}
	},
	//边栏
	sidebar:{
		play:function(){
			var _this=this;
			_this.hover();
			_this.mclick();
			_this.mscroll();
		},
		hover:function(){
			$(".back-top").hover(function(){
				$(".side-pic").hide();
				$(".side-text").show();
			},
			function(){
				$(".side-pic").show();
				$(".side-text").hide();
			});
		},
		mclick:function(){
			$(".back-top").on("click",function(){
				$("body,html").animate({
					scrollTop:0
				},1000);
			});
		},
		mscroll:function(){
			$(window).on("scroll",function(){
				var scroll=$(window).scrollTop();
				if(scroll>0){
					$(".back-top").show();
				}else{
					$(".back-top").hide();
				}
			});
		}
	},
	//hot-news fixed
	newsFixed:function(){
		var hot_scroll=$(".hot-news").offset().top;
		$(window).on("scroll",function(){
			var scroll=$(window).scrollTop();
			if(scroll>=hot_scroll){
				$(".hot-news").addClass("hot-news-fixed");
			}else{
				$(".hot-news").removeClass("hot-news-fixed");
			}
		});
	}
}


	
		