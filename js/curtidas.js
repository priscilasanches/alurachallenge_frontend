//Marcação e contagem de curtidas
export function atualizaCurtidas(card) {
    const botaoAmei = card.querySelector('[data-amei="botao"]')
    const quantidadeAmei = card.querySelector('[data-amei="quantidade"]')
    const iconeAmei = card.querySelector('[data-amei="icone"]')

    botaoAmei.addEventListener('click', () => { 
        let quantidade = quantidadeAmei.textContent;
        const classe = iconeAmei.classList;

        for (let i=0; i<classe.length;i++){ //percorre as classes para verificar se aquele cartão já foi curtido
            if (classe[i] == 'cartao__interacao--amei') {
                iconeAmei.classList.remove('cartao__interacao--amei'); //retira a classe que marca o botão como curtido
                quantidade--; //diminui a quantidade (a pessoa está retirando sua curtida)
                quantidadeAmei.textContent = quantidade; 
                return; //sai da função puxada através do evento click
            }
        }
        
        iconeAmei.classList.add('cartao__interacao--amei'); //adiciona a classe que marca o botão como curtido
        quantidade++;
        quantidadeAmei .textContent = quantidade; //atualiza a quantidade de curtidas
    })
}
