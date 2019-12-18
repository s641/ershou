<!-- 注释 -->

<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>修改分类名</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./css/font.css">
    <link rel="stylesheet" href="./css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <?php 
    include_once("../inc/mysql.php");
    getconnection();
    $id=$_GET["id"];
    $sql="select * from category where id=$id";
    $result=mysqli_query($dataconnection,$sql);
    $row=mysqli_fetch_row($result);
    $content=$row[1];

   ?>
  <body>
    <div class="x-body">
        <form class="layui-form" action="cate_change_update.php?cmid=<?php echo $row[0] ?>" method="post">
          <div class="layui-form-item">
              <label for="username" class="layui-form-label">
                  <span class="x-red">*</span>分类
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="name" name="content" required="" lay-verify="required"
                  autocomplete="off"  class="layui-input" value="<?php echo $row[1] ?>"> 
              </div>
              <div class="layui-form-mid layui-word-aux">
                  <span class="x-red">*</span>填写分类名
              </div>
          </div>
          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button  class="layui-btn" lay-filter="add" lay-submit="">
                  修改
              </button>
          </div>
      </form>
    </div>
    <script>
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>