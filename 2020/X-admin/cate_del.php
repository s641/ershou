	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$id=$_GET['tid'];
		$sql="delete from b_type where tid=$id";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "1";

		}else{
			echo "0";
		}
	 ?>