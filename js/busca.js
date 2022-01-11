export const busca = () => {

const cartoes = document.querySelectorAll('.cartao')
const entrada = document.querySelector('[data-campo-busca]')

entrada.addEventListener('input', function () {

    cartoes.forEach(cartao => {
        const expresssoProcurada = new RegExp(this.value, "i") 
        const tituloProjeto = cartao.querySelector('[data-titulo]').textContent
        const descricaoProjeto = cartao.querySelector('[data-descricao]').textContent
        
        if (!expresssoProcurada.test(tituloProjeto) && !expresssoProcurada.test(descricaoProjeto)) {
            cartao.classList.add('hide')  
        } else {
            cartao.classList.remove('hide') 
        }
    })
})
}

