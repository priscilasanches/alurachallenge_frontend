export const montaProjetoComunidade = (dados) => {
        
    const cartao = document.createElement('li')
    cartao.classList.add('cartao')
    
    cartao.innerHTML = 
    `<a href="index.html">
        <article class="editor__campo--box" style="background-color:${dados.infos.cor}" data-box-editor>
            <code class="editor__campo hljs ${dados.infos.linguagem}" data-code></code>
        </article>
    </a>
    <section class="cartao__infos">  
        <h2 class="cartao__titulo" data-titulo>${dados.infos.titulo}</h2>
        <p class="cartao__descricao" data-descricao>${dados.infos.descricao}</p>
        <div class="cartao__infos--botoes hide" data-info>
            <button class="cartao__interacao" data-comentario="botao"><i class="fas fa-comment"></i><span data-comentario="quantidade">9</span></button>
            <button class="cartao__interacao" data-amei="botao"><i class="fas fa-heart" data-amei="icone"></i><span data-id="${dados.id}">${dados.infos.curtidas}</span></button>
            <img src="img/Photo@2x.png" alt="Foto do usuário" class="perfil__imagem cartao__imagem-perfil">
            <p class="perfil__nome">@ Harry</p>
        </div>
    </section>`

    if (dados.infos.curtido) {
        cartao.querySelector('[data-amei="icone"]').classList.add('cartao__interacao--amei')
    }

    cartao.querySelector('code').textContent = dados.infos.codigo
    hljs.highlightElement(cartao.querySelector('code'))

    return cartao
}




  
    


