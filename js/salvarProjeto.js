const botaoSalvar = document.querySelector('[data-botao-salvar]')
const campoMensagem = document.querySelector('[data-mensagem]')
const cor = document.querySelector('[data-cor-input]')
const descricao = document.querySelector('[data-descricao]')
const linguagem = document.querySelector('[data-linguagem]')
const titulo = document.querySelector('[data-titulo]')

//Módulo chamado em editor_codigo.js, responsável por escutar o clique no botão salvar, criar objeto com os dados e adicionar ao Local Storage. Chama o módulo montarProjComunidade.js, para criar a estrutura do projeto que aparecerá em comunidade.
export const salvarProjeto = () => {

    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()
         
        const novoProjeto = colherDados() //objeto com os dados do projeto a ser salvo
        //permite salvar o projeto apenas se os campos titulo e código estiverem preenchidos
        if (novoProjeto.infos.titulo && novoProjeto.infos.codigo) { 
            //adiciona os dados do novo projeto aos já salvos no local storage
            const projetosSalvos = JSON.parse(localStorage.getItem('dados')) || [] 
            const projetosAtualizados = [...projetosSalvos, novoProjeto] 
            //atualiza o local storage com os dados do novo projeto
            localStorage.setItem('dados', JSON.stringify(projetosAtualizados)) 
        
            //feedback ao usuário: projeto salvo com sucesso
            campoMensagem.classList.add('mensagem-sucesso') //define a cor da mensagem
            campoMensagem.textContent = "Seu projeto foi salvo. Para visualizá-lo, acesse Comunidade."
            setTimeout(() => {campoMensagem.textContent = " "} , 5000) //a mensagem desaparece após 5s
            
            limparDadosTela() 
        
        //não permite salvar caso o campo titulo e código do projeto não forem preenchidos pelo usuário
        } else { 
            //feedback ao usuário: impossibilidade de salvar o projeto
            campoMensagem.classList.remove('mensagem-sucesso') //altera a cor da mensagem
            campoMensagem.textContent = "O código e nome do projeto são obrigatórios. Preencha-os antes de salvar."
        }    
    })
}

//Pega os dados adicionados pelo usuário na página do editor de código (index.html), retornando um objeto com essas informações
const colherDados = () => {
    const codigo = document.querySelector('[data-codigo]')
    const dados = {
        id: 0,
        infos: {
            titulo: titulo.value,
            descricao: descricao.value,
            linguagem: linguagem.value,
            cor: cor.value,
            codigo: codigo.innerText,
            curtido: false,
            quantidadeCurtidas: 0
        }
    }
    return dados 
}

//limpa os dados referente ao código, título e descrição do projeto, na página do editor (index.html)
const limparDadosTela = () => {
    titulo.value = ""
    descricao.value = ""
    document.querySelector('[data-codigo]').textContent = ""
}