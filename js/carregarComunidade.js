import { montaProjetoComunidade } from "./montaProjComunidade.js"

//recebe como parâmetro os projetos salvos no local storage
export const carregaProjetosComunidade = (projetosSalvos) => {
        
    const listaCartoes = document.querySelector('[data-lista]') //acessa a ul, sob a qual estarão os cartões dos projetos (li)
    let indiceCartoes = projetosSalvos.length-1 //retorna o número de projetos existentes no local storage menos 1 (pois deseja-se os números de índices)
    
    //utilizado while em ordem decrescente para deixar os projetos mais novos no começo
    while (indiceCartoes>=0) {
        const dados = projetosSalvos[indiceCartoes]
        projetosSalvos[indiceCartoes].id = indiceCartoes //atribui um número de id para cada projeto salvo no localStorage (será utilizado em curtidas.js)
        const cartao = montaProjetoComunidade(dados) //estrutura de cada cartão de projeto
        listaCartoes.appendChild(cartao) //adiciona o cartao (li) ao html, como filho da ul
        indiceCartoes--
    }

    //atualiza número de id dos projetos no LocalStorage
    localStorage.setItem('dados', JSON.stringify(projetosSalvos))
}