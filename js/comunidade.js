import { carregaProjetosComunidade } from "./carregarComunidade.js" 
import { busca } from "./busca.js" 
import { atualizaCurtidas } from "./curtidas.js"//funcionalidade do botão de curtir

const projetosSalvos = JSON.parse(localStorage.getItem('dados')) || []

//imprime os projetos salvos no local storage na página Comunidade
carregaProjetosComunidade(projetosSalvos) 

//funcionalidade do campo de pesquisa
busca() 

//Mostra e esconde área do botões de curtida e comentários dos cartões dos projetos da página de comunidade
const cartoes = document.querySelectorAll('.cartao')
cartoes.forEach(cartao => {
    //acessa a div, de cada cartão, que contém os botões
    const botoesCartao = cartao.querySelector('[data-interacao]') 
    //quando o mouse passa sobre o cartão, os botões daquele cartão aparecem
    cartao.addEventListener('mouseenter', () => {
        botoesCartao.classList.remove('esconder')
    })
    //quando o mouse sai da área de um cartão, os botões desaaparecem
    cartao.addEventListener('mouseleave', () => {
        botoesCartao.classList.add('esconder')
    })

    //funcionalidade de contagem de curtidas e armazenamento dessas informações no localStorage
    atualizaCurtidas(cartao) 
    // comentarios(cartao) - implementar
})