// 登陆百度账号
$(document).ready(function(e) {
    $("#li-6").click(function(){
		$("#logo-in").show();
		$("#body").css('background-color','#FBECD7');
		$("#two-input").css('background-color','#EFF1F3')
	});
	$(".top-img-right").click(function(){
		$("#logo-in").hide();
		$("#body").css('background-color','#FFF');
		$("#two-input").css('background-color','#FFF')
	});
});
// 设置全局变量a，以a的值做个开关，修改input的各种属性
var a=0;
// two-input获得失去焦点事件
$(document).ready(function(){
	$("#two-input").focus(function(){
		a=1;
		$("#two-input").css("border","1px solid #3385FF");
	});
	$("#two-input").blur(function(){
		a=0;
		$("#two-input").css("border","1px solid #ddd");
	})
	$("#two-input").hover(function(){
		if (a==1) {
		}else{
			$("#two-input").css("border","1px solid #c5c1c1");
		}
	},function(){
        if (a==1) {
        $("#two-input").css("border","1px solid #3385FF");
        }else{
        $("#two-input").css("border","1px solid #ddd");
        }
	})
})
// 百度一下
$(document).ready(function(){
    $("#word").hover(
        function(){
            $("#word").css('background-color','#2e79e8')
        },function(){
            $("#word").css('background-color','#3385ff');
        }
        );
})
// menu-span 设置span的背景颜色  不同的span 对应不同的内容，
$(document).ready(function(e){
    $(".menu-span-1").click(function(){
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display','block');
        $(".span-recommend").css('display','none');
        $(".span-navigation").css('display','none');
        $(".span-video").css('display','none');
        $(".span-shopping").css('display','none');
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-2").click(function(){
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display','none');
        $(".span-recommend").css('display','block');
        $(".span-navigation").css('display','none');
        $(".span-video").css('display','none');
        $(".span-shopping").css('display','none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-3").click(function(){
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display','none');
        $(".span-recommend").css('display','none');
        $(".span-navigation").css('display','block');
        $(".span-video").css('display','none');
        $(".span-shopping").css('display','none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-4").click(function(){
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display','none');
        $(".span-recommend").css('display','none');
        $(".span-navigation").css('display','none');
        $(".span-video").css('display','block');
        $(".span-shopping").css('display','none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-5").click(function(){
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display','none');
        $(".span-recommend").css('display','none');
        $(".span-navigation").css('display','none');
        $(".span-video").css('display','none');
        $(".span-shopping").css('display','block');
        $(".menu-span-1").removeClass("lbtm-span-click")
        $(".menu-span-2").removeClass("lbtm-span-click")
        $(".menu-span-3").removeClass("lbtm-span-click")
        $(".menu-span-4").removeClass("lbtm-span-click")
    });
})
// 换肤
$(document).ready(function(){
	$("#a-skin").click(function(){
		$(".skin").slideDown(500);
	})
	$("#close-skin").click(function(){
		$(".skin").slideUp(500);
	})
})
// 更多产品
$(document).ready(function(){
	$(".li-pro").hover(function(){
		$(".many-product").show(200)
	},function(){
		$(".many-product").hide(200)
	})
})