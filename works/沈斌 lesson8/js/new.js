/*
	ajax加载新闻
*/

function loadnews(newstype){
	$.ajax({
		url:"php/admin/show.php",
		type:"GET",
		data:"newstype="+newstype,
		datatype:"json",
		success:function(data){
			$(".newsmain").empty();
			var txt= "";
			$.each(data,function(index,element){
				txt+="<div class='newslist'>"+
					"<div class='newsbox'>"+
					"<div class='newsimg'><img src='" +element['newsimg']+ "'></div>"+
					"<div class='newstext'>"+
					"<div class='newstitle'>" +element['newstitle']+ "</div>"+
					"<div class='newscontent'>" +element['newscontent']+ "</div>"+
					"</div>"+
					"<div class='addtime'>" +element['addtime']+ "</div>"+
					"</div>"+
					"</div>";	  
			});
			$(".newsmain").html(txt);
		}
	})
}
$(window).on("load",function(){
	$(".navlist>li").each(function(index){
		$(this).click(function(){
			loadnews($(this).attr("data-newstype"))
		})
	})
})