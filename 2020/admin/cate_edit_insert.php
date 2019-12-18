<?php 
	session_start();
	include_once('../inc/mysql.php');
	getconnection();
	// $id=$_GET['id'];
	$name=$_POST["name"];
	//$addtime=date('Y-m-d');
 //    $username=$_SESSION["username"];
 //    $sql1="select * from admin where username='$username'";
	// $result=mysqli_query($dataconnection,$sql1);
	// $info=mysqli_fetch_row($result);
	// $id=$info[0];
	$sql="insert into category(name) values ('$name')";
	if(mysqli_query($dataconnection,$sql)){
	     	echo "yes";
	     	header("refresh:1,url=cate.php");
	 	} else {
	   		echo 'no：'.mysql_error().'<br />';
	     	echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
	 	}

 ?>