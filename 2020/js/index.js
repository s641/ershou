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
	var subNav = $('.sub_nav')[0];
	var right = $('.right', subNav)[0];
	subNav.onmouseenter = function() {
		right.style.display = 'block';
	}
	subNav.onmouseleave = function() {
		right.style.display = 'none';
	}
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
