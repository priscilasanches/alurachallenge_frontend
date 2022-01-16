//funcionalidade do botão de exclusão de projeto, recebendo como parametro o elemento li (cartão de projeto) advindo de comunidade.js
export const botaoExcluirProjeto = (cartao) => {
    const botaoExcluir = cartao.querySelector('[data-excluir]')
    
    botaoExcluir.addEventListener('click', () => {
        let confirmacao = confirm('Tem certeza que deseja excluir este projeto? A ação não poderá ser desfeita.')
        if (confirmacao) {
            const id = cartao.querySelector('[data-numero-id]').textContent
            //se confirmada a exclusão, aplica efeito fadeOut e exclui o cartão (li) após 0,5s
            cartao.classList.add("fadeOut")
            setTimeout( () => {cartao.remove()}, 500)  
            atualizaLocalStorage(id)
        }    
    })
}

function atualizaLocalStorage (id) {
    const projetosSalvos = JSON.parse(localStorage.getItem('dados')) || []
    //exclui do Local Storage o projeto cujo id foi capturado pelo botaoExcluirProjeto
    projetosSalvos.splice(id, 1)
    localStorage.setItem('dados', JSON.stringify(projetosSalvos))
    window.location.reload()
}