<?php 
	include_once('../inc/mysql.php');
	getconnection();
	$id=$_GET["id"];
	$title=$_POST["title"];
	$content=$_POST['content'];
	$sql="update imported_flowers set name='$title',save='$content' where id=$id";
	$result=mysqli_query($dataconnection,$sql);
		if (mysqli_affected_rows($dataconnection)>=0) {
			echo "修改成功";
		}else{
			echo "修改失败";
		}



 ?>