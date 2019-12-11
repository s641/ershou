
//top,nav切换
function top_switch() {
	var data=newData.classname;
	var head=$('.header')[0];
	var top=$('.top',head)[0];
	var fr=$('.fr',top)[0];
	data.forEach(function(el,i){
		var lis=document.createElement('li');
		if(i!=0){
			lis.innerHTML=`<a href="view/${el.link}">${el.name}</a>`;
		}else{
			lis.innerHTML=`<a href="${el.link}">${el.name}</a>`;
			//lis.className='active';
		}
		fr.appendChild(lis);
	})
	var list =fr.children;
	forEach(list, function(el, i) {
		bind(el, 'mouseenter', function() {
			forEach(list, function(el) {
				el.className = '';
			})
			el.className = 'active';
		})
	})

	//判断是否登录
	var sess=window.sessionStorage.getItem('login');
	if(sess){
		var log=$('li',fr)[4];
		var a=log.children;
		a[0].innerHTML=sess;
	}else{
		var log=$('li',fr)[4];
		var a=log.children;
		a[0].innerHTML='登录';
	}
}
top_switch()


//nav_cut
function nav_cut() {
	var btn = getSelect('.nav_menu .fl li');
	var divs = getSelect('.nav_cut .con>div');
	for (var i = 0; i < btn.length; i++) {
		//自定义一个属性存放变量
		btn[i].index = i;
		btn[i].onmouseenter = function() {
			//鼠标移入先清除btn原有的样式class
			for (var i = 0; i < btn.length; i++) {
				btn[i].className = '';
			}
			//鼠标移入给btn设置新的class
			this.className = 'btn_active';
			//鼠标移入先清除divs原有的样式class
			for (var i = 0; i < divs.length; i++) {
				divs[i].className = '';
			}
			divs[this.index].className = 'active';
		}

	}
}
nav_cut()

//商品搜索
function searchAll(){
	var data=da;
	//获取输入框信息
	var oSeach=$('.seach')[0];
	var oInput=$('input',oSeach);
	var seachCon=$('.seach_con',oSeach)[0];
	var def=$('.defult',seachCon)[0];
	var news=$('.new',seachCon)[0];
	var val=null;
	var arr=[];
	bind(oInput[1],'click',function(){
		seachCon.style.display='block';
		search();
	})
	function search(){
		news.innerHTML='';
		val=oInput[0].value;
		
		if(!(val.trim())){
			alert('请输入你要查找的商品哦');
			return
		}else{
			var zz=new RegExp(val);
			forEach(data,function(el,i){
				var a=el.name.match(zz);
				if(a != null && el.name == a.input){
					arr.push(el);
				}
			})	
			def.style.display='none';
			var str='';
			forEach(arr,function(el,i){
				//if(i<6){
					str+=`<li><a href="view/commodity.html?comId=${el.comId}">${el.name}</a></li>`;
				// }
				// if(i>6){
				// 	str+='...';
				// }
				
			})
			news.innerHTML=str;
			news.style.display='block';		
		}
	}
	oInput[0].oninput=function(){
		arr=[];
		def.style.display='block';
		val=oInput[0].value;
	}
	
	oInput[0].onblur=function(){
		seachCon.style.display='none';
	}
}
searchAll()


