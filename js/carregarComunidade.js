import { enviaProjetoParaComunidade } from "./enviarProjComunidade.js"

export const carregaProjetosComunidade = () => {
    
    const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []

    cartoesSalvos.forEach(cartao => {
        enviaProjetoParaComunidade(cartao)
    })
}