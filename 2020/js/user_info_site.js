function address(){
	var addr=window.location.search.split('=');
	var search=parseInt(addr[1]);
	//当无用户登陆时，默认为用户二的信息，可以改为默认用户模板
	if(addr[0]== ""){
		search=2;
	}
	var comId=addr[2];
	var rightCon=$('.right_content')[0];
	var siteCon=$('.site_con',rightCon);
	var data=people.student;
	var str='';
	var uData=null;
	var nData=null;
	var imgSrc=null;
	var scnum=null;
	var dznum=null;
	var scartnum=null;//购物车数量
	var pwd=null;
	forEach(data,function(el){
		if(el.uid == search){
			uData=el;
			imgSrc=el.imgScr;
			scnum=el.scnum;
			dznum=el.dznum;
			scartnum=el.scartnum;
			pwd=el.password;
			str=`
				<dl>
					<dt>当前地址：</dt>
					<dd>${el.address}&nbsp;&nbsp;&nbsp;联系方式：${el.phone}</dd>
				</dl>
			`;
		}
	})
	siteCon[0].innerHTML=str;
	
	//编辑地址
	var update=siteCon[1];
	var inpone=$('.inpone',update)[0];
	var siteArea=$('.site_area',update)[0];
	var inptwo=$('.inptwo',update)[0];
	var inpthree=$('.inpthree',update)[0];
	var infoSubmit=$('.info_submit',update)[0];
	bind(infoSubmit,'click',function(ev){
		ev.preventDefault();
		var oneval=null;
		var siteAreaval=null;
		var inptwoval=null;
		var inpthreeval=null;
		var emailReg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;//邮箱
		var telReg= /^1((3[0-9])|(4[5-9])|(5([0-3]|[5-9]))|(60)|(7[0-8])|(8[0-9])|(9[8-9]))\d{8}$/;//电话号码
		if(inpone.value.trim() != null){
			oneval=inpone.value.trim();
		}
		if(siteArea.value.trim() != null){
			siteAreaval=siteArea.value.trim();
		}
		if(inptwo.value.trim() != null  && emailReg.test(inptwo.value.trim()) == true){
			inptwoval=inptwo.value.trim();
		}else{
			alert('未输入邮箱或邮箱输入错误');
			return
		}
		if(inpthree.value.trim() != null && telReg.test(inpthree.value.trim()) == true){
			inpthreeval=inpthree.value.trim();
		}else{
			alert('未输入电话号码或电话号码输入错误');
			return
		}
		nData={
			address:siteAreaval,
			uid: search
		}
		alert("修改成功")
		open('order.html?comId='+comId+'&data='+JSON.stringify(nData));
	})
	
}
address();