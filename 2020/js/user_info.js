//最近浏览
function views(){
    var arr=storage.get('finisharr');
    var uls=$('.goods_type_list')[0];
    arr.forEach(function(data,i){
        var lis=document.createElement('li');
        lis.className='goods_type_list';
        lis.innerHTML=`<a href="commodity.html?$comId=${data.comId}"><img src="../img/${data.image}"></a>
        <h4><a href="commodity.html?$comId=${data.comId}">${data.name.substring(0,10)}</a></h4>
        <div class="operate">
            <span class="prize">￥${data.newPrice}</span>
        </div>`;
        uls.appendChild(lis);
    });



    //渲染地址
    var search=window.location.search;
	var users=$('.user_info_list')[0];
	if(search){
		search=search.split('=')[1];
		forEach(people.student,function(el){
			if(el.uid==search){
				users.innerHTML=`
                    <li><span>用户名：</span>${el.name}</li>
                    <li><span>联系方式：</span>${el.phone}</li>
                    <li><span>联系地址：</span>${el.address}</li>
				`;
			}
		})
	}else{
		users.innerHTML=`
            <li><span>用户名：</span>李明</li>
            <li><span>联系方式：</span>18210569700</li>
            <li><span>联系地址：</span>北京市昌平区</li>
		`;
	}
}
views()