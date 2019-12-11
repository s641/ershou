/*
	目录
		数组求和                    sum(对象)
		获取元素                    getSelect(元素名, 父级)
		获取元素(IE兼容性)          $(元素名, 父极对象)
		添加事件的函数              bind(元素, 不加on的实践, 函数)
		循环数组获取数据            forEach(对象,函数)
		兼容浏览器 获取样式的函数    getCSS(元素, 元素的样式)
		添加class样式的函数         addClassName(元素, className)
		删除class样式的函数         removeClass(元素, className)
		封装一个倒计时的函数        timeOut(obj) obj:形参集合
		封装一个运动的函数          move(元素, 变化的样式, 目标位置,执行时间, 变化方式（匀速这种）,函数, 执行后的返回函数)
		让元素的多个样式同时变化     moreAttr(obj)
		封装某一个标签的上一个兄弟元素                    prev(el)
		封装某一个标签的下一个兄弟元素                    oNext(el)
		封装某一个标签的所有上一个兄弟元素                prevAll(el)
		封装某一个标签的所有下一个兄弟元素                nextAll(el)
		封装某一个标签的,除了他自己以外的所有兄弟元素      siBlings(el,str)
*/





/*
	作用：数组求和，
	参数 ：数组
	返回值 ： 求和的数字
*/
function sum(obj) {
	var num = 0;
	for (var i = 0; i < obj.length; i++) {
		num += obj[i];
	}
	return num;
}

/*
	作用 ： 获取元素
	参数 ：
		参数一： 字符串，是一个css选择器
		参数二：可选，是一个确定的元素
	
	返回值 ： 获取的元素
*/
function getSelect(name, parent) {
	parent = parent || document;
	//querySelectorAll里面可以标签，id,class名等，ie不支持
	var obj = parent.querySelectorAll(name);

	return obj;
}
/*
	IE兼容性
	获取元素
	$('.box/li/#box')
	
	name : 是一个字符串，选择器的字符串
			
	obj : 是一个元素，父级元素
*/
function $(name, obj) {

	// 首位字符
	var first = name.charAt(0);
	obj = obj || document;
	if (first == '#') {
		var id = name.split('#')[1];
		return obj.getElementById(id);
	} else if (first == '.') {

		// 找到所有的元素
		var all = obj.getElementsByTagName('*');
		var str = name.split('.')[1];
		var num = [];

		for (var i = 0; i < all.length; i++) {
			if (all[i].className) { // 排除没有class的元素
				// 说明有class
				// 确定元素是否要找的	
				var arr = all[i].className.split(' ');
				for (var k = 0; k < arr.length; k++) {
					if (arr[k] == str) {
						num.push(all[i]);
					}
				}
			}
		}
		return num;

	} else {

		// 通过标签名找元素					
		return obj.getElementsByTagName(name);
	}

}
/*
    封装一个写事件的函数 
	作用 ：给元素添加事件
	参数 ：
		参数一 ：添加事件的元素，元素
		参数二 ：不带on的事件 ， 字符串
		参数三 ：触发事件时，执行的代码，函数
	
 */
function bind(obj, event, fn) {
	obj['on' + event] = fn;
}


/*
 
    封装一个for循环,循环数组
	作用：通过for循环操作数组里面的每一个数据
	参数 ：
		参数一 ： 数组
		参数二 ： 函数，操作代码的函数function(el,i){}
 
		
 */
function forEach(obj, fn) {
	for (var i = 0; i < obj.length; i++) {
		fn(obj[i], i);
	}
}

/*
	封装一个兼容获取样式的函数
	作用 ： 获取元素的样式
	参数 ：
		参数一 ：元素
		参数二 ：元素的样式
	返回结果 ： 样式的值
	
 */
function getCSS(obj, attr) {

	if (obj.currentStyle) {
		// ie
		return obj.currentStyle[attr]
	} else {
		// 谷歌
		return getComputedStyle(obj)[attr];
	}
}
/*
	作用 ： 	封装一个添加class样式的函数
	参数 ：
		参数一 obj：元素
		参数二 className：添加class的样式
	返回结果 ： 样式的值
 */
function addClassName(obj, className) {
	var str = obj.className;
	if (str) {
		//如果str存在，则在添加的时候不覆盖；同时判断现在添加的class是否存在，不存在才执行
		// if(str.indexOf(className)==-1){
		// 	obj.className=obj.className+' '+className;
		// }
		//Ie不支持indexOf,所以改为下列代码
		var arr = str.split(' ');
		var onoff = false;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == className) {
				onoff = true;
			}
		}
		if (!onoff) {
			obj.className = obj.className + ' ' + className;
		}
	} else {
		obj.className = className;
	}
}
/*
	作用 ： 	封装一个删除class样式的函数
	参数 ：
		参数一 obj：元素
		参数二 className：删除class的样式
	返回结果 ： 样式的值
 */
function removeClass(obj, className) {
	//判断元素是否存在class样式
	if (obj.className) {
		//存在执行，将元素样式拆分成数组
		var arr = obj.className.split(' ');
		//判断插入的class样式是否存在
		// if(arr.indexOf(className) != -1){
		// 	//存在，执行删除
		// 	arr.splice(arr.indexOf(className),1);
		// 	//重新组合,给元素赋值
		// 	obj.className=arr.join(' ');
		// }
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == className) {
				arr.splice(i, 1);
			}
		}
		obj.className = arr.join(' ');
	}
}

/*
	作用：封装一个倒计时的函数timeOut(obj)
	参数对象：
	obj:
		future:未来的时间戳,
		success:成功后function(date){
			返回获取的时间差
		}
*/
function timeOut(obj) {
	//获取当前时间戳
	var date = new Date().getTime();
	// 两个时间戳的差值
	var timeDifference = parseInt((obj.future - date) / 1000);
	//换算天数
	var day = parseInt(timeDifference / (60 * 60 * 24));
	if (day < 10) {
		day = '0' + day;
	}
	//整小时			
	var h = parseInt((timeDifference - day * (60 * 60 * 24)) / 3600);
	if (h < 10) {
		h = '0' + h;
	}
	//整分钟
	var min = parseInt((timeDifference - day * (60 * 60 * 24) - h * 3600) / 60);
	if (min < 10) {
		min = '0' + min;
	}
	// 剩下的秒钟数
	var s = timeDifference - day * 3600 * 24 - h * 3600 - min * 60;
	if (s < 10) {
		s = '0' + s;
	}
	var times = day + '-' + h + '-' + min + '-' + s;
	//执行函数传参，与运算，如果前面为true,就执行后面的程序，为false不执行
	//也可用if判断，如果是函数，则执行函数，同时传参
	typeof obj.success == 'function' && obj.success({
		day: day,
		hours: h,
		min: min,
		s: s,
	});
}

/*
	封装一个运动的函数 move(el, attr, target, time, type, fn, callback)
	作用 ：元素移动起来有动画效果
	参数 ：
		el : 运动的元素
		attr : 哪一个样式有动画效果
		target : 目标位置
		time : 运动时间
		type : 运动的方式
		fn   : 是一个函数，在定时器里面，调用
		callback   : 是一个函数，在关闭定时器时，调用函数,回调函数
		
*/
var Tween = {
	linear: function(t, b, c, d) {
		return c * t / d + b;
	},
	easeIn: function(t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOut: function(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeBoth: function(t, b, c, d) {
		if ((t /= d / 2) < 1) {
			return c / 2 * t * t + b;
		}
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutStrong: function(t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d) {
		if ((t /= d / 2) < 1) {
			return c / 2 * t * t * t * t + b;
		}
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d) == 1) {
			return b + c;
		}
		if (!p) {
			p = d * 0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	elasticOut: function(t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d) == 1) {
			return b + c;
		}
		if (!p) {
			p = d * 0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	elasticBoth: function(t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d / 2) == 2) {
			return b + c;
		}
		if (!p) {
			p = d * (0.3 * 1.5);
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
				Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
		return a * Math.pow(2, -10 * (t -= 1)) *
			Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	},
	backIn: function(t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	backOut: function(t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 3.70158; //回缩的距离
		}
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	backBoth: function(t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		if ((t /= d / 2) < 1) {
			return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		}
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d) {
		return c - Tween['bounceOut'](d - t, 0, c, d) + b;
	},
	bounceOut: function(t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
		}
		return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
	},
	bounceBoth: function(t, b, c, d) {
		if (t < d / 2) {
			return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	}
};

function move(el, attr, target, time, type, fn, callback) {
	var t = 0;
	var b = parseFloat(getCSS(el, attr)); // 初始值
	var c = target - parseFloat(getCSS(el, attr)); // 当前值与目标值之间的插值
	var d = time / 20; // 定时器的次数
	var timer = null;

	timer = setInterval(function() {
		t++;
		var reslut = Tween[type](t, b, c, d);

		if (attr == 'opacity') {

			el.style[attr] = reslut;
		} else {
			el.style[attr] = reslut + 'px';
		}

		if (typeof fn == 'function') {
			fn()
		}

		if (t >= d) {
			// 关闭定时器
			clearInterval(timer);

			if (typeof callback == 'function') {
				callback()
			}

		}
	}, 20);
}


/*
	作用 ： 让元素的多个样式同时变化moreAttr(obj)
	
	参数 ：
		对象：
			obj: 元素
*/

function moreAttr(obj) {

	//obj.el
	var t = 0; //定时器加加的变量
	var b = {}; // 元素多个样式的初始值
	var c = {}; // 元素多个样式的差值
	var d = obj.time / 20;
	var timer = null;

	for (var attr in obj.attrs) {
		//console.log(attr,getCSS(obj.el,attr))
		b[attr] = parseFloat(getCSS(obj.el, attr));
		c[attr] = obj.attrs[attr] - parseFloat(getCSS(obj.el, attr));
	}
	// console.log(obj.attrs,b,c)
	timer = setInterval(function() {
		t++;
		for (var k in b) {
			var reslut = Tween[obj.type](t, b[k], c[k], d);
			if (k == 'opacity') {
				obj.el.style[k] = reslut;
			} else {
				obj.el.style[k] = reslut + 'px';
			}
		}

		if (t >= d) {
			clearInterval(timer);
		}
	}, 20)


}
/*
	封装某一个标签的上一个兄弟元素 prev(el)
	参数：el,某一个标签
	返回：选中的元素
*/
function prev(el) {
	//判断输入的标签是否是元素
	if (el.nodeType != 1) {
		alert('请输入正确的标签');
	}
	return el.previousElementSibling;
}
/*
	封装某一个标签的下一个兄弟元素oNext(el)
	参数：el,某一个标签
*/
function oNext(el) {
	//判断输入的标签是否是元素
	if (el.nodeType != 1) {
		alert('请输入正确的标签');
	}
	return el.nextElementSibling;
}

/*
	封装某一个标签的所有上一个兄弟元素prevAll(el)
	参数：el,某一个标签
	返回：数组
*/
function prevAll(el) {
	//判断输入的标签是否是元素
	if (el.nodeType != 1) {
		alert('请输入正确的标签');
	}
	//定义一个数组，存放所有兄弟标签
	var arr = [];

	/*
		获取元素的上一个元素
			var pr=el.previousElementSibling;
		判断上一个元素是否存在，不存在则返回，存在则进行存储当前获取到的上一个兄弟元素，继续上上个元素的查找
			if( pr!= null){
				arr.push(pr);
			}
		因为不知道到底有多少上一个元素，所以封装函数通过递归来反复判断
	*/
	function fn(el) {
		var pr = el.previousElementSibling;
		if (pr != null) {
			arr.push(pr);
			fn(pr);
		}
	}
	//第一次调用函数，开启递归
	fn(el)
	//返回数组
	return arr;
}
/*
	封装某一个标签的所有下一个兄弟元素nextAll(el)
	参数：el,某一个标签
	返回：数组
*/
function nextAll(el) {
	//判断输入的标签是否是元素
	if (el.nodeType != 1) {
		alert('请输入正确的标签');
	}
	//定义一个数组，存放所有下一个兄弟标签
	var arr = [];

	function fn(el) {
		var next = el.nextElementSibling;
		if (next != null) {
			arr.push(next);
			fn(next);
		}
	}
	//第一次调用函数，开启递归
	fn(el)
	//返回数组
	return arr;
}


/*
	封装某一个标签的,除了他自己以外的所有兄弟元素siBlings(el,str)
	参数：el,某一个标签
		 str(元素,classname等): 字符串，标签名或者class名(通过第二个参数判断是否对获取到的元素进行筛选)
		不传id,进行判断，是因为id的唯一性，不用筛选
	返回：数组
*/
function siBlings(el, str) {
	//判断输入的标签是否是元素
	if (el.nodeType != 1) {
		alert('请输入正确的标签');
	}
	//定义一个数组，存放所有兄弟标签
	var arr = [];
	//获取该标签的父级元素
	var parent = el.parentNode;
	//获取父级元素下的所有子元素
	var allElement = parent.children;
	//判断循环判断所有获取的子元素，如果和传入元素不一样，则添加到数组；
	for (var i = 0; i < allElement.length; i++) {
		if (allElement[i] != el) {
			arr.push(allElement[i])
		}
	}

	// 判断是否有第二个参数，如果存在执行
	if (str) {
		//判断该字符的类型，通过获取字符串里面的第一个字符
		var first = str.substr(0, 1);
		//根据类型的不同，进行不同的处理，同时兼容不同浏览器
		if (first == '.') {
			//class名：因为获取到的元素，可能存在不止一个样式名的情况 .box .pox .bj
			//所以先去除掉第一个字符后
			var className = str.substring(1);
			//存放筛选后的获取到的元素
			var arr2 = [];
			//循环拆分
			for (var i = 0; i < arr.length; i++) {
				// 拆分获取到的class名
				var arr1 = arr[i].className.split(' ');
				for (var k = 0; k < arr1.length; k++) {
					//如果等于我们要的class名，则添加
					if (arr1[k] == className) {
						arr2.push(arr[i]);
					}
				}
			}
			return arr2;

		} else {
			//id
			var arr3 = [];
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].nodeName == str.toUpperCase()) {
					arr3.push(arr[i])
				}
			}
			return arr3;
		}
	} else {
		//返回数组
		return arr;
	}

}

 /*
	作用 ： 拖拽
	参数 ：
		el:元素
		fn: 这是一个函数，带参数的函数
 
 */

 function darg(el,fn1){
   bind(el,'mousedown',function(ev){
			   
	   var startX = ev.pageX;
	   var startY = ev.pageY;
	   var obj = this.getBoundingClientRect();
	   var l = obj.left;
	   var t = obj.top;
	   var fn = null;   
	   bind(document,'mousemove',function(e,fnName){
		   fn = fnName;
		   var disx = e.pageX - startX;
		   var disy = e.pageY - startY;
		   el.style.left = disx + l + 'px';
		   el.style.top = disy + t + 'px';						  
		   typeof fn1 == 'function' && fn1(e);
	   })
	   
	   bind(document,'mouseup',function(ev,fenNmae1){
		   document.removeEventListener('mousemove',fn);
		   document.removeEventListener('mouseup',fenNmae1);
	   })
		ev.preventDefault();					  
   })
 }

 /*
	作用：放大镜
  
  
  */
 function ragnifier(str){
	 
	 var obj = $(str)[0];
	 var warp = $('.ragnifier-warp',obj)[0];
	 var origin = $('.ragnifier-origin',obj)[0];
	 var div = null;
	 var oImg = $('img',origin)[0];
	 
	 
	 // 鼠标移入事件
	 bind(warp,'mouseenter',function(ev){
		origin.style.display = 'block'; 
		
		// 生成一个div
		div = document.createElement('div');
		this.appendChild(div);
		
		var position = obj.getBoundingClientRect();
		var x = ev.pageX - position.left - div.offsetWidth/2;
		var y = ev.pageY - position.top - div.offsetHeight/2;
		
		var maxL = obj.clientWidth - div.offsetWidth;
		var maxT = obj.clientHeight - div.offsetHeight;
		
		if(x >= maxL){
			x = maxL;
		}else if(x<=0){
			x = 0;
		}
		if(y >= maxT){
			y = maxT;
		}else if(y<=0){
			y = 0;
		}
		div.style.left = x + 'px';
		div.style.top = y + 'px';
	 });
	 
	 // 鼠标移出事件
	 bind(warp,'mouseleave',function(ev){
	 		origin.style.display = 'none';
			div.remove();			 
	 });
	 
	 
	 // 鼠标移动事件
	 
	 bind(warp,'mousemove',function(ev){
		 var position = obj.getBoundingClientRect();
		 var x = ev.pageX - position.left - div.offsetWidth/2;
		 var y = ev.pageY - position.top - div.offsetHeight/2;
		 var maxL = obj.clientWidth - div.offsetWidth;
		 var maxT = obj.clientHeight - div.offsetHeight;
		 
		 if(x >= maxL){
		 	x = maxL;
		 }else if(x<=0){
		 	x = 0;
		 }
		 if(y >= maxT){
		 	y = maxT;
		 }else if(y<=0){
		 	y = 0;
		 }
		 div.style.left = x + 'px';
		 div.style.top = y + 'px';
		 
		 // 获取一个比例
		 var proportion_x = x/maxL;
		 var proportion_y = y/maxT;
		 var moveL = oImg.offsetWidth - origin.offsetWidth;
		 var moveT = oImg.offsetHeight - origin.offsetHeight;
		 oImg.style.left = -moveL*proportion_x+'px';
		 oImg.style.top = -moveT*proportion_y+'px';
		 
	 })
 }

 /*
	作用 ： 判断两个元素之间是否碰撞
	参数 ：
		obj ：
		obj1：
		
	返回值 ： 
		true 碰撞
		false : 没有碰撞
		
 */

function collision(obj,obj1){
	// 拿到量个元素的位置信息
	var pos_box = obj.getBoundingClientRect();
	var pos_box1 = obj1.getBoundingClientRect();
	// 绿色
	var l1 = pos_box.left;
	var r1 = pos_box.right;
	var t1 = pos_box.top;
	var b1 = pos_box.bottom;
	
	// 红色
	var l = pos_box1.left;
	var t = pos_box1.top;
	var r = pos_box1.right;
	var b = pos_box1.bottom;
	
	if(r>=l1&&b>=t1&&r1>=l&&t<=b1){
	  return true;	   
	}else{ 
	   // 没有
	   return false;				 
	}	
}

/*
	作用：封装一个事件监听(绑定)的函数，让元素可以拥有相同名称的事件（初版）
	参数：
		参数一：元素el
		参数二：不带on的事件（字符串）event
		参数三:函数fn
*/
function addEvent(el, event, fn) {
	//判断是否是元素
	if (el.nodeType != 1) {
		return
	}
	//判断是什么浏览器
	if (el.addEventListener) {
		//谷歌
		el.addEventListener(event, function() {
			// ev=ev||window.event;
			//加call,改变this指向(原本为window)
			typeof fn == 'function' && fn.apply(el)
		})
	} else {
		//IE
		el.attachEvent('on' + event, function() {
			// ev=ev||window.event;
			//加call,改变this指向
			typeof fn == 'function' && fn.call(el)
		})
	}
}

/*
	作用 ： 给元素添加事件监听（完善版）
	参数 ：
		el:元素
		event:事件名称
		fn: 触发事件时，要执行的函数
*/
function bindListener(el, event, fn) {

	if (!(el.nodeType == 1 || el.nodeType == 9)) {
		return
	}

	function fn1(ev) {
		ev = ev || window.event;
		//call改变this指向
		typeof fn == 'function' && fn.call(el, ev, fn1);
	}
	if (el.addEventListener) {
		// 谷歌	


		el.addEventListener(event, fn1);
	} else {
		// ie
		el.attachEvent('on' + event, fn1);
	}
}

/*
	鼠标滚轮兼容浏览器
	参数：
		obj:添加滚轮事件的元素
		upFn:向上执行函数
		downFn:向下执行函数
*/

function wheel(obj, upFn, downFn) {
	//BOM代理判断是什么浏览器
	var str = window.navigator.userAgent;
	if (str.indexOf('Chrome') != -1) {
		//谷歌
		obj.addEventListener('wheel', function(ev) {
			ev = ev || window.event;
			//向上滚动
			if (ev.wheelDelta > 0) {
				typeof upFn == 'function' && upFn();
			}
			//向下滚动
			if (ev.wheelDelta < 0) {
				typeof downFn == 'function' && downFn();
			}
		})
	} else if (str.indexOf('Firefox') != -1) {
		//火狐,判断滚轮方向  detail
		obj.addEventListener('DOMMouseScroll', function(ev) {
			ev = ev || window.event;
			if (ev.detail > 0) {
				// down
				typeof downFn == 'function' && downFn();
			} else {
				// up
				typeof upFn == 'function' && upFn();
			}
		})
	} else if (str.indexOf('MSIE') != -1) {
		//IE
		
	}
}



//项目
function getStyle(obj,name){
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}
// var timer=null;
function move(obj,arrt,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//var cur=parseInt(getStyle(obj,arrt));    //parseInt 转换为整数 直接将opacity转换为0
	var cur=0;
	if(arrt=='opacity'){
		cur=Math.round(parseFloat(getStyle(obj,arrt))*100);    //针对透明度
	}
	else{
		cur=parseInt(getStyle(obj,arrt));
	}
	var speed=(target-cur)/6;
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	if (cur==target) 
	{
		clearInterval(obj.timer);
	}
	else{
	if(arrt=='opacity')
	{
		obj.style.filter='alpha(opacity:'+(cur+speed)+')';
		obj.style.opacity=(cur+speed)/100;
	}
	else
	{
		obj.style[arrt]=cur+speed+'px';     //透明度 不能+px
	}	
}
},30)
}


/*
	作用：封装一个 cookie 存取数据的对象
	对象一：是一个函数，获取 cookie 数据
	对象二：是一个函数，存储 cookie 数据
	对象三：是一个函数，删除 cookie 数据
*/
var cookies = {
	get:function(name) {	//	获取符合传入的内容的 cookie 信息
		var	arr = document.cookie.split('; ');
		var obj = {};
		arr.forEach(function(data,i){
			var data = data.split('=');
			obj[data[0]] = data[1];					
		})
		return obj[name];
	},
	set:function(name,value,time) {	//	设置 cookie 本地存储的内容与销毁时间
		var num = parseFloat(time);	//	获取数字
		var unit = time.substring((''+num).length);	//	获取时间单位
		var obj = {	//	对象是时间单位
			s:'Seconds',
			min:'Minutes',
			h:'Hours',
			day:'Date',
			mon:'Month',
			year:'FullYear',
		}
		var date = new Date();	//	获取本地时间				
		date['set'+obj[unit]](date['get'+obj[unit]]()+num);	//	设置销毁时间
		document.cookie = name + '=' + value + ';expires=' + date;	//	设置 cookie 内容和销毁时间			
	},
	remove:function(user) {	//	删除本地存储信息
		var time = new Date();
		time.setFullYear(2000);					
		document.cookie = user + '=333;expires=' + time;					
	}
}

/*
	作用：封装一个 storage 存取删数据的对象
	对象一：是一个函数，获取 storage 数据
	对象二：是一个函数，存储 storage 数据
	对象三：是一个函数，删除 storage 数据
	对象四：是一个函数，清除所有的 storage 数据
*/
var storage = {
	set:function(key,value) {
		var str = JSON.stringify(value);
		window.localStorage.setItem(key,str);
	},
	get:function(key) {
		var str = window.localStorage.getItem(key);
		if (str) {
			var arr = JSON.parse(str);
			return arr;
		} else {			
			return [];
		}
	},
	remove:function(key) {
		window.localStorage.removeItem(key);
	},
	clear:function() {
		window.localStorage.clear();
	}
}

//包装一个选择函数,判断所有的input是否全部勾上
function check(obj){
	//定义一个变量，存放全选框状态
	var onoff=true;
	//循环判断所有选项是否选择，如果没有，改变onOff的值为false
	forEach(obj,function(el){
		if(el.checked==false){
			onoff=false;
		}
	})
	return onoff;
}