const botaoMenu = document.querySelector('[data-botao-menu]');
const menu = document.querySelector('[data-menu-mobile]');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile--ativo');
    botaoMenu.classList.toggle('fa-times');
});

