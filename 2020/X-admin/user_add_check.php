<?php 
	include_once("../func/mysql.php");
	getConnection();
	$username=$_POST["username"];
	//$password=sha1(md5($_POST["password"]));//d8406e8445cc99a16ab984cc28f6931615c766fc
	$repassword=sha1(md5($_POST["repass"]));
	//$password=$_POST["password"];
	$password=sha1(md5($_POST["pass"]));
	$address=$_POST["address"];
	$phone=$_POST["phone"];
	$cate=$_POST["cate"];
	if($repassword!=$password){
		die("两次密码不一致");
	}
	$sql="insert into b_user(user_password,user_name,user_class,user_phone,user_type) values('$password','$username','$address','$phone','$cate')";
 	$result=mysqli_query($dateConnerction,$sql);
	if (mysqli_affected_rows($dateConnerction)>=0) {
		echo "yes";
	}else{
		echo 'no：'.mysql_error().'<br />';
 		echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
	}
 ?>
