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
        <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
        <script src="./lib/layui/layui.js" charset="utf-8"></script>
        <script type="text/javascript" src="./js/xadmin.js"></script>
        <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
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
                <i class="layui-icon layui-icon-refresh" style="line-height:30px"></i>
            </a>
        </div>
        <div class="layui-fluid">
            <div class="layui-row layui-col-space15">
                <div class="layui-col-md12">
                    <div class="layui-card">
                        <div class="layui-card-body ">
                            <form class="layui-form layui-col-space5" action="dcate_add.php" method="post">
                                <div class="layui-input-inline layui-show-xs-block">
                                    <input class="layui-input" placeholder="分类名" name="cate_name"></div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <button class="layui-btn"  lay-submit="" lay-filter="sreach" ><i class="layui-icon"></i>增加</button>
                                </div>
                            </form>
                            <hr>
                        </div>
                        <div class="layui-card-header">
                            <button class="layui-btn layui-btn-danger" onclick="delAll()">
                                <i class="layui-icon"></i>批量删除</button>
                        </div>
                        <div class="layui-card-body ">
                            <table class="layui-table layui-form">
                              <thead>
                                <tr>
                                  <th width="20">
                                    <input type="checkbox" name="" lay-skin="primary">
                                  </th>
                                  <th width="70">ID</th>
                                  <th>栏目名</th>
                                  <th width="250">操作</th>
                              </thead>
                              <tbody class="x-cate">
								  <?php                                        //记录数据库中数据的条数
								     include_once("../func/mysql.php");
								     getConnection();
								     $sql="select * from b_type";
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
								     $sql2="select * from b_type limit $star,$num";
								     $res2=mysqli_query($dateConnerction,$sql2);
								     while ($info=mysqli_fetch_assoc($res2)) {
										 $tcid=$info['tid'];
								   ?>
                                <tr cate-id='<?php echo $info['tid'];?>' fid='0'>
                                  <td>
                                    <input type="checkbox" name="" lay-skin="primary">
                                  </td>
                                  <td><?php echo $info['tid'];?></td>
                                  <td>
                                    <i class="layui-icon x-show" status='true'>&#xe623;</i>
                                   <?php echo $info['tname'];?>
                                  </td>
                                  <td class="td-manage">
                                    <button class="layui-btn layui-btn layui-btn-xs"  onclick="xadmin.open('编辑','cate_edit.php?tid=<?php echo $info['tid'];?>')" ><i class="layui-icon">&#xe642;</i>编辑</button>
                                    <button class="layui-btn layui-btn-warm layui-btn-xs"  onclick="xadmin.open('添加','cate_add.php?tid=<?php echo $info['tid'];?>')" ><i class="layui-icon">&#xe642;</i>添加栏目</button>
                                    <button class="layui-btn-danger layui-btn layui-btn-xs"  onclick="member_del(this,<?php echo $info['tid'];?>)" href="javascript:;" ><i class="layui-icon">&#xe640;</i>删除</button>
                                  </td>
                                </tr>
								<?php
									$sql3="select * from b_typeclass where tid='$tcid'";
									$res3=mysqli_query($dateConnerction,$sql3);
									while ($info1=mysqli_fetch_assoc($res3)) {
								?>
                                <tr cate-id='<?php echo $info1['tid'];?>' fid='1' >
                                  <td>
                                    <input type="checkbox" name="" lay-skin="primary">
                                  </td>
                                  <td><?php echo $info1['tcid'];?></td>
                                  <td>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="layui-icon x-show" status='true'>&#xe623;</i>
                                   <?php echo $info1['tcname'];?>
                                  </td>
                                  <td class="td-manage">
                                    <button class="layui-btn layui-btn layui-btn-xs"  onclick="xadmin.open('编辑','cateclass_edit.php?tcid=<?php echo $info1['tcid'];?>')" ><i class="layui-icon">&#xe642;</i>编辑</button>
									<button class="layui-btn-danger layui-btn layui-btn-xs"  onclick="xadmin.open('删除','cateclass_del.php?tcid=<?php echo $info1['tcid'];?>')" href="javascript:;" ><i class="layui-icon">&#xe640;</i>删除</button>
                                  </td>
                                </tr>
								<?php
										}
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
                                       echo "<a href='?p=1'>【首页】</a>&nbsp;&nbsp;"."<a href='?p=$pre' id='prev'>【上一页】</a>&nbsp;&nbsp;";
                                    }
                                    echo "当前显示第&nbsp;".$p."&nbsp;页&nbsp;";
                                     if($p!=$pags){               
                                        echo "<a href='?p=$next' id='next'>【下一页】</a>&nbsp;&nbsp;&nbsp;&nbsp;"."<a href='?p=$pags'>【尾页】</a>&nbsp;&nbsp;";
                                   }
                                 ?> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
          layui.use(['form'], function(){
            form = layui.form;
            
          });

           /*用户-删除*/
          function member_del(obj,id){
              layer.confirm('确认要删除吗？',function(index){
                  //发异步删除数据
                  $(obj).parents("tr").remove();
                  layer.msg('已删除!',{icon:1,time:1000});
              });
          }
			/*用户-删除*/
			function member_del(obj,id){
						 layer.confirm('确认要删除吗？',function(index){
							 var oAjax=new XMLHttpRequest();
							 oAjax.open('GET',"cate_del.php?tid="+id,true);
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

   
        </script>
    </body>
</html>
