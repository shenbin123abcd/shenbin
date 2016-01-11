/*
	ajax加载新闻内容
*/
function loadNews(newstype){
	$.ajax({
		url:"/select",
		type:"post",
		dataType:'json',
		data:{"newstype":newstype},
		success:function(data){
			$(".newsmain").empty();
			var html="";
			$.each(data,function(index,element){
				html+="<div class='newlist'>"+
							"<div class='newsbox'>"+
								"<div class='newsimg'> <img src='"+element["newsimg"]+"'></div>"+
								"<div class='newstext'>"+
									"<div class='newsid'> id:"+element['newsid']+"</div>"+
									"<div class='newstitle'>标题："+element['newstitle']+"</div>"+
									"<div class='newscontent'>内容："+element['newscontent']+"</div>"+
									"<a href='javascript:editNews("+element['newsid']+")'>修改</a>&nbsp;&nbsp;&nbsp;&nbsp;"+
									"<a href='javascript:deleteAlert("+element['newsid']+")'>删除</a>"+
								"</div>"+
								"<div class='addtime'>添加事件"+element['addtime']+"</div>"+
							"</div>"+
						"</div>";
			});
			$(".newsmain").html(html);
		}
	})
}
//删除新闻
function deleteAlert(newsid){
	if(confirm("你确定要删除吗？")){
		$.ajax({
			url:"/delete",
			type:"post",
			dataType:"json",
			data:{"newsid":newsid},
			success:function(data){
				alert("删除成功！请刷新网页!");
			}
		})
	}else{
		alert("取消删除");
		return false;
	}
}
//修改文章
function editNews(newsid){
	$("#myModal").modal();
	$("#myModalLabel").text("修改新闻");
	$("#myModal form").attr("action","/modify");
	$.ajax({
		url:"/showm",
		type:"post",
		dataType:"json",
		data:{"newsid":newsid},
		success:function(data){
			$("#newstitle").val(data[0]["newstitle"]);
			$("#newsimg").val(data[0]["newsimg"]);
			$("#newscontent").val(data[0]["newscontent"]);
			$("#addtime").val(data[0]["addtime"]);
			$("#newstype").val(data[0]["newstype"]);
		}
	});
}

$(window).on("load",function(){
	$("#systemSetting>li").each(function(index){
		$(this).click(function(){
			loadNews($(this).attr("data-newstype"));
		})
	});

	//发表新文章
	$("#publish").on("click",function(){
		$("#myModalLabel").text("发布新闻");
		$(".formmain").attr("action","/insert");
		$("#newsid").attr("placeholder","不填写,系统默认").val("");
		$("#newstitle").val();
		$("#newsimg").val();
		$("#newscontent").val();
		$("#addtime").val();
		$("#newstype").val();
	})
})
