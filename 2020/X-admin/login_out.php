<!DOCTYPE html>
<html>
<head>
	<title>用户退出登录</title>
	<meta charset="utf-8">
	<?php
		session_start();
		unset($_SESSION['username']);
		echo "已退出登录";
		header("Location:../index.html");
	?>
</head>
<body>

</body>
</html>