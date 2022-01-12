export const busca = () => {

    const cartoes = document.querySelectorAll('.cartao')
    const entrada = document.querySelector('[data-campo-busca]')

    entrada.addEventListener('input', function () {

        cartoes.forEach(cartao => {
            const expresssoProcurada = new RegExp(this.value, "i") 
            const tituloProjeto = cartao.querySelector('[data-titulo]').textContent
            const descricaoProjeto = cartao.querySelector('[data-descricao]').textContent
            //verifica se no campo de título e descrição dos cartões de projeto há correspondência com a expressão que está sendo digitada (ignora maiúscula e minúscula)
            if (!expresssoProcurada.test(tituloProjeto) && !expresssoProcurada.test(descricaoProjeto)) {
                cartao.classList.add('esconder')  //esconde os cartões que não correspondam
            } else {
                cartao.classList.remove('esconder') 
            }
        })
    })
}

