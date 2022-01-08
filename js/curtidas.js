//Marcação e contagem de curtidas
export function atualizaCurtidas(card) {
    const botaoCurtidas = card.querySelector('[data-amei="botao"]')
    const campoQuantidadeCurtidas = card.querySelector('[data-id]')
    const iconeCurtidas = card.querySelector('[data-amei="icone"]')

    botaoCurtidas.addEventListener('click', () => { 
        let quantidade = campoQuantidadeCurtidas.textContent;
        const classe = iconeCurtidas.classList;

        for (let i=0; i<classe.length;i++){ //percorre as classes para verificar se aquele cartão já foi curtido
            if (classe[i] == 'cartao__interacao--amei') {
                iconeCurtidas.classList.remove('cartao__interacao--amei'); //retira a classe que marca o botão como curtido
                quantidade--; //diminui a quantidade (a pessoa está retirando sua curtida)
                campoQuantidadeCurtidas.textContent = quantidade; 
                save()
                return; //sai da função puxada através do evento click
            }
        }
        
        iconeCurtidas.classList.add('cartao__interacao--amei'); //adiciona a classe que marca o botão como curtido
        quantidade++;
        campoQuantidadeCurtidas.textContent = quantidade; //atualiza a quantidade de curtidas
        save()
    })
}

function save() {
    const cartoesSalvos = JSON.parse(localStorage.getItem('dados')) || []
    
    cartoesSalvos.forEach( cartao => {
        let quantidadeAtualizada = document.querySelector(`[data-id="${cartao.id}"]`).textContent
        
        if (quantidadeAtualizada != cartao.infos.curtidas){
            let curtido = !cartao.infos.curtido
            cartao.infos.curtido = curtido
        }
            
        cartao.infos.curtidas = quantidadeAtualizada
        localStorage.setItem('dados', JSON.stringify(cartoesSalvos))
    })   
}
