<!DOCTYPE html>
<html>
<head>
	<title>信息的添加</title>
	<meta charset="utf-8">
	<?php
		include_once("../func/mysql.php");
		getConnection();
		session_start();
		$title=$_POST['title'];      //获取新闻的标题
		$content=$_POST['content'];    //获取新闻的内容
		$teacher=$_SESSION['username'];
		$sql1="select * from b_admin where teacher='$teacher'";
		$res=mysqli_query($dateConnerction,$sql1);
		$info=mysqli_fetch_assoc($res);
		$aid=$info['aid'];
		$sql="insert into b_information(uid,pname,pcontent) values('$aid','$title','$content')";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "yes";
		}else{
			echo 'no：'.mysql_error().'<br />';
			echo '点击此处 <a href="information_list.php">返回 重试</a>';
		}
	?>
</head>
<body>

</body>
</html>