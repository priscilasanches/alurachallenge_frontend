const botaoAmei = document.querySelectorAll('[data-amei]');
const iconeAmei = document.querySelectorAll('[data-coracao');
const quantidadeAmei = document.querySelectorAll('[data-quantidade]');

for (let i=0; i<botaoAmei.length; i++) { //percorre os cartões
     
    botaoAmei[i].addEventListener('click', () => { 
        
        const classe = iconeAmei[i].classList;
        let quantidade = quantidadeAmei[i].textContent;
        quantidade++;
        quantidadeAmei[i].textContent = quantidade;

        for (let j=0; j<classe.length;j++){ //percorre as classes do item do cartão onde está ocorrendo a interação
            if (classe[j] == 'cartao__interacao--amei') {
                quantidade -= 2; //antes do for há o incremento da quantidade, independente se já havia a classe avaliada, por isso tirar 2 vezes
                quantidadeAmei[i].textContent = quantidade;
            }
        }

        iconeAmei[i].classList.toggle('cartao__interacao--amei');
    })
}
