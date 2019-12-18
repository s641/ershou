<?php 
	include_once("../inc/mysql.php");
	getconnection();
	$id=$_GET["aid"];
	$username=$_POST["username"];
	$password=$_POST['password'];
	$sql="update admin set username='$username',password='$password' where id=$id";
	$result=mysqli_query($dataconnection,$sql);
	if(mysqli_affected_rows($dataconnection)>0){
		echo "修改成功";
	}else{
		echo "修改失败";
	}

 ?>