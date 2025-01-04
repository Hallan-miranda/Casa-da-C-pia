const logos = [
    {url: 'images/logos-parceiros/BOBS.png', alt: '1'},
    {url: 'images/logos-parceiros/CAMARADA CAMARÃO.png', alt: '2'},
    {url: 'images/logos-parceiros/CLARO.png', alt: '3'},
    {url: 'images/logos-parceiros/Coca-Cola_logo.svg.png', alt: '4'},
    {url: 'images/logos-parceiros/G8 CURSO.png', alt: '5'},
    {url: 'images/logos-parceiros/GERDAU.png', alt: '6'},
    {url: 'images/logos-parceiros/logo-hospital-do-rim.png', alt: '7'},
    {url: 'images/logos-parceiros/OUTBACK.png', alt: '7'},
    {url: 'images/logos-parceiros/PETZ.png', alt: '7'},
    {url: 'images/logos-parceiros/portal_concurso.png', alt: '7'},
    {url: 'images/logos-parceiros/Valor-Imobiliario-Logo.png', alt: '7'},
]

let logoIndex = 0;
const maxpartners = logos.length; 
const partnerLogoContainer = document.querySelectorAll('.partnerLogo');
const logo = document.querySelectorAll('.partnerLogo img'); 

partnerLogoContainer.forEach(function(div, index){
    div.style.width = `${maxpartners * 210}px`;

});
function changePartnerLogo(){
    logoIndex = (logoIndex  + maxpartners) % maxpartners;  


    logo.forEach(function(img, index){
        let logoindex  = (index + logoIndex) % maxpartners;

        img.src = logos[logoindex].url;
        img.alt = logos[logoindex].alt;



    });


};

function rotateCarousel() {
    changePartnerLogo();

};

changePartnerLogo();
