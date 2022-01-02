(() => {
    const atualizaCurtidas = (card) => {
        const botaoAmei = card.querySelector('[data-amei="botao"]')
        const quantidadeAmei = card.querySelector('[data-amei="quantidade"]')
        const iconeAmei = card.querySelector('[data-amei="icone"]')

        botaoAmei.addEventListener('click', () => { 
            let quantidade = quantidadeAmei.textContent;
            const classe = iconeAmei.classList;

            for (let i=0; i<classe.length;i++){ 
                if (classe[i] == 'cartao__interacao--amei') {
                    //retira a classe cartao__interacao--amei
                    iconeAmei.classList.toggle('cartao__interacao--amei'); 
                    //diminui a quantidade (a pessoa está retirando sua curtida)
                    quantidade--; 
                    quantidadeAmei.textContent = quantidade;
                    //sai da função puxada através do evento click
                    return;
                }
            }
            
            iconeAmei.classList.toggle('cartao__interacao--amei');
            quantidade++;
            quantidadeAmei .textContent = quantidade;
        })
    }

    const cards = document.querySelectorAll('[data-card]')

    cards.forEach(card => {
        const botoesSecao = card.querySelector('[data-info]')
        
        card.addEventListener('mouseenter', () => {
            botoesSecao.classList.remove('hide')
        })
        card.addEventListener('mouseleave', () => {
            botoesSecao.classList.add('hide')
        })

        atualizaCurtidas(card)
    })
}) ()
