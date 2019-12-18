	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$id=$_GET['id'];
		$sql="delete from b_user where uid=$id";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "1";

		}else{
			echo "0";
		}
	 ?>