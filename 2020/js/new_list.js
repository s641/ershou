//乱序，渲染轮播图
function swiper() {
	var con = $('.swiper-wrapper')[0];
	//随机获取四个数据
	var data = [];
	//bug,会产生相同数字
	var num = [Math.round(Math.random() * 17), Math.round(Math.random() * 17), Math.round(Math.random() * 17), Math.round(
		Math.random() * 17)];

	forEach(num, function(el, i) {
		data[i] = img[el]
	})
	forEach(data, function(el) {
		var div = document.createElement('div');
		div.className = 'swiper-slide';
		div.innerHTML = `<img src="../img/${el}" alt="">`;
		con.appendChild(div);
	})
}
swiper()


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


//渲染头条新闻
function news() {
	var left = $('.new_con', $('.con_left')[0])[0];

	var data = newData.news.myweb;
	forEach(data, function(el, i) {
		var lis = document.createElement('li');
		lis.innerHTML =
			`
			<a href="new_list.html?newId=${el.newId}">【标题】${el.name}</a>
			<div class="new_info">
				<img src="../img/${el.image}" >
				<div class="fr">
					<p>${el.describe}</p>
					<p><span></span>${el.lcnum}</p>
				</div>
			</div>
		`;
		left.appendChild(lis);
	})
}
news()

//渲染头条新闻
function allNews() {
	var right = $('.list', $('.con_right')[0])[0];

	var data = newData.news.schoolnew;
	forEach(data, function(el, i) {
		if (i < 10) {
			var lis = document.createElement('li');
			lis.innerHTML =
				`
				<p><span></span><time>${el.time[0]}-${el.time[1]}-${el.time[2]}</time><span></span>${el.lcnum}</p>
				<a href="new_list.html?newId=${el.newId}">${el.name}</a>
			`;
			right.appendChild(lis);
		}

	})
}
allNews()

//newContent
function newContent() {

}
newContent()


//渲染新闻
function detail() {
	var search = window.location.search;
	var newContent = $('.newContent')[0];
	if (search) {
		search = search.split('=')[1];
		var arr = [];
		forEach(newData.news.myweb, function(el) {
			arr.push(el)
		})
		forEach(newData.news.schoolnew, function(el) {
			arr.push(el)
		})
		forEach(arr, function(el) {
			if (el.newId == search) {
				newContent.innerHTML = `
				<h3>${el.name}</h3>
				<hr/>
				<p>${el.describe}</p>
				`;
			}
		})
	} else {
		newContent.innerHTML =
			`
			<h3>做自己快乐的主人</h3>
			<hr/>
			<p>人生最高的境界，是要拥有一种淡泊宁静的心态。最大的人格魅力，是有一颗阳光般心。得失无忧，去留无意，荣辱不惊，从容淡定，随缘不变，随遇而安，心无杂念，不染尘埃。宽以待人，与人为善，严以律己，助人为乐，懂得感恩，懂得包容，简单做人，洒脱自在，善待他人，快乐自己。</p>
			<p>不老的是江山，易逝的是红颜，淡看浮云散，潇洒天地间。人的一生，很短又很长，短的是快乐，长的是烦恼；短的是人生，长的是痛苦。有些事是命中注定的，有些事是无法掌控的，有些事是不合情理的，有些事是不尽人意的。但无论发生了什么，都要淡然的去面对，坚持自己的原则，无愧于自己的良心，清清白白的做事，坦坦荡荡的做人。</p>
		`;
	}
}
detail()
