const botaoMenu = document.querySelector('[data-botao-menu]');
const menu = document.querySelector('[data-menu-mobile]');

const botaoBusca = document.querySelector('[data-botao-busca]');
const campoBusca = document.querySelector('[data-campo-busca]');
const logo = document.querySelector('[data-logo]');

const corInput = document.querySelector('[data-cor-input]');
const boxEditor = document.querySelector('[data-box-editor]');

const linguagem = document.querySelector('[data-linguagem]');
const botaoHL = document.querySelector('[data-botao-hl]')

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

//Altera cor no editor de código conforme escolha no color picker (outra opção de evento é o change, que altera a cor apenas após sair do color picker)
corInput.addEventListener('input', () => {
    boxEditor.style.backgroundColor = corInput.value;      
});

//Aplica hljs
function aplicaHighlight() {
    const codigo = boxEditor.innerText;
    boxEditor.innerHTML = `<code contenteditable="true" class="editor__campo hljs ${linguagem.value}" aria-label="Editor de Código"></code>`;
    boxEditor.querySelector('code').textContent = codigo;
    hljs.highlightElement(boxEditor.querySelector('code'));
}

botaoHL.addEventListener ('click', () => {
    aplicaHighlight();
})





