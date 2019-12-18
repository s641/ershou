<?php 
	include_once('../inc/mysql.php');
	getconnection();
	$uid=$_GET["id"];
	$username=$_POST["username"];
	$password=sha1(md5($_POST["password"]));
	$sql="update user set username='$username',password='$password' where id=$id";
	$result=mysqli_query($dataconnection,$sql);
	if(mysqli_affected_rows($dataconnection)>0){
		echo "修改成功";
	}else{
		echo "修改失败";
	}


 ?>