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
                            <form class="layui-form layui-col-space5">
                                <div class="layui-input-inline layui-show-xs-block">
                                    <input class="layui-input" placeholder="开始日" name="start" id="start"></div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <input class="layui-input" placeholder="截止日" name="end" id="end"></div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <select name="contrller">
                                        <option>支付方式</option>
                                        <option>支付宝</option>
                                        <option>微信</option>
                                        <option>货到付款</option></select>
                                </div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <select name="contrller">
                                        <option value="">订单状态</option>
                                        <option value="0">待确认</option>
                                        <option value="1">已确认</option>
                                        <option value="2">已收货</option>
                                        <option value="3">已取消</option>
                                        <option value="4">已完成</option>
                                        <option value="5">已作废</option></select>
                                </div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <input type="text" name="username" placeholder="请输入订单号" autocomplete="off" class="layui-input"></div>
                                <div class="layui-input-inline layui-show-xs-block">
                                    <button class="layui-btn" lay-submit="" lay-filter="sreach">
                                        <i class="layui-icon">&#xe615;</i></button>
                                </div>
                            </form>
                        </div>
                        <div class="layui-card-header">
                            <button class="layui-btn layui-btn-danger" onclick="delAll()">
                                <i class="layui-icon"></i>批量删除</button>
<!--                            <button class="layui-btn" onclick="xadmin.open('添加用户','./order-add.html',800,600)">
                                <i class="layui-icon"></i>添加</button> -->
						</div>
                        <div class="layui-card-body ">
                            <table class="layui-table layui-form">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" name="" lay-skin="primary">
                                        </th>
                                        <th>订单id</th>
										<th>用户id</th>
										<th>商品id</th>
                                        <th>商品数量</th>
										<th>支付方式</th>
                                        <th>发货人id</th>
										<th>下单时间</th>
                                        <th>支付状态</th>
                                        <th>操作</th></tr>
                                </thead>
                                <tbody>
									<?php                                        //记录数据库中数据的条数
									   include_once("../func/mysql.php");
									   getConnection();
									   $sql="select * from b_order";
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
									   $sql2="select * from b_order limit $star,$num";
									   $res2=mysqli_query($dateConnerction,$sql2);
									     while ($info=mysqli_fetch_assoc($res2)) {
									 ?>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" lay-skin="primary"></td>
                                        <td><?php echo $info['oid']?></td>
                                        <td><?php echo $info['uid']?></td>
                                        <td><?php echo $info['gid']?></td>
                                        <td><?php echo $info['num']?></td>
                                        <td><?php echo $info['order_method']?></td>
                                        <td><?php echo $info['fuid']?></td>
                                        <td><?php echo $info['order_addtime']?></td>
                                        <td><?php echo $info['ostatus']?></td>
                                        <td class="td-manage">
                                            <a title="删除" onclick="member_del(this,<?php echo $info['oid']?>)" href="javascript:;">
                                                <i class="layui-icon">&#xe640;</i></a>
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
		layui.use(['laydate', 'form'],
        function() {
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
        function member_stop(obj, id) {
            layer.confirm('确认要停用吗？',
            function(index) {

                if ($(obj).attr('title') == '启用') {

                    //发异步把用户状态进行更改
                    $(obj).attr('title', '停用');
                    $(obj).find('i').html('&#xe62f;');

                    $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                    layer.msg('已停用!', {
                        icon: 5,
                        time: 1000
                    });

                } else {
                    $(obj).attr('title', '启用');
                    $(obj).find('i').html('&#xe601;');

                    $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                    layer.msg('已启用!', {
                        icon: 5,
                        time: 1000
                    });
                }

            });
        }

        /*订单-删除*/
        function member_del(obj,id){
			 layer.confirm('确认要删除吗？',function(index){
				 var oAjax=new XMLHttpRequest();
				 oAjax.open('GET',"order_del.php?id="+id,true);
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

        function delAll(argument) {

            var data = tableCheck.getData();

            layer.confirm('确认要删除吗？' + data,
            function(index) {
                //捉到所有被选中的，发异步进行删除
                layer.msg('删除成功', {
                    icon: 1
                });
                $(".layui-form-checked").not('.header').parents('tr').remove();
            });
        }</script>

</html>