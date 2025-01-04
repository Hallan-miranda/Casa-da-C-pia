var produtos = [
    {url: 'images/caneca.png', href: '#', alt: '1'},
    {url: 'images/11.png', href: '#', alt: '2'},
    {url: 'images/12.webp', href: '#', alt: '3'},
    {url: 'images/13.webp', href: '#', alt: '4'},
    {url: 'images/14.webp', href: '#', alt: '5'},
    {url: 'images/15.webp', href: '#', alt: '6'},
    {url: 'images/16.webp', href: '#', alt: '7'},
]
let produtoIndex = 0;
let productMax= produtos.length;
const button = document.querySelector('.button'); 
const produto = document.querySelectorAll('.products .imgcontainer'); 


function mudarProduto(direction=0){
    produtoIndex = (produtoIndex + direction + productMax) % productMax;  

    produto.forEach(function(div, index){
        let produtoindex  = (index + produtoIndex) % productMax;

        let image = div.querySelector('img');
        let link =  div.querySelector('a');

        image.src = produtos[produtoindex].url;
        image.alt = produtos[produtoindex].alt;
        link.href = produtos[produtoindex].href;

    });


};

function rodarProdutos(direction) {
    if(direction == 1){
        console.log('ativado');

        mudarProduto(1);
    }else{
        console.log('-ativado');

        mudarProduto(-1);
    }

};
mudarProduto();


/*let currentIndex = 0;

products.forEach(function(div, index){

    let image = div.querySelector('img');
    let link =  div.querySelector('a');

    image.src = produtos[index].url;
    image.alt = produtos[index].alt;
    link.href = produtos[index].href;

    
});


function rotateCarousel(direction) {
    currentIndex += direction;
  
    if(currentIndex > 6){
        currentIndex = 0;
    }else if(currentIndex < 0){    
        currentIndex = 6;
    }

    products.forEach(function(div, index){
        const productIndex = (currentIndex + index) % 7;
        console.log(productIndex);

        

        let image = div.querySelector('img');
        let link =  div.querySelector('a');

        image.src = produtos[productIndex].url;
        image.alt = produtos[productIndex].alt;
        link.href = produtos[productIndex].href;
    })     
};

function updateButtonPosition(){
    const bannerHeigth = document.querySelector('.banner').offsetHeight;

    const headerHeight = document.querySelector('header').offsetHeight;

    const productsHeight = document.querySelector('.products').offsetHeight;

    productsHeightDivided = productsHeight / 2;

    topButton = bannerHeigth + headerHeight + productsHeightDivided;



    button.style.top = `${topButton}px`;

}

window.addEventListener('resize', updateButtonPosition);
window.addEventListener('load', updateButtonPosition);*/