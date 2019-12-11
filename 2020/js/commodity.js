//商品详情
function commodity_info(){
	//获取元素
	var con=$('.content')[0];
	var goods=$('.goods_detail_con',con)[0];
	var left=$('.l_wrap',$('.main_wrap',con)[0])[0];
	var l=$('ul',left)[0];
	var right=$('.r_wrap',$('.main_wrap',con)[0])[0];
	//获取传入的商品id
	var comId=window.location.search.split('=')[1];
	var finisharr=da.filter(function(da){
		return da.comId== comId;
	})[0];//存放加入已付款的订单
	//获取对应数据
	var str='';
	var uid=null;
	var info = da.filter(function(da){
		return da.comId== comId;
	})[0];
	for(var i=0;i<da.length;i++){
		var num=null;
		if(da[i].newPrice== "私聊"){
			num=da[i].newPrice;
		}else{
			num='￥' + da[i].newPrice;
		}
		if(da[i].comId==comId){
			uid=da[i].uId;
			str+=`
				
					<div class="ragnifier-container">
						
						<div class="ragnifier-warp" style="width: 100%;height: 100%;">
							<img src="../img/${da[i].image}" alt="">
						</div>
						<div class="ragnifier-origin">
							<img src="../img/${da[i].image}" >
						</div>
					</div>
					<div class="goods_detail_list fr">
						<h3>${da[i].name}</h3>
						<p>${da[i].describe}</p>
						<div class="prize_bar">
							<span class="show_pirze"><em>${num}</em></span>
							<span class="show_unit">原价：¥${da[i].jdPrice}</span>
						</div>
						<div class="goods_num clearfix">
							<div class="num_name fl">数 量：</div>
							<div class="num_add fl">
								<input type="text" class="num_show fl" value="1">
								<a href="javascript:;" class="add fr">+</a>
								<a href="javascript:;" class="minus fr">-</a>	
							</div> 
						</div>
						<p>用户：${da[i].username}&nbsp;&nbsp;&nbsp;&nbsp;<a href="user_info.html?uId=${da[i].uId}">点我了解具体详情</a></p>
						<div class="operate_btn">
							<a href="order.html?comId=${da[i].comId}" class="buy_btn">立即购买</a>
							<a href="javascript:;" class="add_cart" id="add_cart">加入购物车</a>
							<a href="cart.html?uId=${da[i].uId}" class="cart" id="cart"></a>
						</div>
					</div>
			
			`;
		}
	}
	goods.innerHTML=str;

	//数量增减
	var show=$('.num_show')[0];
	var add=$('.add')[0];
	var minus=$('.minus')[0];
	var val='';
	//事件需要触发才执行
	bind(add,'click',function(){
		show.value++;
		val=show.value;
	})
	bind(minus,'click',function(){
		if(val == 1){
			alert('数量不能减了哦');
			return;
		}else{
			show.value--;
			val=show.value;
		}
	})

	//新品推荐
	var str1='';
	var num=0;
	for(var i=0;i<da.length;i++){
		if(da[i].uId==uid){//有bug
			if(num<2){
			num++;
			str1+=`
				<li>
					<a href="commodity.html?comId=${da[i].comId}"><img src="../img/${da[i].image}"></a>
					<h4><a href="commodity.html?comId=${da[i].comId}">${da[i].name}</a></h4>
					<div class="prize">￥${da[i].newPrice}</div>
				</li>
			`;
		}
		}
	}
	l.innerHTML=str1;
	
	
	//渲染商品描述
	var tabCom=$('.tab_content',right)[0];
	var ps=$('p',tabCom)[0];
	var str2='';
	for(var i=0;i<da.length;i++){
		if(da[i].comId==comId){
			str2+=`
				${da[i].describe}
			
			`;
		}
	}
	ps.innerHTML=str2;
	
	
	var buy=$('.buy_btn')[0];
	bind(buy,'click',function(ev){
		var arr = storage.get('finisharr');
		var num = parseInt(show.value);		
		if (arr) {
			var onoff = arr.some(function (da) {
				return da.comId == comId;
			});
			if (onoff) {
				arr.forEach(function(da){
					if (da.comId == comId) {
						da.num += num;
					}
				});
				storage.set('finisharr',arr);
			} else {
				info.num = num;
				arr.push(finisharr);
				storage.set('finisharr',arr);
			}
		} else {
			info.num = num;
			arr.push(finisharr);
			storage.set('finisharr',arr);
		}
		//window.localStorage.setItem('finisharr',finisharr);
		//open('order.html?comId='+comId,'_blank');
	})
	
	//加入购物车
	//给加入购物车添加事件
	var addCart=$('.add_cart',goods)[0];
	bind(addCart, 'click', function () {
		var arr = storage.get('info');
		var num = parseInt(show.value);		
		if (arr) {
			var onoff = arr.some(function (da) {
				return da.comId == comId;
			});
			if (onoff) {
				arr.forEach(function(da){
					if (da.comId == comId) {
						da.num += num;
					}
				});
				storage.set('info',arr);
			} else {
				info.num = num;
				arr.push(info);
				storage.set('info',arr);
			}
		} else {
			info.num = num;
			arr.push(info);
			storage.set('info',arr);
		}
	})
}
commodity_info()

//评论和商品详情跳转
function comments(){
	var comCon=$('input',$('.com_info')[0])[0];
	var comBtn=$('button',$('.com_info')[0])[0];
	var comContent=$('.com_content')[0];
	bind(comBtn,'click',function(){
		var val=comCon.value;
		if(val.trim()){
			var con=document.createElement('div');
			con.className='combox';
			con.innerHTML=`
				<div class="pl-text">
					<a href="#" class="pl-name">张三 : </a>
					<span class="pl-con">&nbsp;${val.trim()}</span>
				</div>
				<div class="date-dz">
					<span class="fl comment-time">2017-5-2 11:11:39</span>
					<div class="fr">
						<a href="javascript:;" class="removeBlock">删除</a>
						<a href="javascript:;" class="date-dz-pl">回复</a>
						<span class="date-dz-line">|</span>
						<a href="javascript:;" class="date-dz-z">赞 (<i class="z-num">666</i>)</a>
					</div>
					<div class="hf_con"></div>
				</div>
			`;
			comContent.appendChild(con);
			comCon.value='';
		}else{
			alert('请输入评论');
		}
		
	})
}
comments()



//发布和求购切换
function info_cut(){
	var content=$('.main_wrap',$('.content')[0])[0];
	var box=$('.r_wrap',content)[0];
	var lis=$('li',box);
	var ul=$('ul',box)[0];
	var div=nextAll(ul);
	forEach(lis,function(el,i){
		lis[i].index=i;
		bind(el,'click',function(){
			forEach(lis,function(el,i){
				el.className='';
				div[i].className='';
			})
			this.className='active';
			div[0].className='tab_content';
			div[1].className='comment';
			addClassName(div[this.index],'active');
		})
	})
	
}
info_cut()


//放大镜
ragnifier('.ragnifier-container');