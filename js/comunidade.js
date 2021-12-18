const botaoAmei = document.querySelectorAll('[data-amei="botao"]');
const iconeAmei = document.querySelectorAll('[data-amei="icone"]');
const quantidadeAmei = document.querySelectorAll('[data-amei="quantidade"]');

//Percorre os cartões para verificar em qual está havendo a interação do usuário
for (let i=0; i<botaoAmei.length; i++) { 
     
    botaoAmei[i].addEventListener('click', () => { 
        //pega a quantidade de "amei" daquele cartão       
        let quantidade = quantidadeAmei[i].textContent;

        //verifica se o cartao clicado já estava marcado como "amei" (classe cartao__interacao--amei)
        const classe = iconeAmei[i].classList;
        for (let j=0; j<classe.length;j++){ 
            if (classe[j] == 'cartao__interacao--amei') {
                //retira a classe cartao__interacao--amei
                iconeAmei[i].classList.toggle('cartao__interacao--amei'); 
                //diminui a quantidade (a pessoa está retirando sua curtida)
                quantidade -= 1; 
                quantidadeAmei[i].textContent = quantidade;
                //sai da função puxada através do evento click
                return;
            }
        }
        
        //caso não haja a classe "cartao__interacao--amei", a acrescenta e incrementar a quantidade de "amei"
        iconeAmei[i].classList.toggle('cartao__interacao--amei');
        quantidade++;
        quantidadeAmei[i].textContent = quantidade;
    })
}
