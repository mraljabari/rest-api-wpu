$.getJSON(`data/pizza.json`, function(data){
    let menu = data.menu
    // console.log(menu);
    $.each(menu, function(i, data){
        $('#daftar-menu').append(`<div class="col-md-4">
        <div class="card mb-3">
            <img src="img/menu/`+ data.gambar +`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">`+ data.nama +`</h5>
                <p class="card-text">`+ data.deskripsi +`</p>
                <p class="card-text"><b>Harga : Rp. `+ data.harga +`</b></p>
                <a href="#" class="btn btn-primary">Order Now</a>
            </div>
            </div>
        </div>`)
    });
});
