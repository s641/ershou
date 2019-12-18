<?php
	$dateConnerction=NULL;//数据库连接标识
	function getConnection(){
		$hostname="127.0.0.1";//数据库服务器的IP地址
		$username="root";//数据库服务器的用户名
		$password="";//数据库服务器的密码
		$dbname="2017";//操作数据库的名称
		global $dateConnerction;
		$dateConnerction=@mysqli_connect($hostname,$username,$password) or die(mysql_error());
		// $sql="set names 'utf8'";//设置字符集为utf-8
		mysqli_query($dateConnerction,"set names 'UTF8'");
		@mysqli_select_db($dateConnerction,$dbname) or die(mysql_error());//选择当前操作的数据库名称
	}
?>