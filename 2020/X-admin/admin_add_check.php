<?php 
	include_once("../func/mysql.php");
	getconnection();
	$username=$_POST['username'];
	$repassword=$_POST['repass'];
	$password=$_POST['pass'];
	$addtime=date('Y-m-d h:i:s');
	if($repassword!=$password){
		die("两次密码不一致");
	}
	$sql="insert into b_admin(teacher,password,addtime) values('$username','$password','$addtime')";
 	$result=mysqli_query($dateConnerction,$sql);
	if (mysqli_affected_rows($dateConnerction)>=0) {
		echo "yes";
	}else{
		echo 'no：'.mysql_error().'<br />';
 		echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
	}
 ?>
