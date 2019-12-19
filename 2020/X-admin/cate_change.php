	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$username=$_POST['username'];
		$tid=$_GET['tid'];
		$sql="update b_type set tname='$username' where tid='$tid'";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "yes";
		}else{
			echo 'no：'.mysql_error().'<br />';
			echo '点击此处 <a href="javascript:history.back(-1);">返回 重试</a>';
		}
	 ?>