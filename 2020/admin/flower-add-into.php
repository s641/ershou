<?php 
	include_once('../inc/mysql.php');
    getconnection();
    // $id=$_GET['id'];
    // $title=$_POST['title'];
    // $content=$_POST['content'];
    // $allow_comment=$_POST['allow_comment'];
    // $pic=$_POST['pic'];
    // $flower_num=$_POST['flower_num'];
    // $username=$_SESSION["username"];
 //    $sql2="select * from admin where username='$username'";
	// $result=mysqli_query($dataconnection,$sql2);
	// $info=mysqli_fetch_row($result);
	// $aid=$info[0];
 //    $cid=$_POST["cid"];
    $name=$_POST['name'];
    $img=$_POST['file'];
    $prize=$_POST['prize'];
    $save=$_POST['save'];
    $addtime=date('Y-m-d');
    // $img=$_POST['img'];
    $sql="insert into birthday_flowers(img,name,prize,save) Values('$img','$name',$prize,'$save')";
    // die($sql);
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