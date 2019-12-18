<?php 
	include_once("../inc/mysql.php");
	getconnection();
	$id=$_GET["cmid"];
	$content=$_POST["content"];
	$sql="update category set name='$content' where id=$id";
	$result=mysqli_query($dataconnection,$sql);
	if(mysqli_affected_rows($dataconnection)>0){
		echo "修改成功";
	}else{
		echo "修改失败";
	}

 ?>