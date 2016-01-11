/*
	ajax加载新闻
*/
function loadnews(newstype){
	$.ajax({
		url:"php/admin/show.php",
		dataType:"json",
		type:"GET",
		data:"newstype="+newstype,
		success:function(data){
			$(".newsmain").empty();
			var html="";
			$.each(data,function(index,element){
				html +=	"<div class='newslist'>"+
							"<div class='newsbox'>"+
								"<div class='newsimg' <img src='" +element['newsimg']+ "'></idv>"+
								"<div class='newstext'>"+
									"<div class='newsid'>" +element['newsid']+ "</div>"+
									"<div class='newstitle'>" +element['newstitle']+ "</div>"+
									"<div class='newscontent'>" +element['newscontent']+ "</div>"+
									"<a href='javascript:editNews(" +element['newsid']+ ")'>修改</a>"+
									"<a href='javascript:deleteAlert(" +element['newsid']+ ")'>删除</a>"+
								"</div>"+
								"<div class='addtime'>" +element['addtime']+ "</div>"+
							"</div>"+
						"</div>";
			});
			$(".newsmain").html(html);
		}
	});
}

//删除新闻
function deleteAlert(newsid){
	if(confirm("你确定要删除吗？")){
		var deleteAlert="php/admin/delete.php?newsid="+newsid;
		window.location.href=deleteAlert;
	}else{
		alert("取消删除");
		return false;
	}
}

//修改新闻
function editNews(newsid){
	$("#myModal").modal();
	$("#myModalLabel").text("修改新闻");
	$("#myModal form").attr("action","php/admin/modify.php");
	var editedUrl="php/admin/showm.php?newsid="+newsid;
	$.ajax({
		url:editedUrl,
		type:"GET",
		dataType:"json",
		success:function(data){
			$("#newsid").val(data[0].newsid);
			$("#newstitle").val(data[0].newstitle);
			$("#newsimg").val(data[0].newsimg);
			$("#newscontent").val(data[0].newscontent);
			$("#addtime").val(data[0].addtime);
			$("#newstype").val(data[0].newstype);
		}
	})
}

$(window).on('load',function(){
	$("#systemSetting>li").each(function(index){
		$(this).on("click",function(){
			loadnews($(this).attr("data-newstype"));
		})
	})

	$(".publish").on("click",function(){
		$("#myModalLabel").text("发布新闻");
		$(".modal-body form").attr("action","php/admin/publish.php");
		$("#newsid").attr("placeholder","可不用填写，默认为数据库的下一条").val("");
		$("#newstitle").val();
		$("#newsimg").val();
		$("#newscontent").val();
		$("#addtime").val();
		$("#newstype").val();
	});
})