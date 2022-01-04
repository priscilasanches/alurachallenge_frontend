const botaoMenu = document.querySelector('[data-botao-menu]');
const menu = document.querySelector('[data-menu-mobile]');

const botaoBusca = document.querySelector('[data-botao-busca]');
const campoBusca = document.querySelector('[data-campo-busca]');

const logo = document.querySelector('[data-logo]');

//Menu tablet e mobile
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile');
    botaoMenu.classList.toggle('fa-times');
});

//Busca Mobile
botaoBusca.addEventListener('click', () => {
    botaoMenu.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    botaoBusca.classList.toggle('fa-times');
    campoBusca.classList.toggle('cabecalho__entrada--active');
});







