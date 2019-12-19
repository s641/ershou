	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$username=$_POST['username'];
		$tcid=$_GET['tcid'];
		$sql="update b_typeclass set tcname='$username' where tcid='$tcid'";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "yes";
		}else{
			echo 'no：'.mysql_error().'<br />';
			echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
		}
	 ?>