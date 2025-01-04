var banner = document.getElementById('imgBanner');

var i = 0;
var data = [
    {title: "Acrilicos e Diversos", url:"images/banners/PÁGINA 1.png"},
    {title: "dedo", url:"images/banners/PÁGINA 2.png"},
    {title: "dedo", url:"images/banners/PÁGINA 3.png"},
    {title: "dedo", url:"images/banners/PÁGINA 4.png"},
    {title: "dedo", url:"images/banners/PÁGINA 5.png"},
    {title: "dedo", url:"images/banners/PÁGINA 6.png"},
    {title: "dedo", url:"images/banners/PÁGINA 7.png"},
    {title: "dedo", url:"images/banners/PÁGINA 8.png"},
    {title: "dedo", url:"images/banners/PÁGINA 9.png"},
    {title: "dedo", url:"images/banners/PÁGINA 10.png"},
    {title: "dedo", url:"images/banners/PÁGINA 11.png"},
    {title: "dedo", url:"images/banners/PÁGINA 12.png"},
    {title: "dedo", url:"images/banners/PÁGINA 13.png"},
    {title: "dedo", url:"images/banners/PÁGINA 14.png"},
    {title: "dedo", url:"images/banners/PÁGINA 15.png"},
    {title: "dedo", url:"images/banners/PÁGINA 16.png"},
    {title: "dedo", url:"images/banners/PÁGINA 17.png"},
];

function mudarImagem(){
    
    if(i < data.length - 1){
       i++ ;
    }
    else{
        i = 0
    }
    console.log(i);
    banner.src = data[i].url;
    banner.alt = data[i].title;
    setTimeout(mudarImagem, 10000);
}

mudarImagem()
