//Output berupa Object
/*
let mhs = {
    nama : "Rizki",
    nik : "12333213",
    email : "rizki@gmail.com"
}

console.log(mhs)
*/


//convert json ke object menggunakan AJAX / menggunakan javascript manual
/*let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let mhs = JSON.parse(this.responseText);
        console.log(mhs);
    }

}
xhr.open('GET', 'coba.json', true);
xhr.send();
*/

//get ajax menggunakan Jquery
$.getJSON('coba.json', function(data){
    console.log(data);
});