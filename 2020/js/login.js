function submits() {
	var submits = $('.submits')[0];
	console.log(submits)
	bind(submits, 'click', function(ev) {
		var username = $('input')[0].value;
		var password = $('input')[1].value;
		var onoff = null;
		var arr = [];
		var arr1 = [];
		userlogin.forEach(function(data) {
			arr.push(data.name);
			arr1.push(data.password);


		})
		if (arr.indexOf(username) >= 0) {
			if (arr1[arr.indexOf(username)] == password) {
				window.sessionStorage.setItem('login', username);
				alert('登录成功');
				window.location.replace('../index.html')
			} else {
				alert('密码错误');
			}
		}
		if (arr.indexOf(username) == -1) {
			alert('账号不存在');
		}
	})



}
submits()
