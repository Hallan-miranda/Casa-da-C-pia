    var value1 = document.querySelector(".value1 p");
    var value2 = document.querySelector(".value2 p");
    var value3 = document.querySelector(".value3 p");
    var value4 = document.querySelector(".value4 p");
    var value5 = document.querySelector(".value5 p");
    var value6 = document.querySelector(".value6 p");

    value1.addEventListener("mouseover", function() {
        value1.style.fontSize= '20px';  
        value1.textContent = ' A busca constante por novas ideias, soluções e tecnologias para se destacar no mercado e oferecer produtos ou serviços diferenciados.'
    });    
    value1.addEventListener("mouseout", function() { 
        value1.style.fontSize= '30px';  
        value1.textContent = 'Inovação'
    });    
    value2.addEventListener("mouseover", function() {
        value2.style.fontSize= '20px'; 
        value2.textContent = 'O compromisso em entregar produtos e serviços que superem as expectativas dos clientes, com excelência em todos os processos'
    });    
    value2.addEventListener("mouseout", function() {
        value2.style.fontSize= '30px'; 
        value2.textContent = 'Qualidade'
    });    
    value3.addEventListener("mouseover", function() {
        value3.style.fontSize= '20px'; 
        value3.textContent = 'Agir com honestidade, ética e transparência em todas as relações, tanto internas quanto externas.'
    });    
    value3.addEventListener("mouseout", function() {
        value3.style.fontSize= '30px'; 
        value3.textContent = 'Integridade'
    });    
    value4.addEventListener("mouseover", function() {
        value4.style.fontSize= '20px'; 
        value4.textContent = 'Promover práticas que minimizem o impacto ambiental e social, buscando um desenvolvimento econômico equilibrado e responsável'
    });    
    value4.addEventListener("mouseout", function() {
        value4.style.fontSize= '30px'; 
        value4.textContent = 'Sustentabilidade'
    });    
    value5.addEventListener("mouseover", function() {
        value5.style.fontSize= '20px'; 
        value5.textContent = 'Colocar as necessidades e desejos dos clientes em primeiro lugar, buscando sempre oferecer a melhor experiência possível'
    });    
    value5.addEventListener("mouseout", function() {
        value5.style.fontSize= '30px'; 
        value5.textContent = 'Foco no Cliente'
    });    
    value6.addEventListener("mouseover", function() {
        value6.style.fontSize= '20px'; 
        value6.textContent = 'Investir no crescimento e desenvolvimento dos colaboradores, oferecendo oportunidades de aprendizado e promovendo um ambiente de trabalho estimulante'
    });    
    value6.addEventListener("mouseout", function() {
        value6.style.fontSize= '30px'; 
        value6.textContent = 'Desenvolvimento'
    });    
   