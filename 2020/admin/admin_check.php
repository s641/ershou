<!DOCTYPE html>
<html>
<head>
    <title>用户登录跳转窗口</title>
    <meta charset="UTF-8">
    <?php
        session_start();
        include_once('../inc/mysql.php');
        $username=$_POST['username'];
        $password=sha1(md5($_POST['password']));
        $vcode=$_POST['vcode']; //客户输入的验证码
        $vcode2=$_SESSION['vcode'];//cookie中存储的验证码
        unset($_SESSION['vcode']);
        //判断验证码是否正确
        if(!isset($_POST['vcode'])){   //判断是否输入验证码
            echo "你没有输入验证码，请输入";
            header('refresh:2;url=login.php');
            die();
        }else{
            if($vcode!=$vcode2){ //判断输入的验证码和存储的是否相同
                echo "验证码错误，请重新输入";
                header('refresh:2;url=login.php');
                die();
            }else{ echo "验证码通过验证<br>";
            }  
        }

        
            if(!isset($_POST["username"])){//判断是否输入用户名
                echo "你没有输入用户名，请输入";
                header('refresh:2;url=login.php');
                die();
            }else{
                $Username=$_POST['username'];
            }
            if(!isset($_POST['password'])){ //判断是否输入密码
                echo "你没有输入密码，请输入";
                header('refresh:2;url=login.php');
                die();
            }else{
                $password=sha1(md5($_POST['password']));//密码为sha1(md5())加密
            }
            $sql="select * from admin where username='$username' and password='$password'";//查询数据表tb_admin中的username和password
            getconnection();
            $result=mysqli_query($dataconnection,$sql); 
            if(mysqli_num_rows($result)>0){
                echo "登录成功";
                header("refresh:3;url=index.php");
                echo "3秒后跳回";
            }else{
                echo "用户名和密码有错，请重新输入";
                header("refresh:3;url=login.php");
            }
            if($_POST['username']==$username && $_POST['password']=$password){
                //如果登录成功，生成对应的会话值。
                $_SESSION['logined']=1;   //判断是否已经登录的依据。
                $_SESSION['username']=$username;  //记录当前登录用户。
            }else{
                echo "登录失败，不记录SESSION值";
            }
            $_SESSION['username']=$username;
?>
</head>
<body>

</body>
</html>