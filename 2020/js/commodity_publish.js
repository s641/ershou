//发布和求购切换
function cut() {
	var content = $('.content')[0];
	var lis = $('li', $('ul', content)[0]);
	var forms = $('form', content);
	console.log(lis, forms)
	forEach(lis, function(el, i) {
		lis[i].index = i;
		bind(el, 'click', function() {
			forEach(lis, function(el, i) {
				el.className = '';
				forms[i].className = '';
			})
			this.className = 'btn-active';
			forms[this.index].className = 'active';
		})
	})

}
cut()
