<?php 
	include_once('../inc/mysql.php');
    getconnection();

    $name=$_POST['name'];
    $img=$_POST['file'];
    $prize=$_POST['prize'];
    $save=$_POST['save'];
    $addtime=date('Y-m-d');
    $sql="insert into love_flowers(img,name,prize,save) Values('$img','$name',$prize,'$save')";
    mysqli_query($dataconnection,$sql); 
            if(mysqli_affected_rows($dataconnection)>0){
                echo "添加成功！";
                header("refresh:3;url=index.php");
                echo "3秒后跳回";
               
            }else{
                echo "添加失败！";
                header("refresh:3;url=comment.php");//待修改
            }




 ?>