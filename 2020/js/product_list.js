//list列表
//分类导航list
function lists() {
	//获取数据
	//var data = oData[1].content;
	var data = newData.listPage;
	
	//获取侧边栏和展示盒子
	var con = $('.content')[0];
	var info = $('.con_info', info)[0];
	var uls = $('.list', info)[0];
	var right = $('.right', info)[0];
	var h = window.innerHeight;	//	可视区的高度
	//循环遍历出侧边栏
	forEach(data, function(el, i) {
		var da=el.main;
		var lis = document.createElement('li');
		lis.innerHTML = `
			<a href="javascript:;">${el.name}</a>
		`;
		uls.appendChild(lis);
		var divs = document.createElement('div');
		divs.className = 'product';
		forEach(da,function(obj){
			var h= document.createElement('h3');
			h.innerHTML+=obj.sclass;
			divs.appendChild(h);
			forEach(obj.info,function(k){
				divs.innerHTML +=
				`
				<div class="pro">
					<a href="commodity.html?comId=${k.comId}">
						<img src="../img/${k.image}">
					</a>
					<h4><a href="commodity.html?comId=${k.comId}">${k.name.substring(0,11)}</a></h4>
					<div>
						<a href="#" class="fl">${k.username}</a>
						<a href="#" comId="${k.comId}" class="icon fr sc"></a>
					</div>
				</div>
			`;
				
			})
			
		})
		right.appendChild(divs);			
	})
	
	var listss =uls.children;
	var divAll = document.querySelectorAll('.product');
	divAll[0].style.display = 'block';
	//给每一个li添加点击事件
	forEach(listss,function(el,i) {
		listss[i].index = i;
		bind(el,'click',function(){
			forEach(divAll, function(el) {
				el.style.display = 'none';
			})
			for (var i = 0; i < listss.length; i++) {
				listss[i].style.background = '#ffffff';
			}
			el.style.background = '#BCE8F1';
			divAll[this.index].style.display = 'block';			
		})
	})

}

lists()

//收藏
var oA=$('.sc');
forEach(oA,function(el){
	bind(el,'click',function(ev){
		ev.preventDefault();
		//获取当前点击的商品Id
		var comId=this.getAttribute('comId');
		var comSc=da.filter(function(da){
			return da.comId== comId;
		})[0];
		var arr = storage.get('comSc');	
		if (arr) {
			var onoff = arr.some(function (da) {
				return da.comId == comId;
			});
			if (onoff) {
				alert('商品已收藏');
			} else {
				arr.push(comSc);
				storage.set('comSc',arr);
			}
		} else {
			arr.push(comSc);
			storage.set('comSc',arr);
		}
		this.style.background='url(../img/收%20藏1.png) no-repeat';
		this.style.backgroundSize='contain';
	})
})



//懒加载

var imgs = $('img');
var iH = window.innerHeight;
forEach(imgs,function(el,i){
	var rc = el.getAttribute('src');
	el.setAttribute('_src',rc);
	el.setAttribute('src','null');//会报一个错误
	el.getAttribute('_src');
})
loadImg();
function loadImg(){
   forEach(imgs,function(el){
	   var Top = el.getBoundingClientRect().top;
	   if(Top<= iH){
		setTimeout(function(){
			 var c =  el.getAttribute('src')
			  if(c=='null'){
				  var s = el.getAttribute('_src');
				  el.src = s;
				  el.removeAttribute('_src');
			  }						  
		  },500)						
	   }
	   
   })
   
}

window.onscroll = function(){
   loadImg();
  
}

	
