var con=$('.content')[0];
//获取总数量元素
var total=$('.total_count')[0];
var arr = storage.get('info');
var settlements=$('.settlements')[0];
//渲染总数量
total.innerHTML=`<div class="total_count">全部商品<em>${arr.length}</em>件</div>	`;
//渲染数据
arr.forEach(function(data){
	var uls = document.createElement('ul');
	uls.className='cart_list_td';
	uls.innerHTML = `
		<li class="col01"><input type="checkbox" name=""></li>
		<li class="col02"><img src="../img/${data.image}"></li>
		<li class="col03">${data.name.substring(0,15)}<br><em>${data.newPrice}元</em></li>
		<li class="col04">${data.uId}</li>
		<li class="col05">${data.newPrice}元</li>
		<li class="col06">
			<div class="num_add">
				<a href="javascript:;" class="add fl">+</a>
				<input type="text" class="num_show fl" value="${data.num}">	
				<a href="javascript:;" class="minus fl">-</a>	
			</div>
		</li>
		<li class="col07">${parseFloat(data.num)*parseFloat(data.newPrice)}元</li>
		<li class="col08"><a href="javascript:;">删除</a></li>
	`;
	con.insertBefore(uls,settlements);
})
//渲染总金额
var ulss=$('.cart_list_td');
var oInput =[];
ulss.forEach(function(data,i){
	oInput.push($('input',data)[0]);
})

// //单个选，并通过判断是否全选

var qx =$('.qx',settlements)[0];
var col03=$('.col03',settlements)[0];
var def=$('.def',settlements)[0];
var Num=0;
var Pri=0;
forEach(oInput, function(el, i) {
	bind(el, 'click', function() {
		var onoff = check(oInput);
		ulss[i].style.background = '#b5edee';
		if (el.checked == false) {
			ulss[i].style.background = '#edfff9';
			col03.style.display='block';
			def.style.display='none';
		}else{
			var pre=el.parentNode.parentNode;
			var col06=$('input',pre)[1];
			var col07=$('.col07',pre)[0].innerHTML;
			Num+=parseFloat(col06.value);
			Pri+=parseFloat(col07);
			def.innerHTML=`合计(不含运费)：<span>¥</span><em>${Pri}</em><br>共计<b>${Num}</b>件商品`;
			col03.style.display='none';
			def.style.display='block';
		}
			qx.checked = onoff;
	})

})
//当全选选中后,所有input都选上
bind(qx, 'click', function() {
	if (this.checked) {
		forEach(oInput, function(el, i) {
			el.checked = true;
			ulss[i].style.background = '#b5edee';
			if (qx.checked == false) {
				tr[i].style.background =  '#edfff9';
			}
		})
		col03.style.display='none';
		def.style.display='block';
		var allNum=0;
		var allPri=0;
		forEach(arr,function(el,i){
			allNum+=el.num;
			allPri+=parseFloat(el.newPrice)*parseInt(el.num);
		})
		def.innerHTML=`合计(不含运费)：<span>¥</span><em>${allPri}</em><br>共计<b>${allNum}</b>件商品`;
	}else{
		forEach(oInput, function(el, i) {
			el.checked = false;
			ulss[i].style.background =  '#edfff9';
		})
		col03.style.display='block';
		def.style.display='none';
	}

})

//点击删除订单
var del=$('.col08');
var oA=[];
del.forEach(function(data,i){
	oA.push($('a',data)[0]);
})
forEach(oA,function(el,i){
	oA[i].index=i;
	bind(el,'click',function(){//更改数量和删除订单,需要刷新（已解决）
		var per=this.parentNode.parentNode;
		var op=$('input',per)[0];
		if(op.checked==true){
			var arr=storage.get('info');
			arr.splice(this.index, 1);
			storage.set('info',arr);
			//刷新页面，地址栏会将中文字转换为%加其他的东西（在中文加入到地址栏前，进行两次encodeURI转码）
			window.location.reload('file:///C:/Users/郑小曼/Documents/HBuilderProjects/biyesheji/lexiang/2020/view/cart.html?uId=2');
		}
	})
})

//提交订单将购物车内的商品存入localstorage;在个人订单那里显示

