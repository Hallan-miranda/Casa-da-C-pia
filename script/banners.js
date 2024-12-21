var banner = document.getElementById('imgBanner');

var data = [
    {title: "dedo", url:"images/2689938-online-shopping-concept-modern-flat-concept-for-web-banners-websites-infograficos-impressos-materiais-ilustracaoial-gratis-vetor.jpg"},
    {title: "dedo", url:"images/3757c30a762387b.jpg"},
    {title: "dedo", url:"images/banner-content-marketing.jpg"},
];

function mudarImagem(){
    var i = Math.floor(Math.random() * data.length);
    console.log(i);
    banner.src = data[i].url;
    banner.alt = data[i].title;
    setTimeout(mudarImagem, 1000);
}

mudarImagem()
