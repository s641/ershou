<!DOCTYPE html>
<html>
<head>
	<title>管理界面</title>
	<meta charset="utf-8">
		<?php
		include_once("../func/mysql.php");
		include_once("../func/quanxian.php");     //   判断管理员是否登录
		$username=$_POST['username'];    //获取用户名
		//$password=sha1(md5($_POST['password']));     //获取密码(通过密文加密)
		$password=$_POST['password'];
		 $vcode=$_POST['vcode'];
		$vcode2=$_SESSION['vcode'];
		getConnection();
		$sql="select * from b_admin where teacher='$username' and password='$password'";
		$res=mysqli_query($dateConnerction,$sql);
		$info=mysqli_fetch_assoc($res);
		$aid=$info['aid'];
		
		if(mysqli_num_rows($res)>=1){      //用户名和密码组合正确
			if($vcode!=$vcode2){
				echo "验证码错误";
				die();
			}
			header("Location:index.php");
		
		}else{
			echo ("用户名或密码错误");
		}
		$_SESSION['aid']=$aid;
		$_SESSION['username']=$username;
	?>
</head>
<body>

</body>
</html>