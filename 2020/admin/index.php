<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>FLORA花店后台登录</title>
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="./css/font.css">
	<link rel="stylesheet" href="./css/xadmin.css">
    <link rel="stylesheet" type="text/css" href="./css/main_css.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>
    <script type="text/javascript">
    window.onload=function(){
        /**退出系统**/
        function logout(){
            if(confirm("您确定要退出本系统吗？")){
                window.location.href = "login.php";
            }
        }
       
        /**获得当前日期**/
        function  getDate01(){
            var time = new Date();
            var myYear = time.getFullYear();
            var myMonth = time.getMonth()+1;
            var myDay = time.getDate();
            if(myMonth < 10){
                myMonth = "0" + myMonth;
            }
            document.getElementById("yue_fen").innerHTML =  myYear + "." + myMonth;
            document.getElementById("day_day").innerHTML =  myYear + "." + myMonth + "." + myDay;
        }
        getDate01();
    }
    </script>

</head>
<body>
    <!-- 顶部开始 -->
   <div id="top">
        <div id="top_logo">
            <img alt="logo" src="images/logo.png" width="260" height="60" style="vertical-align:middle;">
        </div>
        <div id="top_links">
            <div id="top_op">
                <ul>
                    <li>
                        <img alt="当前用户" src="images/common/user.jpg">：
                        <span>admin</span>
                    </li>
                    <li>
                        <img alt="事务月份" src="images/common/month.jpg">：
                        <span id="yue_fen"></span>
                    </li>
                    <li>
                        <img alt="今天是" src="images/common/date.jpg">：
                        <span id="day_day"></span>
                    </li>
                </ul> 
            </div>
            <div id="top_close">
                <a href="../index.php" onclick="logout();" target="_parent">
                    <img alt="退出系统" title="退出系统" src="images/common/close.jpg" style="position: relative; top: 10px; left: 25px;">
                </a>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="logo"><a href="./index.html">X-admin v2.0</a></div>
        <div class="left_open">
            <i title="展开左侧栏" class="iconfont">&#xe699;</i>
        </div>
        <ul class="layui-nav left fast-add" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;">+新增</a>
            <dl class="layui-nav-child"><!-- 二级菜单-->
               <dd><a onclick="x_admin_show('资讯','http://www.baidu.com')"><i class="iconfont">&#xe6a2;</i>资讯</a></dd>
              <dd><a onclick="x_admin_show('图片','http://www.baidu.com')"><i class="iconfont">&#xe6a8;</i>图片</a></dd>
               <dd><a onclick="x_admin_show('用户','http://www.baidu.com')"><i class="iconfont">&#xe6b8;</i>用户</a></dd>
            </dl>
          </li>
        </ul> 
        <ul class="layui-nav right" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;"><?php
                    session_start();
                    //检测是否登录
                    if(isset($_SESSION['logined']) && $_SESSION['logined']){
                       $_SESSION['logined'];//有设置，并且值为真，表示已经登录
                       echo $_SESSION['username'];
                    }
                ?></a>
            <dl class="layui-nav-child"> <!-- 二级菜单 -->
              <dd><a onclick="x_admin_show('个人信息','http://www.baidu.com')">个人信息</a></dd>
              <dd><a onclick="x_admin_show('切换帐号','login.php')">切换帐号</a></dd>
              <dd><a href="./login.html">退出</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item to-index"><a href="/">前台首页</a></li>
        </ul>
        
    </div>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
     <!-- 左侧菜单开始 -->
    <div class="left-nav">
      <div id="side-nav">
        <ul id="nav">
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe6b8;</i>
                    <cite>用户管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="member-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>用户列表</cite>
                            
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe723;</i>
                    <cite>花束管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>生日鲜花</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="imported-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>进口鲜花</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="love-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>爱情鲜花</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="greeting-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>问候长辈</cite>
                         </a>
                   </li >
                    <li>
                        <a _href="blessing-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>祝福庆贺</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="visiting-flower-list.php">
                            <i class="iconf
                            ont">&#xe6a7;</i>
                            <cite>探病慰问</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="living-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>生活鲜花</cite>
                        </a>
                    </li >
                    <li>
                        <a _href="apology-flower-list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>道歉鲜花</cite>
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe723;</i>
                    <cite>分类管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="cate.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>分类列表</cite>
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe723;</i>
                    <cite>评论管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="comment.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>评论列表</cite>
                        </a>
                    </li >
                </ul>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont">&#xe726;</i>
                    <cite>管理员管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a _href="admin_list.php">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>管理员列表</cite>
                        </a>
                    </li >
                </ul>
            </li>
        </ul>
      </div>
    </div>
    <!-- <div class="x-slide_left"></div> -->
    <!-- 左侧菜单结束 -->
    <!-- 右侧主体开始 -->
    <div class="page-content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"><i class="layui-icon">&#xe68e;</i>我的桌面</li>
          </ul>
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <iframe src='./welcome.php' frameborder="0" scrolling="yes" class="x-iframe"></iframe>
            </div>
          </div>
        </div>
    </div>
    <div class="page-content-bg"></div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->
    <!-- 底部开始 -->
    <!-- <div class="footer" style="margin-left:0px;margin-left:0px;" >
        <div class="copyright">Copyright ©2017 x-admin v2.3 All Rights Reserved</div>  
    </div> -->
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