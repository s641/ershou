<!doctype html>
<html  class="x-admin-sm">
<head>
	<meta charset="UTF-8">
	<title>后台登录</title>
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="stylesheet" href="./css/font.css">
    <link rel="stylesheet" href="./css/login.css">
	  <link rel="stylesheet" href="./css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="./lib/layui/layui.js" charset="utf-8"></script>
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
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
        
        <form method="post" class="layui-form" action="admin.php">
            <input name="username" placeholder="用户名"  type="text" lay-verify="required" class="layui-input" >
            <hr class="hr15">
            <input name="password" lay-verify="required" placeholder="密码"  type="password" class="layui-input">
            <hr class="hr15">
			<input name="vcode" lay-verify="required" placeholder="验证码"  type="text" class="layui-input" style="width: 220px;float: left;">
			<canvas id="vcode" width="110px" height="48px" style="float: left;border: 1px solid black;"></canvas>
			<hr class="hr15">
            <input value="登录" lay-submit lay-filter="login" style="width:100%;" type="submit">
            <hr class="hr20" >
        </form>
    </div>

<!--    <script>
        $(function  () {
            layui.use('form', function(){
              var form = layui.form;
              // layer.msg('玩命卖萌中', function(){
              //   //关闭后的操作
              //   });
              //监听提交
              form.on('submit(login)', function(data){
                // alert(888)
                layer.msg(JSON.stringify(data.field),function(){
                    location.href='index.php'
                });
                return false;
              });
            });
        })
    </script> -->
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
	<script type="text/javascript">
		var c=document.getElementById('vcode');
		  var ctx=vcode.getContext('2d');
		  ctx.font="24px sans-serif";
		  ctx.fillText("<?php echo $vcode;?>",25,30);
		  for(var i=1;i<=60;i++){
		    r=Math.floor(Math.random()*255);
		    g=Math.floor(Math.random()*255);
		    b=Math.floor(Math.random()*255);
		    x=Math.floor(Math.random()*95);
		    y=Math.floor(Math.random()*45);
		    ctx.fillStyle="rgb("+r+','+g+','+b+")";
		    ctx.beginPath();
		    ctx.arc(x,y,1,0,2*Math.PI);
		    ctx.fill();
		}
		  c.onclick=function(){
		    if(window.XMLHttpRequest){//非IE浏览器创建XmlHttpRequest对象
		      var oAjax = new XMLHttpRequest();
		    }else{
		      var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
		    }
		    oAjax.open("GET","vcode.php",true);//把要读取的参数的传过来。
		    oAjax.send();
		    oAjax.onreadystatechange=function(){//如果状态发生改变
		      if(oAjax.readyState==4){//如果数据接收完毕
		              if(oAjax.status==200){//请求的服务程序存在
		                  ctx.clearRect(0,0,85,80);
		                  ctx.fillText(oAjax.responseText,25,30);
		                  for(var i=1;i<=60;i++){
		            r=Math.floor(Math.random()*255);
		            g=Math.floor(Math.random()*255);
		            b=Math.floor(Math.random()*255);
		            x=Math.floor(Math.random()*95);
		            y=Math.floor(Math.random()*45);
		            ctx.fillStyle="rgb("+r+','+g+','+b+")";
		            ctx.beginPath();
		            ctx.arc(x,y,1,0,2*Math.PI);
		            ctx.fill();
		        }
		              }
		          }
		      }
		    }
	</script>
</body>
</html>