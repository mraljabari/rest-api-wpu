function showMenu(){
    $.getJSON(`data/pizza.json`, function(data){
        let menu = data.menu
        // console.log(menu);
        $('#daftar-menu').empty(); 
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
}

function menuKontak(){
    $.getJSON(`data/pizza.json`, function(data){
        let menu = data.menu
        // console.log(menu);
        $('#daftar-menu').empty(); 
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
}


function slideShow(){
    
}

showMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    $.getJSON(`data/pizza.json`, function(data){
        let menu = data.menu;
        let content = '';

        if (kategori == 'All Menu'){
            showMenu();
            return;
        }
        else if (kategori == 'Kontak') {
            alert("ini menu kontak");
            
        } else {
            
        }
        

        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += `<div class="col-md-4">
                <div class="card mb-3">
                    <img src="img/menu/`+ data.gambar +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.nama +`</h5>
                        <p class="card-text">`+ data.deskripsi +`</p>
                        <p class="card-text"><b>Harga : Rp. `+ data.harga +`</b></p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                    </div>
                </div>`;
            }
            else{

            }
        });
        
        $('#daftar-menu').html(content);
    });

});