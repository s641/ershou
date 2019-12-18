<!DOCTYPE html>
<html>
<head>
	<title>新闻的添加</title>
	<meta charset="utf-8">
	<?php
		include_once("../func/mysql.php");
		getConnection();
		$title=$_POST['title'];      //获取新闻的标题
		$content=$_POST['content'];    //获取新闻的内容
		$addtime=date('Y-m-d h:i:s');
		$sql="insert into b_gonggao(title,content,time) values('$title','$content','$addtime')";
		$result=mysqli_query($dateConnerction,$sql);
		if (mysqli_affected_rows($dateConnerction)>=0) {
			echo "yes";
		}else{
			echo 'no：'.mysql_error().'<br />';
			echo '点击此处 <a href="new_list.php">返回 重试</a>';
		}
	?>
</head>
<body>

</body>
</html>