<?php
	require_once('../connect.php');
	$newstype=$_GET['newstype'];
	//选取数据库的数据
	$sql="select * from allnews where newstype='$newstype'";
	$result=mysql_query($sql,$con);
	$arr=array();
	while($row=mysql_fetch_array($result)){
		array_push($arr,array("newsid"=>$row['newsid'],"newstitle"=>$row['newstitle'],"newscontent"=>$row['newscontent'],"newsimg"=>$row['newsimg'],"addtime"=>$row['addtime']));
	}
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>