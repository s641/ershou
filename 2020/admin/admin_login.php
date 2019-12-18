<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>乐享后台登录</title>
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/font.css">
	<link rel="stylesheet" href="css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>
    <?php
      session_start();
      $vcode=rand(1000,9999);
      $_SESSION['vcode']=$vcode;
    ?>
</head>
<body class="login-bg">
    
    <div class="login layui-anim layui-anim-up">
        <div class="message">管理登录</div>
        <div id="darkbannerwrap"></div>
        
        <form method="post" class="layui-form" action="admin_judge.php">
            <input name="username" placeholder="用户名"  type="text" lay-verify="required" class="layui-input" >
            <hr class="hr15">
            <input name="password" lay-verify="required" placeholder="密码"  type="password" class="layui-input">
            <hr class="hr15">
            <input type="text" name="vcode" lay-verify="required" placeholder="验证码" class="layui-input" style="width:65%">
            <canvas id="vcode" width="100px" height="50px"></canvas>
            <hr class="hr15">
            <input value="登录" lay-submit lay-filter="login" style="width:100%;" type="submit">
            <hr class="hr20" >
        </form>
    </div>
    <script type="text/javascript">
      var vcode=document.getElementById('vcode');
      var mycan=vcode.getContext("2d");
      mycan.font="25px 华文新魏";
      mycan.fillText("<?php echo $vcode?>",20,30);
      vcode.onclick=function(){
        //创建XMLHttpRequest
        if(window.XMLHttpRequest){//非IE浏览器创建XmlHttpRequest对象
          var oAjax=new XMLHttpRequest();
        }else{
          var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
        }
        oAjax.open("GET","vcode.php",true);//把要读取的参数传过来
        oAjax.send();
        oAjax.onreadystatechange=function(){//如果状态发生改变
          if(oAjax.readyState==4){//如果数据接收完毕
            if(oAjax.status==200){//就绪
              mycan.clearRect(0,0,100,50);
              mycan.fillText(oAjax.responseText,20,30)
            }
          }
        }
      }
    </script>
    
    <!-- 底部结束 -->
    <script>
    //百度统计可去掉
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
</body>
</html>