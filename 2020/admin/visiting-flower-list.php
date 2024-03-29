<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>进口鲜花管理</title>
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
    <?php 
    session_start();
?>
    <style type="text/css">
      body{
        padding:0px;
        margin:10px;
        width:100%;
        height:100%;
      }
    </style>
  </head>
  
  <body class="layui-anim layui-anim-up">
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
    <div class="x-body">
      
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <button class="layui-btn" onclick="x_admin_show('添加花束','visiting-add.php',600,400)"><i class="layui-icon"></i>添加</button>
        <span class="x-right" style="line-height:40px">共有数据：<?php 
            include_once('../inc/mysql.php');
            getconnection();
            $sql="select id from visiting_flowers";
              $result=mysqli_query($dataconnection,$sql); 
              echo mysqli_num_rows($result);

           ?>条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>ID</th>
            <th>名称</th>
            <th>图片</th>
            <th>价格</th>
            <th>存货数量</th>
            <th>发布时间</th>
            <th>是否允许评论</th>
            <th>操作</th>

            </tr>
        </thead>
        <tbody>
          <?php 
            include_once("../inc/mysql.php");
            getconnection();
            if(isset($_GET['p'])){
            $p=$_GET['p'];
            }else{
              $p=1;
            }
              $sql="select id from visiting_flowers";
              $result=mysqli_query($dataconnection,$sql); 
              $nums=mysqli_num_rows($result);
              $num=6;
              $pages=ceil($nums/$num);
              $start=($p-1)*$num;
              $sql2="select * from visiting_flowers limit $start,$num";
              $result2=mysqli_query($dataconnection,$sql2);
              $prev=$p-1;
              $next=$p+1;

      while ($row=mysqli_fetch_assoc($result2)) {
        $id=$row["id"];
        $name=$row["name"];
        $img=$row["img"];
        $prize=$row["prize"];
        $save=$row["save"];
        $addtime=$row["addtime"];
        ?>
        <tr>
            <td>
              <div class='layui-unselect layui-form-checkbox' lay-skin='primary' data-id='2'><i class='layui-icon'>&#xe605;</i></div>
            </td>
            <td><?php echo $row["id"] ?></td>
            <td><?php echo $name ?></td>
            <td><?php echo $img ?></td>
            <td><?php echo $prize ?></td>
            <td><?php echo $save ?></td>
            <td><?php echo $addtime ?></td>
            <td class="td-status">
              <span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span>
            </td>
            <td class="td-manage">
              <a onclick="member_stop(this,'<?php echo $row['id'] ?>')" href="javascript:;"  title="启用">
                <i class="layui-icon">&#xe601;</i>
              </a>
              <a title="编辑"  onclick="x_admin_show('编辑','flower-change.php?id=<?php echo $row['id'] ?>',600,400)" href="javascript:;">
                <i class="layui-icon">&#xe642;</i>
              </a>
              <a title="删除" onclick="member_del(this,'<?php echo $row['id']; ?>')" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
          </tr>;

      <?php
      }

     ?>
        </tbody>
      </table>


      
      <div class="page">
        <div>
          <?php
            if($nums<10){
              echo "<a class='num' href='?p=1'>【首页】</a>";
            }          
            if($p!=1){
            echo "<a class='num' href='?p=1'>【首页】</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class='prev' href='?p=$prev'>【上一页】</a>&nbsp;&nbsp;&nbsp;";
            }
            if($p!=$pages){
              echo "<a class='next' href='?p=$next'>【下一页】</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class='num' href='?p=$pages'>【末页】</a>";
            }
          ?>        
        </div>
      </div>

    </div>
    <script>
      layui.use('laydate', function(){
        var laydate = layui.laydate;
        
        //执行一个laydate实例
        laydate.render({
          elem: '#start' //指定元素
        });

        //执行一个laydate实例
        laydate.render({
          elem: '#end' //指定元素
        });
      });

       /*用户-停用*/
      function member_stop(obj,id){
          layer.confirm('确认要停用吗？',function(index){

              if($(obj).attr('title')=='启用'){

                //发异步把用户状态进行更改
                $(obj).attr('title','停用')
                $(obj).find('i').html('&#xe62f;');

                $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                layer.msg('已停用!',{icon: 5,time:1000});

              }else{
                $(obj).attr('title','启用')
                $(obj).find('i').html('&#xe601;');

                $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                layer.msg('已启用!',{icon: 5,time:1000});
              }
              
          });
      }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
            nid=id;
            
            if(window.XMLHttpRequest){
               var oAjax=new XMLHttpRequest();
            }else{
              var oAjax=new ActiveHttpRequest('Microsoft.XMLHTTP');
            }
              oAjax.open('GET',"visiting_del.php?nid="+nid,true);
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