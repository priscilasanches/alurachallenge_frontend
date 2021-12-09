const botaoMenu = document.querySelector('[data-botao-menu-mobile]');
const botaFechar = document.querySelector('[data-botao-fechar]');
const menu = document.querySelector('[data-menu-mobile]');

botaoMenu.addEventListener('click', () => {
    menu.classList.add('menu-mobile--ativo');
    botaoMenu.classList.add('botao-menu-mobile--esconder');
    botaFechar.classList.add('botao-fechar-mobile--mostrar');
});

botaFechar.addEventListener('click', () => {
    menu.classList.remove('menu-mobile--ativo');
    botaoMenu.classList.remove('botao-menu-mobile--esconder');
    botaFechar.classList.remove('botao-fechar-mobile--mostrar');
})