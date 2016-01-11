<?php
	require_once("../connect.php");
	$newsid=$_POST['newsid'];
	$newstitle=$_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newscontent=$_POST['newscontent'];
	$addtime=$_POST['addtime'];
	$newstype=$_POST['newstype'];
	//修改语句
	$sql="UPDATE allnews SET newstitle='$newstitle',newsimg='$newsimg',newscont='$newscontent',addtime='$addtime',newstype='$newstype' where newsid=$newsid";
	$result=mysql_query($sql,$con);
	if(!$result){
		echo "修改失败".mysql_error();
	}else{
		header("refresh:3;url=../../handle.html");
		echo ("修改成功，3秒后自动跳转");
	}
	mysql_close($con);
?>