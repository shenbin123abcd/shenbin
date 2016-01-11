<?php
	header("Content-type:text/html;Charset=utf-8");
	define('HOST', '127.0.0.1');
	define('USERNAME', 'root');
	define('PASSWORD', '');	
	$con = mysql_connect(HOST, USERNAME, PASSWORD);
	$sql=mysql_select_db("baiduNews",$con);
	mysql_query("set names 'utf8'");
	if(!$con){
		echo "链接数据库失败".mysql_error();
	}
	if(!$sql){
		echo "创建数据库失败".mysql_error();
	}
?>