<!DOCTYPE html>
<html>
<head>
    <title>花束编辑</title>
    <meta charset="utf-8">
    <?php
        session_start();
        include_once('../inc/mysql.php');
        getConnection();
        $id=$_GET['id'];
        $sql="select * from imported_flowers where id=$id";
        //返回查询结果集给$result
        $result=mysqli_query($dataconnection,$sql);
        $info=mysqli_fetch_row($result);
        $title=$info['2'];
        $save=$info['4'];
    ?>
</head>
<body>
        <div>
        <h1>修改花束</h1>        
            <form action="imported_change_update.php?id=<?php echo $id ?>" method="post"  enctype="multipart/form-date">
                <p>名称：<input style="width: 100%;" type="text" name="title" value="<?php echo $title?>"></p>
                <p>存货数量：<input style="width: 100%;" type="text" name="content" value="<?php echo $save?>"></p>
                <input type="submit" value="修改">
            </form>
            <script type="text/javascript" src="../ueditor/ueditor.config.js"></script>
        <script type="text/javascript" src="../ueditor/ueditor.all.js"></script>
            <script type="text/javascript">
            var ue = UE.getEditor('container');
            </script>
        </div>
</body>
</html>