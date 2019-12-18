	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$username=$_POST['username'];
		$repassword=$_POST['repass'];
		$password=$_POST['pass'];
		if($repassword!=$password){
			die("两次密码不一致");
		}
		$aid=$_GET['aid'];
		$sql="update b_admin set teacher='$username',password='$password' where aid='$aid'";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "yes";
		}else{
			echo 'no：'.mysql_error().'<br />';
			echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
		}
	 ?>