import { salvarProjeto } from "./salvarProjeto.js";

const boxEditor = document.querySelector('[data-box-editor]')
const botaoHL = document.querySelector('[data-botao-hl]')
const corInput = document.querySelector('[data-cor-input]')
const entrada = document.querySelector('[data-campo-busca]')
const linguagem = document.querySelector('[data-linguagem]')

//Altera cor no editor de código conforme escolha no color picker (outra opção de evento é o change, que altera a cor apenas após sair do color picker)
corInput.addEventListener('input', () => {
    boxEditor.style.backgroundColor = corInput.value    
});

//Aplica hljs ao clicar no botão visualizar com highlight
botaoHL.addEventListener ('click', () => {
    aplicaHighlight();
})

function aplicaHighlight() {
    const codigo = boxEditor.innerText
    boxEditor.innerHTML = `<code contenteditable="true" class="editor__campo hljs ${linguagem.value}" aria-label="Editor de Código" data-codigo></code>`
    boxEditor.querySelector('code').textContent = codigo
    hljs.highlightElement(boxEditor.querySelector('code'))
}

//Salva os dados do projeto no local storage, para impressão na página Comunidade
salvarProjeto()

//Quando o usuário tenta pesquisar algum projeto no campo de busca, ao digitar a primeira letra será remetido para a página comunidade, onde poderá realizar a pesquisa dos cartões salvos (ver busca.js)
entrada.addEventListener('input', function () {
    window.location.href = "../comunidade.html"
})