function collect(){
    var box=$('.user_info_list')[0];
    var arr=storage.get('comSc');
    var str='';
    arr.forEach(function(data){
        str+=`
            <li>
                <a href="commodity.html?comId=${data.comId}">
                    <img src="../img/${data.image}" alt="">
                    <h3>${data.name.substring(0,10)}</h3>
                </a>
            </li>
        `;
    });
    box.innerHTML=str;
}
collect()