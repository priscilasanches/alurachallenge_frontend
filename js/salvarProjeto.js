import { montaProjetoComunidade } from "./montaProjComunidade.js"

const colherDados = () => {
    const titulo = document.querySelector('[data-titulo]')
    const descricao = document.querySelector('[data-descricao]')
    const linguagem = document.querySelector('[data-linguagem]')
    const cor = document.querySelector('[data-cor-input]')
    const codigo = document.querySelector('[data-codigo]')
    
    const dados = {
        id: 0,
        infos: {
            titulo: titulo.value,
            descricao: descricao.value,
            linguagem: linguagem.value,
            cor: cor.value,
            codigo: codigo.textContent,
            curtido: false,
            curtidas: 0
        }
    }
    return dados
}


export const salvarProjeto = () => {
    const botaoSalvar = document.querySelector('[data-botao-salvar]')
    const campoMensagem = document.querySelector('[data-mensagem]')

    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()
        
        const novoCartao = colherDados()
        
        if (novoCartao.infos.titulo && novoCartao.infos.codigo) {

            const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
            const cartoesAtualizados = [...cartoesSalvos, novoCartao]
           
            localStorage.setItem('dados', JSON.stringify(cartoesAtualizados))
            
            montaProjetoComunidade(novoCartao)

            campoMensagem.classList.add('mensagem-sucesso')
            campoMensagem.textContent = "Seu projeto foi salvo. Para visualizá-lo, acesse Comunidade."
            limparDadosTela()
            setTimeout(() => {campoMensagem.textContent = " "} , 5000)
        
        } else {
            campoMensagem.classList.remove('mensagem-sucesso')
            campoMensagem.textContent = "O código e nome do projeto são obrigatórios. Preencha-os antes de salvar"
        }    
    })
}

const limparDadosTela = () => {
    document.querySelector('[data-titulo]').value = ""
    document.querySelector('[data-descricao]').value = ""
    document.querySelector('[data-codigo]').textContent = ""
}
