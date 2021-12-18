const corInput = document.querySelector('[data-cor-input]');
const boxEditor = document.querySelector('[data-box-editor]');

const linguagem = document.querySelector('[data-linguagem]');
const botaoHL = document.querySelector('[data-botao-hl]');

//Altera cor no editor de código conforme escolha no color picker (outra opção de evento é o change, que altera a cor apenas após sair do color picker)
corInput.addEventListener('input', () => {
    boxEditor.style.backgroundColor = corInput.value;      
});

//Aplica hljs
botaoHL.addEventListener ('click', () => {
    aplicaHighlight();
})

function aplicaHighlight() {
    const codigo = boxEditor.innerText;
    boxEditor.innerHTML = `<code contenteditable="true" class="editor__campo hljs ${linguagem.value}" aria-label="Editor de Código"></code>`;
    boxEditor.querySelector('code').textContent = codigo;
    hljs.highlightElement(boxEditor.querySelector('code'));
}

