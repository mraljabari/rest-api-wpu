$.getJSON(`data/pizza.json`, function(data){
    let menu = data.menu
    // console.log(menu);
    $.each(menu, function(i, data){
        console.log(i);
    });
});
