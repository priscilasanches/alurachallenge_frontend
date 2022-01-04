import { enviaProjetoParaComunidade } from "./enviarProjComunidade.js"

export const salvarProjeto = () => {
    const botaoSalvar = document.querySelector('[data-botao-salvar]')

    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()
        
        const novoCartao = colherDados()
        const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
        const cartoesAtualizados = [...cartoesSalvos, novoCartao]
                
        localStorage.setItem('dados', JSON.stringify(cartoesAtualizados))
        limparDadosTela()
        // window.location.href = "http://127.0.0.1:5500/comunidade.html"   
        enviaProjetoParaComunidade(novoCartao)
    })
}

function colherDados() {

    const dados = {
        titulo: document.querySelector('[data-titulo]').value,
        descricao: document.querySelector('[data-descricao]').value,
        linguagem: document.querySelector('[data-linguagem]').value,
        cor: document.querySelector('[data-cor-input]').value,
        codigo: document.querySelector('[data-codigo]').textContent
    }
    return dados
}

function limparDadosTela() {
    document.location.reload(true)
}