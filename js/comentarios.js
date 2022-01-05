export function comentarios(card){
    const botaoComentario = card.querySelector('[data-comentario="botao"]')
    const quantidadeComentario = card.querySelector('[data-comentario="quantidade"]')
    const areaBotoes = card.querySelector('[data-info]')
    const textoComentarios = card.querySelector('[data-comentario="texto"]')
        
    botaoComentario.addEventListener('click', () => {
        const areaComentarios = document.createElement('div')
        const conteudo = '<textarea class="entrada" data-comentario="texto"></textarea>'
        areaComentarios.classList.add('comentarios')
        areaComentarios.innerHTML = conteudo
        areaBotoes.appendChild(areaComentarios)

        //adicionar classe hide, para aparecer novamente apenas se o botão de comentários for clicado
        
        let quantidade = quantidadeComentario.textContent;

        //adicionar if para incrementar apenas se for incluído novo comentário
        quantidade++;
        quantidadeComentario .textContent = quantidade; //atualiza a quantidade de curtidas
    })
}


