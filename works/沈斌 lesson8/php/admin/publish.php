<?php
	require_once("../connect.php");
	$newsid=$_POST['newsid'];
	$newstitle=$_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newscontent=$_POST['newscontent'];
	$addtime=$_POST['addtime'];
	$newstype=$_POST['newstype'];
	//新增数据
	$sql="INSERT INTO allnews(newstitle,newsimg,newscontent,addtime,newstype)VALUES('$newstitle','$newsimg','$newscontent','$addtime','$newstype')";
	$result=mysql_query($sql,$con);
	if(!$result){
		echo "新增数据失败".mysql_error();
	}else{
		header("refresh:3;url:../../handle.html");
		echo ("新增数据成功，3秒后跳转");
	}
?>