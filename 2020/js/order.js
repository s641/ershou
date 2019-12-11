function orders(){
	var addr=window.location.search;
	var search=null;
	var newaddr=null;
	if(addr.indexOf('&',1) != -1){
		addr=window.location.search.split('&');
		search=addr[0].split('=')[1];
		newaddr=addr[1].split('=')[1];
		//获取地址栏参数的方法
		var reg=/%\d\d/g;
		newaddr=newaddr.replace(reg,'"');//中文地址不行
		console.log(newaddr)
	}else{
		search=window.location.search.split('=')[1];
	}
	newaddr=JSON.parse(newaddr);
	
	
	var da=window.localStorage.getItem('finisharr');
	da=JSON.parse(da);
	var con=$('.common_list_con');
	//对应用户
	var data=people.student;
	var uid=null;
	forEach(da,function(el){
		if(el.comId == search){
			uid=el.uId;
			var uls=document.createElement('ul');
			uls.className='goods_list_td clearfix';
			uls.innerHTML=`
					<li class="col01">${el.comId}</li>
					<li class="col02"><img src="../img/${el.image}"></li>
					<li class="col03">${el.name.substring(0,15)}</li>
					<li class="col04">${el.jdPrice}</li>
					<li class="col05">${parseInt(el.newPrice).toFixed(1)}元</li>
					<li class="col06">${el.num}</li>
					<li class="col07">${el.newPrice}元</li>
			`;
			con[2].appendChild(uls);
			
			var div=document.createElement('div');
			div.className='settle_con';
			div.innerHTML='<div class="total_goods_count">共<em>'+el.num+'</em>件商品，总金额<b>'+parseFloat(el.num)*parseFloat(el.newPrice)+'</b></div>'+
				'<div class="total_pay">实付款：<b>'+parseFloat(el.num)*parseFloat(el.newPrice)+'元</b></div>';
			con[3].appendChild(div);
		}
	})
	if(newaddr != null){
		forEach(data,function(el){
			if(el.uid == uid){
				str=`
					<dl>
						<dt>寄送到：</dt>
						<dd><input type="radio" name="" checked="">${newaddr.address}</dd>
					</dl>
					<a href="user_info_site.html?uid=${el.uid}&comId=${search}" class="edit_site">编辑收货地址</a>
				`;
			}
		})
	}else{
		forEach(data,function(el){
		
			if(el.uid == uid){
				str=`
					<dl>
						<dt>寄送到：</dt>
						<dd><input type="radio" name="" checked="">${el.address}</dd>
					</dl>
					<a href="user_info_site.html?uid=${el.uid}&comId=${search}" class="edit_site">编辑收货地址</a>
				`;
			}
		})
	}
	con[0].innerHTML=str;
	//提交
	
	var clicks=$('.order_submit')[0];
	bind(clicks,'click',function(){
		alert('提交成功');
		open('user_info_order.html?comId='+search+'&uid='+uid)
	})
}
orders()