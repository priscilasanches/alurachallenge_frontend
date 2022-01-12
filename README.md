<div align="center">
  
  <img align="center" src="img/logo.png" width="200">

  <h3 align="center">Alura-DEV Code Editor</h3>



  <p align="center">Editor e Comunidade de trechos de códigos desenvolvido durante Challenge de Front-End da Alura</p>
    <a href="https://github.com/priscilasanches/alurachallenge_frontend"><strong>Explore o projeto »</strong></a>
    <br>
    <br>
    <a href="https://alurachallenge-frontend.vercel.app/">Visualizar o projeto</a>
    ·
    <a href="https://github.com/priscilasanches/alurachallenge_frontend/issues">Reportar Bug</a>

</div>

## Sobre o projeto
Este projeto foi desenvolvido com fins acadêmicos, buscando fixar conhecimentos recém-adquiridos em HTML, CSS e JavaScript, não sendo utilizado, até este momento, nenhum framework para seu desenvolvimento.
<br>A ideia do projeto, bem como seu design, foram fornecidos pela Alura.
<br>
<br>

### Utilizando o editor

Você pode testar o editor através deste <a href="https://alurachallenge-frontend.vercel.app/">link</a>. Os dados do projeto adicionados e salvos a partir da página principal da aplicação ficam salvos localmente em seu navegador, através do local Storage, e você poderá visualizá-los na página comunidade.
<br>
<br>

### Funcionalidades implementadas
Na página principal da aplicação (editor de código) é possivel adicionar um trecho de código, título, descrição e linguagem utilizada no projeto, além de ser possivel personalizá-lo através da aplicação de highlight e da escolha de uma cor de fundo. Ao clicar em salvar projeto, é dado um feedback de que o cartão foi salvo na página de comunidades. Caso o código e o título não tenham sido digitados, será dado feedback no sentido de preencher esses campos antes de salvar o projeto.<br>
Na página comunidade, são carregados os projetos cujas informações estejam salvas no Local Storage. É possível interagir com esses cartões curtindo-os (o botão para tanto aparece ao passar o mouse sobre o cartão do projeto que se deseja interagir). A "curtida" ficará salva no local storage, podendo ser curtido uma única vez (ao clicar uma segunda vez, a curtida será desmarcada e tal opção permanecerá salva).<br>
O campo de pesquisa realiza uma busca nos campos de título e descrição dos projetos da página comunidade, não sendo case-sensitive.
<br>
<br>

### Funcionalidades em desenvolvimento

<ul>
  <li>Botão de exclusão de cartões da página de comunidade</li>
  <li>Tag da linguagem utilizada, nos projetos em Comunidade</li>
</ul>
<br>

### Implementações que requerem mais estudos

<ul>
  <li>Alteração de usuários</li>
  <li>Viabilizar utilização por mais de um usuário</li>
  <li>Botão de comentários na página comunidade</li>
  <li>Utilizar um framework SPA para montar o editor de código</li>
  <li>Criar opção de exportar o código na extensão escolhida</li>
  <li>Exportação do código em png, svg ou jpg</li>
  <li>Botão de edição dos projetos salvos na página Comunidade, devolvendo seu conteúdo à página principal</li>
</ul>



