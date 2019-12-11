//top,nav切换
function top_switch() {
	var head = $('.header')[0];
	var top = $('.top', head)[0];
	var fr = $('.fr', top)[0];
	var list = fr.children;
	forEach(list, function(el, i) {
		bind(el, 'mouseenter', function() {
			forEach(list, function(el) {
				el.className = '';
			})
			el.className = 'active';
		})
	})
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
function searchAll() {
	//获取输入框信息
	var oSeach = $('.seach')[0];
	var oInput = $('input', oSeach);
	var seachCon = $('.seach_con', oSeach)[0];
	bind(oInput[1], 'click', function() {
		seachCon.style.display = 'block';
	})
	oInput[0].onblur = function() {
		seachCon.style.display = 'none';
	}
}
searchAll()
