<?php 
	include_once("../func/mysql.php");
	getconnection();
	$username=$_POST['cate_name'];
	$sql="insert into b_type(tname) values('$username')";
 	$result=mysqli_query($dateConnerction,$sql);
	if (mysqli_affected_rows($dateConnerction)>=0) {
		echo "yes";
	}else{
		echo 'no：'.mysql_error().'<br />';
 		echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
	}
 ?>
