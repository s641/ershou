<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>评论页面</title>
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
    <style type="text/css">
      body{
        padding:0px;
        margin:10px;
        width:100%;
        height:100%;
      }
    </style>
  </head>
  
  <body>
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">演示</a>
        <a>
          <cite>导航元素</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body" style="margin-right:20px;">
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <span class="x-right" style="line-height:40px">共有数据：
          <?php 
            include_once("../inc/mysql.php");
            getconnection();
            $sql2="select * from hf";
            $result2=mysqli_query($dataconnection,$sql2);
            echo mysqli_num_rows($result2);
         ?> 条
       </span>
      </xblock>
      <table class="layui-table layui-form">
        <thead>
          <tr>
            <th width="20">
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th width="70">ID</th>
            <th>用户名</th>
            <th>内容</th>
            <th width="150">添加时间</th>
            <th width="50">状态</th>
            <th width="120">操作</th>
        </thead>
        <tbody class="x-cate">
          <?php 
      include_once("../inc/mysql.php");
      getconnection();
      $sql="select * from hf";
      $result=mysqli_query($dataconnection,$sql);
      while ($row=mysqli_fetch_assoc($result)) {
        $por_id=$row["por_id"];
        
      
     ?>
          <tr cate-id='1' fid='0' >
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='2'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td><?php echo $row["por_id"] ?></td>
            <td><?php echo $row["name"] ?></td>
            <td>
              <i class="layui-icon x-show" status='true'>&#xe623;</i>
              <?php echo $row["nr"] ?>
            </td>
            <td><?php echo $row["c_time"] ?></td>
            <td>
              <input type="checkbox" name="switch"  lay-text="开启|停用"  checked="" lay-skin="switch">
            </td>
            <td class="td-manage">

              <button class="layui-btn-danger layui-btn layui-btn-xs"  onclick="member_del(this,'<?php echo $row['por_id'] ?>')" href="javascript:;" ><i class="layui-icon">&#xe640;</i>删除</button>
            </td>
          </tr>
          <?php 
            }
           ?>
        </tbody>
      </table>
    </div>
    
    <style type="text/css">
      
    </style>
    <script>
      layui.use(['form'], function(){
        form = layui.form;
        
      });

      

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
            cmid=id;
            if(window.XMLHttpRequest){
               var oAjax=new XMLHttpRequest();
            }else{
              var oAjax=new ActiveHttpRequest('Microsoft.XMLHTTP');
            }
              oAjax.open('GET',"comment_del.php?id="+id,true);
              oAjax.send();
              oAjax.onreadystatechange=function(){
                if(oAjax.readyState==4){
                  if(oAjax.status==200){
                   $(obj).parents("tr").remove();
                    layer.msg('已删除!',{icon:1,time:1000});
                  }
                }
              }
              
          });
      }



      function delAll (argument) {

        var data = tableCheck.getData();
  
        layer.confirm('确认要删除吗？'+data,function(index){
            //捉到所有被选中的，发异步进行删除
            layer.msg('删除成功', {icon: 1});
            $(".layui-form-checked").not('.header').parents('tr').remove();
        });
      }
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>