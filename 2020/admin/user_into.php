<?php 
	include_once("../inc/mysql.php");
	getconnection();
	$username=$_POST["username"];
	//$password=sha1(md5($_POST["password"]));//d8406e8445cc99a16ab984cc28f6931615c766fc
	//$repassword=sha1(md5($_POST["repassword"]));
	// $addtime=date('Y-m-d H:i:s');
	// echo $username.','.$password.','.$addtime;
	$password=$_POST["password"];


	$sql="insert into user(username,userpwd) values('$username','$password')";
 	$result=mysqli_query($dataconnection,$sql);
	if (mysqli_affected_rows($dataconnection)>=0) {
		echo "yes";
	}else{
		echo 'no：'.mysql_error().'<br />';
 		echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
	}
 ?>
