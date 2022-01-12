//Marcação e contagem de curtidas, recebendo como parametro os dados de um cartão de projeto advindo de comunidade.js
export function atualizaCurtidas(cartao) {
    
    const botaoCurtidas = cartao.querySelector('[data-curtir-botao]')
    const campoQuantidadeCurtidas = cartao.querySelector('[data-curtir-quantidade]')
    const iconeCurtidas = cartao.querySelector('[data-curtir-icone]')

    botaoCurtidas.addEventListener('click', () => { 
        let quantidade = campoQuantidadeCurtidas.textContent;
        const classe = iconeCurtidas.classList;

        //quando o botao é clicado, percorre as classes do icone para verificar se aquele cartão consta como curtido (se possui a classe cartao__interacao--curtir)
        for (let i=0; i<classe.length;i++){ 
            if (classe[i] == 'cartao__interacao--curtir') {
            //se encontrar a classe, a remove e decrementa a quantidade de curtidas ("descurte" aquele projeto)
                iconeCurtidas.classList.remove('cartao__interacao--curtir'); 
                quantidade--; 
                campoQuantidadeCurtidas.textContent = quantidade; 
                
                atualizaLocalStorage()
                
                return; //sai da função puxada através do evento click
            }
        }
        //caso o icone não tenha a classe cartao__interacao--curtir, a adiciona e incrementa a quantidade ("curte" aquele cartão)
        iconeCurtidas.classList.add('cartao__interacao--curtir'); 
        quantidade++;
        campoQuantidadeCurtidas.textContent = quantidade; 
        
        atualizaLocalStorage()
    })
}

//atualiza no local storage a classe do icone (se está ou não curtido) e a quantidade
function atualizaLocalStorage() {
    
    const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
    
    cartoesSalvos.forEach( cartao => {
        const quantidadeAtualizada = document.querySelector(`[data-curtir-quantidade="${cartao.id}"]`).textContent
        //compara a quantidade de curtidas do cartão no DOM e no LocalStorage, estando diferentes (ou seja, o usuário interagiu com aquele cartão), nega seu estado anterior no local storage (curtido: true ou false)
        if (quantidadeAtualizada != cartao.infos.quantidadeCurtidas){
            cartao.infos.curtido = !cartao.infos.curtido
        }
        //atualiza a quantidade de curtidas no localStorage    
        cartao.infos.quantidadeCurtidas = quantidadeAtualizada

        localStorage.setItem('dados', JSON.stringify(cartoesSalvos))
    })   
}