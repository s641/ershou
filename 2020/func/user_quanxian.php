<?php
	// session_start();
//判断是否登录后评论
	
	if(!isset($_SESSION['username1'])){
		die("请先登录！");
	}
?>