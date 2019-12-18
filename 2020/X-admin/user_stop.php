<?php
	include_once("../func/mysql.php");
    getConnection();
    $uid=$_GET['id'];
    $sql="select * from b_user  where uid=$uid";
    $res=mysqli_query($dateConnerction,$sql);
    while ($info=mysqli_fetch_assoc($res)) {
    	$allow=$info['user_state'];
    }
    if($allow==1){
      $sql2="update b_user set user_state=0 where uid=$uid";
      mysqli_query($dateConnerction,$sql2);
      echo 0;
    }else{
      $sql3="update b_user set user_state=1 where uid=$uid";
      mysqli_query($dateConnerction,$sql3);
      echo 1;
    }

?>