//cria a estrutura de cada cartão de projeto, recebendo como parâmetro os dados dos projs salvos no local storage (advindos de carregarComunidade.js)
export const montaProjetoComunidade = (dados) => {
        
    const cartao = document.createElement('li')
    cartao.classList.add('cartao')
    
    cartao.innerHTML = 
    `<section class="editor__campo--box" style="background-color:${dados.infos.cor}" data-box-editor>
        <code class="editor__campo hljs ${dados.infos.linguagem}" data-code></code>
    </section>
    <section class="cartao__infos">  
        <h2 class="cartao__titulo" data-titulo>${dados.infos.titulo}</h2>
        <h3 class="cartao__linguagem">${dados.infos.linguagem}</h3>
        <p class="cartao__descricao" data-descricao>${dados.infos.descricao}</p>
        <div class="cartao__infos--botoes esconder" data-interacao><span class="numero-id" data-numero-id>${dados.id}</span>
            <button class="cartao__interacao" data-comentario="botao"><i class="fas fa-comment"></i><span data-comentario="quantidade">9</span></button>
            <button class="cartao__interacao" data-curtir-botao><i class="fas fa-heart" data-curtir-icone></i><span data-curtir-quantidade="${dados.id}">${dados.infos.quantidadeCurtidas}</span></button>
            <img src="img/Photo@2x.png" alt="Foto do usuário" class="perfil__imagem cartao__imagem-perfil">
            <p class="perfil__nome">@ Harry</p>
            <button class="cartao__interacao" data-excluir><i class="far fa-trash-alt"></i></button>
        </div>
    </section>`
    
    
    //se no LocalStorage tiver a informação salva de que o cartão foi curtido, adiciona a classe ao respectivo ícone que o deixa vermelho
    if (dados.infos.curtido) {
        cartao.querySelector('[data-curtir-icone]').classList.add('cartao__interacao--curtir')
    }

    //aplica highlight aos códigos dos cartões, conforme linguagem selecionada    
    cartao.querySelector('code').textContent = dados.infos.codigo
    hljs.highlightElement(cartao.querySelector('code'))

    return cartao
}




  
    


