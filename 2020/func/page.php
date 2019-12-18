<?php
	include_once("db.php");
	getConnection();
	if(isset($_GET["p"])){//列表之间的跳转
		$p=$_GET["p"];     
	}else{
		$p=1;
	}
	$url=$_SERVER['PHP_SELF'];
   $sql="select * from tb_news";
   $res=mysqli_query($dateConnerction,$sql);
   $nums=mysqli_num_rows($res);  //总新闻的条数
   $num=5;             //每一页显示的条数
   $pags=ceil($nums/$num);   //总的页数
   $pre=($p<=1)?1:$p-1;   //上一页
   $next=($p>=$pags)?$pags:$p+1;  //下一页
   $next=($next==0)?:$next;  //没有记录的时候
   $star=($p-5>0)?$p-5:0;            //首页
   $end=($star+10<$pags)?$star+10:$pags;//尾页
   $star=$end-10;
   if($star<0){
   	$star=0;
   }
   // if(empty($keyword)){
   	$nav="<a href=$url?$p=$pre>上一页</a>";
   	for($i=$star;$i<$end;$i++){
   		$j=$i+1;
   		$nav.="<a href='$url?$p=$j'>$j</a>";
   	// }
   	$nav.="<a href='$url?$p=$next'>下一页</a>";
   	$nav.="<br/>共".$nums."条记录,共".$pags."页,当前显示第".$p."页";
   // }else{
   // 	$keyword=$_GET["keyword"];
   // 	$nav="<a href=$url?keyword=$keyword,$"
   // }


?>