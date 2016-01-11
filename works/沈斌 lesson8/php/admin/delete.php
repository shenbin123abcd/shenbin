<?php
	require_once('../connect.php');
	$newsid=$_GET['newsid'];
	$sql="DELETE from allnews where newsid=$newsid";
	$result=mysql_query($sql,$con);
	if(!$result){
		die("删除失败".mysql_error());
	}else{
		header("refresh:3;url=../../handle.html");
		echo ("删除成功，3秒后自动跳转...");
	}
?>