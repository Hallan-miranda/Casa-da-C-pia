const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alterna a classe 'active' no menu
  menuToggle.classList.toggle('active');
});
