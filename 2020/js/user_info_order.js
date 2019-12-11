function orders(){
    var arr=storage.get('finisharr');
    var tds=$('.commodity',$('.order_list_table')[0])[0];
    var allPri=0;
    arr.forEach(function(data,i){
        var uls=document.createElement('ul');
        uls.className='order_goods_list';
        uls.innerHTML=`<li class="col01"><img src="../img/${data.image}"></li>
        <li class="col02">${data.name}</li>
        <li class="col03">${data.num}</li>
        <li class="col04">${data.newPrice}元</li>`;
        tds.appendChild(uls);
        allPri+=parseInt(data.num)*parseFloat(data.newPrice);
    });

    var total=$('.totals')[0];
    total.innerHTML=`${allPri}元`;
}
orders()