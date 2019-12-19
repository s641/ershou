	<?php 
		include_once("../func/mysql.php");
		getConnection();
		$id=$_GET['tcid'];
		$sql="delete from b_typeclass where tcid=$id";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "1";

		}else{
			echo "0";
		}
	 ?>