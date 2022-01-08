import { montaProjetoComunidade } from "./montaProjComunidade.js"

export const carregaProjetosComunidade = () => {
    
    const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
    
    const listaCartoes = document.querySelector('[data-lista]')
    let indiceCartoes = cartoesSalvos.length-1

    while (indiceCartoes>=0) {
        const dados = cartoesSalvos[indiceCartoes]
        cartoesSalvos[indiceCartoes].id = indiceCartoes
        const cartao = montaProjetoComunidade(dados, indiceCartoes)
        listaCartoes.appendChild(cartao)
        indiceCartoes--
    }

    localStorage.setItem('dados', JSON.stringify(cartoesSalvos))
}