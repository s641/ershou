<!DOCTYPE html>
<html class="x-admin-sm">
    <head>
        <meta charset="UTF-8">
        <title>欢迎页面-X-admin2.2</title>
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
        <link rel="stylesheet" href="./css/font.css">
        <link rel="stylesheet" href="./css/xadmin.css">
        <script src="./lib/layui/layui.js" charset="utf-8"></script>
        <script type="text/javascript" src="./js/xadmin.js"></script>
        <!--[if lt IE 9]>
          <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
          <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="x-nav">
          <span class="layui-breadcrumb">
            <a href="">首页</a>
            <a href="">演示</a>
            <a>
              <cite>导航元素</cite></a>
          </span>
          <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" onclick="location.reload()" title="刷新">
            <i class="layui-icon layui-icon-refresh" style="line-height:30px"></i></a>
        </div>
        <div class="layui-fluid">
            <div class="layui-row layui-col-space15">
                <div class="layui-col-md12">
                    <div class="layui-card">
                        <div class="layui-card-body ">
                            <form class="layui-form layui-col-space5">
                                <div class="layui-inline layui-show-xs-block">
                                    <input class="layui-input"  autocomplete="off" placeholder="开始日" name="start" id="start">
                                </div>
                                <div class="layui-inline layui-show-xs-block">
                                    <input class="layui-input"  autocomplete="off" placeholder="截止日" name="end" id="end">
                                </div>
                                <div class="layui-inline layui-show-xs-block">
                                    <input type="text" name="username"  placeholder="请输入用户名" autocomplete="off" class="layui-input">
                                </div>
                                <div class="layui-inline layui-show-xs-block">
                                    <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
                                </div>
                            </form>
                        </div>
                        <div class="layui-card-header">
                            <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
                            <button class="layui-btn" onclick="xadmin.open('添加用户','./user_add.php',600,400)"><i class="layui-icon"></i>添加</button>
                        </div>
                        <div class="layui-card-body layui-table-body layui-table-main">
                            <table class="layui-table layui-form">
                                <thead>
                                  <tr>
                                    <th>
                                      <input type="checkbox" lay-filter="checkall" name="" lay-skin="primary">
                                    </th>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>密码</th>
                                    <th>手机</th>
									<th>类别</th>
									<th>地址</th>
									<th>状态</th>
									<th>操作</th>
									</tr>
                                </thead>
                                <tbody>
									<?php                                        //记录数据库中数据的条数
									   include_once("../func/mysql.php");
									   getConnection();
									   $sql="select * from b_user";
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
									   $sql2="select * from b_user limit $star,$num";
									   $res2=mysqli_query($dateConnerction,$sql2);
									     while ($info=mysqli_fetch_assoc($res2)) {
									 ?>
                                  <tr>
                                    <td>
                                      <input type="checkbox" name="id" value="1"   lay-skin="primary"> 
                                    </td>
                                    <td><?php echo $info['uid']?></td>
                                    <td><?php echo $info['user_name']?></td>
                                    <td><?php echo $info['user_password']?></td>
                                    <td><?php echo $info['user_phone']?></td>
									<td><?php echo $info['user_type']?></td>
                                    <td><?php echo $info['user_class']?></td>
                                    <td class="td-status">
										<?php echo $info['user_state']?>
									</td>
                                    <td class="td-manage">
                                      <a title="删除" onclick="member_del(this,<?php echo $info['uid']?>)" href="javascript:;">
                                        <i class="layui-icon">&#xe640;</i>
                                      </a>
                                    </td>
                                  </tr>
								  
								  <?php
								  }
								  ?>
                                </tbody>
                            </table>
                        </div>
                        <div class="layui-card-body ">
                            <div class="page">
                            <?php
                            echo "共&nbsp;".$nums."&nbsp;条记录,"."共&nbsp;".$pags."&nbsp;页&nbsp;&nbsp;";
                              if($p!=1){
                            ?>
                                <button class="num" onclick="Update()"><?php echo "<a href='?p=1'>【首页】</a>&nbsp;&nbsp;"?></button>
                                <button class="num" onclick="Update()"><?php echo"<a href='?p=$pre' id='prev'>【上一页】</a>&nbsp;&nbsp;";?></button>
                               
                            <?php 
                              }
                            
                              echo "当前显示第&nbsp;".$p."&nbsp;页&nbsp;";
                             ?> 
                             <?php
                              if($p!=$pags){
                             ?> 
                                <button class="num" onclick="Update()"><?php echo "<a href='?p=$next' id='next'>【下一页】</a>&nbsp;&nbsp;&nbsp;&nbsp;"?>
                                <button class="num" onclick="Update()"><?php echo"<a href='?p=$pags'>【尾页】</a>&nbsp;&nbsp;"?></button>
                            <?php
                              }
                            ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </body>
    <script>
      layui.use(['laydate','form'], function(){
        var laydate = layui.laydate;
        var  form = layui.form;


        // 监听全选
        form.on('checkbox(checkall)', function(data){

          if(data.elem.checked){
            $('tbody input').prop('checked',true);
          }else{
            $('tbody input').prop('checked',false);
          }
          form.render('checkbox');
        }); 
        
        //执行一个laydate实例
        laydate.render({
          elem: '#start' //指定元素
        });

        //执行一个laydate实例
        laydate.render({
          elem: '#end' //指定元素
        });


      });
		// 用户禁用
		function stop(obj,id){
		   layer.alert("确定修改用户状态吗？",function(index){
		     var oAjax = new XMLHttpRequest();
		     oAjax.open("get","user_stop.php?id="+id,true);//把要读取的参数的传过来。
		     oAjax.send();
		     oAjax.onreadystatechange=function(){//如果状态发生改变
		       if(oAjax.readyState==4){//如果数据接收完毕
		         if(oAjax.status==200){//请求的服务程序存在
		           alert('修改成功');
		         }
		       }
		     }
		   })
		 }
		 /*用户-删除*/
		 function member_del(obj,id){
			 layer.confirm('确认要删除吗？',function(index){
				 var oAjax=new XMLHttpRequest();
				 oAjax.open('GET',"user_del.php?id="+id,true);
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
        var ids = [];

        // 获取选中的id 
        $('tbody input').each(function(index, el) {
            if($(this).prop('checked')){
               ids.push($(this).val())
            }
        });
  
        layer.confirm('确认要删除吗？'+ids.toString(),function(index){
            //捉到所有被选中的，发异步进行删除
            layer.msg('删除成功', {icon: 1});
            $(".layui-form-checked").not('.header').parents('tr').remove();
        });
      }
    </script>
</html>