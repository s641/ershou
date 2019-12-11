//page页面切换效果
function page_cut() {
	var btns = getSelect('.page button');
	forEach(btns, function(el) {
		el.onmouseenter = function() {
			forEach(btns, function(obj) {
				obj.style.background = '#e5e5e5';
				obj.style.color = '#9e9e9e';
			})
			this.style.background = '#BCE8F1';
			this.style.color = 'white';
		}
	})
}
page_cut()
//渲染信息发布部分产品展示
function publish() {
	var navCut = $('.nav_cut')[0];
	var navMenu = $('.nav_menu', navCut)[0];
	var ul = $('ul', navMenu)[0];
	var pages=$('.page',navCut)[0];
	
	var search = window.location.search;
	var hash = window.location.hash;
	if (!search) {
		window.location.search = 'ifmId=a1';
	} else {
		search = search.split('=')[1];
	}
	
	if (!hash) {
		window.location.hash = 'page=1';
		hash = 1;
	} else {
		hash = hash.split('=')[1];
	}
	
	var data =newData.ifmPublish;
	
	//渲染标题
	
	forEach(data, function(el) {
		var li = document.createElement('li');
		li.innerHTML = `<a href="information_publish.html?ifmId=${el.ifmId}">${el.name}</a>`;
		//判断,如果=search值则添加样式
		if (el.ifmId == search) {
			li.className = 'btn_active';
		}
		ul.appendChild(li);
	})

	//获取内容
	
	var con = $('.con', navCut)[0];
	var divs = con.children;
	var ad =null;
	
	//渲染内容
	window.onhashchange=function () {
		pages.innerHTML='';
		hash=window.location.hash.split('=')[1];
		
		search =window.location.search.split('=')[1];
		
		listAll(search,hash)
	}
	listAll(search,hash)
	function listAll(search,page) {

		var div=null;
		if(search=='a1'){
			ad=data[0].com;
			div=divs[0];
		}else if(search=='a2'){
			ad=data[1].com;
			div=divs[1];
		}else if(search=='a3'){
			ad=data[2].com;
			div=divs[2];
		}
		//获取总页数
		var len = Math.ceil(ad.length / 10);
		var str = '';
		
		for(var i = 0; i < len; i++) {
			var buttons= document.createElement('button');
			buttons.innerHTML = `<a href="information_publish.html?ifmId=${search}#page=${i+1}">${i+1}</a>`;
			pages.appendChild(buttons);
			var oA=buttons.children[0];
			//默认第一个选择
			if (oA.innerHTML == hash ) {
				buttons.className = 'active';
			}
		}
		forEach(ad, function(el,i){
			var num=null;
			if(el.newPrice == "私聊"){
				num=el.newPrice;
			}else{
				num='￥' + el.newPrice;
			}
			//每页显示三个
			if (i >= (10 * (page - 1)) && i <= (10 * (page - 1) + 9)) {
				str +=
					`
						<div class="con_info">
							<div class="img">
								<a href="#"><img src="../img/${el.image}" alt=""></a>
							</div>
							<h4><a href="commodity.html?comId=${el.comId}">${el.name.substring(0,13)}</a></h4>
							<p>
								<span class="fl">${num}</span>
								<a href="#" class="icon fr"></a>
							</p>
						</div>
					`;
			}
		})
		div.innerHTML = str;
	}
}
publish()