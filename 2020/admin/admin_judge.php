<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>判断登录的处理程序</title>
</head>
<body>
<?php
	session_start();
	include_once("../inc/mysql.php");
	$username=$_POST['username'];
	$password=$_POST['password'];
	$vcode=$_POST['vcode'];
	$vcode2=$_SESSION['vcode'];
	if($vcode!=$vcode2){//判断验证码是否正确
		echo "验证码错误";
		header("refresh:30000000000;url=admin_login.php");
		die();
	}
	getconnection();
	$sql="select * from b_admin where teacher='$username' and password='$password'";
	$result=mysqli_query($dataconnection,$sql);
	if(mysqli_num_rows($result)<1){//判断用户名或者密码是否正确
		echo "用户名或者密码错误！";
		header("refresh:2000000000;url=admin_login.php");
		die();
	}
	$sql2="select * from b_admin";
	$result2=mysqli_query($dataconnection,$sql2);
	while($info=mysqli_fetch_assoc($result2)){
		header('location:index.php');
	}
	$_SESSION['username']=$username;
?>
</body>
</html>