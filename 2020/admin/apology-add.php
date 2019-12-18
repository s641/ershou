<!DOCTYPE html>
<html>
<head>
    <title>添加花束</title>
    <meta charset="utf-8">
</head>
<body>
    <?php
        session_start();
        include_once('../inc/mysql.php');
        $sql="select * from flowers_of_apology";
        getconnection();
        $result=mysqli_query($dataconnection,$sql);
        $info=mysqli_fetch_assoc($result);
        $id=$info['id'];
    ?>
    <div>
        <form  action="apology-flower-add-into.php?>" method="post"  enctype="multipart/form-date">
            <!-- <p>ID：<input type="" name="id"></p> -->
            
            <p>名称：<input type="text" name="name"></p>
            <p>图片路径：<input type="file" name="file"></p>
            <p>价格：<input type="text" name="prize"></p>
            <p>存货数量：<input type="text" name="save"></p>
            <p>发布时间：<span>获取当前时间</span></p>
            <input type="submit" value="添加">
        </form>
    </div>
        <script type="text/javascript" src="../ueditor/ueditor.config.js"></script>
        <script type="text/javascript" src="../ueditor/ueditor.all.js"></script>
<!--         <script type="text/javascript">
            var ue = UE.getEditor('container');
        </script> -->
</body>
</html>