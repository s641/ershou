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
//分类导航list
function listAll() {
	var data = newData.listPage;
	var subNav = $('.sub_nav')[0];
	var uls = $('.list', subNav)[0];
	var hot = $('.hot', subNav)[0];
	var right = $('.right', subNav)[0];
	var str = '';
	for (var i = 0; i < data.length; i++) {
		str += `
			<li><a href="javascript:;">${data[i].name}</a></li>
		`;
	}
	uls.innerHTML = str;
	var lists = uls.children;
	subNav.onmouseenter = function() {
		right.style.display = 'block';
	}
	subNav.onmouseleave = function() {
		right.style.display = 'none';
	}
	forEach(lists, function(obj, i) {
		lists[i].index = i;
		bind(obj, 'mouseenter', function() {
			var str1 = '';
			var adata = data[this.index].main;
			forEach(adata, function(el, i) {
				if(i<3){
					str1 += '<div class="con">' +
					'<h4>' + el.sclass + '</h4>' +
					'<ul class="con_info">';
					var a = el.info;
					for (var i = 0; i < a.length; i++) {
						if (i < 6) {
							str1 +=`<li><a href="view/commodity.html?comId=${a[i].comId}">
									<img src="img/${a[i].image}" alt="">
								</a></li>`;
						}
					}
					str1 += '</ul></div>';
				}
			})
			hot.innerHTML = str1;
		})
	})
}
listAll()
//使用swiper轮播图插件，参数1,容器,参数2对象
var mySwiper = new Swiper('.swiper-container', {
	loop: true, // 循环模式选项
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},
	effect: 'fade',
	slidesPerView: 3,
	centeredSlides: true,
	autoplay: true, //过三秒自动切换
})

//aside newinfo
function newInfo(){
	//获取数据
	var data=newData.ifmPublish;
	var oAside=$('.aside')[0];
	var oUl=$('ul',oAside)[0];
	var str='';
	var num=0;
		forEach(data,function(el,i){
				forEach(el.com,function(obj){
					//会循环完几次，插入数据时方数组前面
					if(num<7){
						num++;
						str+=`
							<li><a href="view/commodity.html?comId=${obj.comId}">${obj.name.substring(0,12)+'...'}<time class="fr">${obj.time[0]}-${obj.time[1]}-${obj.time[2]}</time></a></li>
						`;
					}else{
						return
					}
				})
		})
		oUl.innerHTML=str;
}
newInfo()

//分类展示
function classify(){
	var box=$('.classify')[0];
	var str='';
	
	var data=newData.listPage;
	forEach(data,function(el,i){
		var num=0;
		str+=`
		<div class="class_info">
			<div class="title">
				<h4>${el.name}</h4>
				<ul>`;
			forEach(el.lb,function(obj){
				str+=`
					<li><a href="#">${obj}</a></li>
				`;
			})
		str+=`			
				</ul>
			</div>
			<div class="content">
				<div class="fl">
					<img src="img/${el.src}" alt="">
				</div>
				<ul class="fr">`;
		forEach(el.main,function(k){
			forEach(k.info,function(b,i){
				if(num<4){
					num++;
					str+=`
						<li>
							<img src="img/${b.image}" alt="">
							<h5><a href="view/commodity.html?comId=${b.comId}">${b.describe.substring(0,20)+'...'}</a></h5>	
						</li>
					`;
				}
				
			 })
		})
		str+=`
				</ul>
			</div>
		</div>
		`;
	})
	box.innerHTML=str;
}
classify()

//最新公告
function bulletin(){
//获取数据
	var data=newData.news.myweb;
	var oAside=$('.bulletin')[0];
	var oUl=$('ul',oAside)[0];
	var str='';
	forEach(data,function(el,i){
		if(i<4){
			str+=`
				<li><a href="view/new_list.html?newId=${el.newId}">${el.name.substring(0,12)}<time class="fr">${el.time[0]}-${el.time[1]}-${el.time[2]}</time></a></li>
			`;
		}
	})
	oUl.innerHTML=str;	
}

bulletin()

