export const enviaProjetoParaComunidade = (dados) => {
    
    const listaCartoes = document.querySelector('.lista-cartoes')
       
    const cartao = document.createElement('li')
    cartao.classList.add('cartao')
    
    cartao.innerHTML = 
    `<a href="index.html">
        <article class="editor__campo--box" style="background-color:${dados.cor}" data-abrirEditor>
            <code class="editor__campo hljs">${dados.codigo}</code>
        </article>
    </a>
    <section class="cartao__infos">  
        <h2 class="cartao__titulo" data-abrirEditor>${dados.titulo}</h2>
        <p class="cartao__descricao" data-abrirEditor>${dados.descricao}</p>
        <div class="cartao__infos--botoes hide" data-info>
            <button class="cartao__interacao" data-comentario="botao"><i class="fas fa-comment"></i><span data-comentario="quantidade">9</span></button>
            <button class="cartao__interacao" data-amei="botao"><i class="fas fa-heart" data-amei="icone"></i><span data-amei="quantidade">9</span></button>
            <img src="img/Photo@2x.png" alt="Foto do usuário" class="perfil__imagem cartao__imagem-perfil">
            <p class="perfil__nome">@ Harry</p>
        </div>
    </section>`

    listaCartoes.appendChild(cartao)
 }




  
    


