<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>用户评论</title>
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
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>评论ID</th>
            <th>商品ID</th>
            <th>用户ID</th>
            <th>评论内容</th>
            <th>发布时间</th>
            <th>操作</th>
            </tr>
        </thead>
        <tbody>
           <?php                                        //记录数据库中数据的条数
              include_once("../func/mysql.php");
              getConnection();
              $sql="select * from b_message";
              if(isset($_GET["p"])){//列表之间的跳转
                  $p=$_GET["p"];     
                 }else{
                   $p=1;
                 }
              $res=mysqli_query($dateConnerction,$sql);
              $nums=mysqli_num_rows($res);  //总记录数
              $num=5;             //每一页显示的条数
              $pags=ceil($nums/$num);   //总的页数
              $star=($p-1)*$num; 
              $pre=$p-1;
              $next=$p+1;
              $sql2="select * from b_message limit $star,$num";
              $res2=mysqli_query($dateConnerction,$sql2);
              while ($info=mysqli_fetch_assoc($res2)) {
            ?>
        <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='2'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td><?php echo $info['mid']?></td>
            <td><?php echo $info['gid']?></td>
            <td><?php echo $info['uid']?></td>
         <!--    <td class="td-status">
              <span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span></td> -->
            <td><?php echo $info['mcontent']?></td>
            <td><?php echo $info['mcreate_time']?></td>
            
            <td class="td-manage">
 
              <a onclick="del(this,<?php echo $info['mid']?>)" title="删除" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
            <?php
               }
            ?>
          </tr>
 
        </tbody>
      </table>
      <div class="page">
             <?php
                 echo "共&nbsp;".$nums."&nbsp;条记录,"."共&nbsp;".$pags."&nbsp;页&nbsp;&nbsp;";
                  if($p!=1){
                    echo "<a href='?p=1'>【首页】</a>&nbsp;&nbsp;"."<a href='?p=$pre' id='prev'>【上一页】</a>&nbsp;&nbsp;";
                 }
                 echo "当前显示第&nbsp;".$p."&nbsp;页&nbsp;";
                  if($p!=$pags){               
                     echo "<a href='?p=$next' id='next'>【下一页】</a>&nbsp;&nbsp;&nbsp;&nbsp;"."<a href='?p=$pags'>【尾页】</a>&nbsp;&nbsp;";
                }
              ?> 
      </div>

    </div>
    <script>
    // 删除评论
     function del(v,id){
            if(window.XMLHttpRequest){//非IE浏览器创建XmlHttpRequest对象
              var oAjax = new XMLHttpRequest();
            }else{
              var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
            }
            oAjax.open("GET","comment_del.php?id="+id,true);//把要读取的参数的传过来。
            oAjax.send();
            oAjax.onreadystatechange=function(){//如果状态发生改变
              if(oAjax.readyState==4){//如果数据接收完毕
                if(oAjax.status==200){//请求的服务程序存在
                  if(oAjax.responseText){
                    confirm("删除成功");
                    v.parentNode.parentNode.style.display="none";
                  }
                }
              }
            }
          }

      
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
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>