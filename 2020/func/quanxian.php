<?php
	session_start();
//判断是否登录
function isLogin(){
	if(isset($_SESSION['username'])){
		return 1;
	}else{
		return 0;
	}
}
	
?>