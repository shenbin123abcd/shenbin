<?php
	require_once("../connect.php");
	$newsid=$_GET['newsid'];
	//选取数据库的数据
	$sql="SELECT * FROM allnews where newsid='$newsid'";
	$result=mysql_query($sql,$con);
	$arr=array();
	while($row=mysql_fetch_array($result)){
		array_push($arr,array("newsid"=>$row['newsid'],"newstitle"=>$row['newstitle'],"newscontent"=>$row['newscontent'],"newsimg"=>$row['newsimg'],"addtime"=>$row['addtime'],"newsid"=>$row['newsid']));
	}
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>