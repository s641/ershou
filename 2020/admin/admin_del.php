	<?php 
		include_once("../inc/mysql.php");
		getconnection();
		$id=$_GET['id'];
		$sql="delete from admin where id=$id";
		$result=mysqli_query($dataconnection,$sql);
		if (mysqli_affected_rows($dataconnection)>=0) {
			echo "1";

		}else{
			echo "0";
		}
	 ?>