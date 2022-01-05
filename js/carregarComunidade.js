import { montaProjetoComunidade } from "./montaProjComunidade.js"

export const carregaProjetosComunidade = () => {
    
    const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
    const listaCartoes = document.querySelector('[data-lista]')

    cartoesSalvos.forEach((dados) => {
        const cartao = montaProjetoComunidade(dados)
        listaCartoes.appendChild(cartao)
    })
}