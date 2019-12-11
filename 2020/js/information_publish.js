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
