function address(){	
	//编辑地址
	var inpone=$('.inpone')[0];
	var siteArea=$('.site_area')[0];
	var inptwo=$('.inptwo')[0];
	var inpthree=$('.inpthree')[0];
	var infoSubmit=$('.info_submit')[0];
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
		alert("修改成功")
	})
	
}
address();