import { montaProjetoComunidade } from "./montaProjComunidade.js"

const titulo = document.querySelector('[data-titulo]')
const descricao = document.querySelector('[data-descricao]')
const codigo = document.querySelector('[data-codigo]')
const linguagem = document.querySelector('[data-linguagem]')
const cor = document.querySelector('[data-cor-input]')
const campoMensagem = document.querySelector('[data-mensagem]')

const colherDados = () => {
    const dados = {
        titulo: titulo.value,
        descricao: descricao.value,
        linguagem: linguagem.value,
        cor: cor.value,
        codigo: codigo.textContent
    }
    return dados
}


export const salvarProjeto = () => {
    const botaoSalvar = document.querySelector('[data-botao-salvar]')

    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()
        
        const novoCartao = colherDados()
        
        if (novoCartao.titulo && novoCartao.codigo) {

            const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
            const cartoesAtualizados = [...cartoesSalvos, novoCartao]
                    
            localStorage.setItem('dados', JSON.stringify(cartoesAtualizados))
            
            montaProjetoComunidade(novoCartao)

            campoMensagem.classList.add('mensagem-sucesso')
            campoMensagem.textContent = "Seu projeto foi salvo. Para visualizá-lo, acesse Comunidade."
            limparDadosTela()
            setTimeout(() => {campoMensagem.textContent = " "} , 5000)
        
        } else {
            campoMensagem.textContent = "O código e nome do projeto são obrigatórios. Preencha-os antes de salvar"
        }    
    })
}

const limparDadosTela = () => {
    titulo.value = " "
    descricao.value = " "
    codigo.textContent = " "
}