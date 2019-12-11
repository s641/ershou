//list列表
//分类导航list
function lists() {
	//获取侧边栏和展示盒子
	var con = $('.content')[0];

	var uls = $('.list', $('.info')[0])[0];
	var listss = uls.children;
	var divAll = document.querySelectorAll('.product');
	divAll[0].style.display = 'block';
	//给每一个li添加点击事件
	forEach(listss, function(el, i) {
		listss[i].index = i;
		bind(el, 'click', function() {
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
var oA = $('.sc');
forEach(oA, function(el) {
	bind(el, 'click', function(ev) {
		ev.preventDefault();
		this.style.background = 'url(../img/收%20藏1.png) no-repeat';
		this.style.backgroundSize = 'contain';
	})
})



//懒加载

var imgs = $('img');
var iH = window.innerHeight;
forEach(imgs, function(el, i) {
	var rc = el.getAttribute('src');
	el.setAttribute('_src', rc);
	el.setAttribute('src', 'null'); //会报一个错误
	el.getAttribute('_src');
})
loadImg();

function loadImg() {
	forEach(imgs, function(el) {
		var Top = el.getBoundingClientRect().top;
		if (Top <= iH) {
			setTimeout(function() {
				var c = el.getAttribute('src')
				if (c == 'null') {
					var s = el.getAttribute('_src');
					el.src = s;
					el.removeAttribute('_src');
				}
			}, 500)
		}

	})

}

window.onscroll = function() {
	loadImg();

}
