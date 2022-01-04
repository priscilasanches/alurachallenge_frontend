import { carregaProjetosComunidade } from "./carregarComunidade.js"
// import { comentarios } from "./Comentarios.js"
import { atualizaCurtidas } from "./Curtidas.js"

carregaProjetosComunidade()

//Mostra e esconde área do botões de curtida e comentários dos cards da página de comunidade
const cards = document.querySelectorAll('.cartao')
cards.forEach(card => {
    const botoesSecao = card.querySelector('[data-info]')
    
    card.addEventListener('mouseenter', () => {
        botoesSecao.classList.remove('hide')
    })
    card.addEventListener('mouseleave', () => {
        botoesSecao.classList.add('hide')
    })

    atualizaCurtidas(card)
    // comentarios(card) - implementar
})


