<h1>Blogs API</h1>
<p>Este projeto foi desenvolvido em novembro de 2022 durante meus estudos na <a href="https://www.betrybe.com/">Trybe</a>.</p>

<br/>

<h2>O quê foi desenvolvido</h2>
<p>Foi desenvolvido uma API e um banco de dados para a produção de conteúdos para um blog. Foi utilizado o Node.js e o pacote sequelize para fazer um CRUD de posts.</p>
<br/>
  
<h2>O quê foi avaliado</h2>
<ul>
  <li>Aderência do código às especificações</li>
  <li>Organização do código;</li>
  <li>Qualidade e a cobertura dos testes.</li>
</ul>

<br/>

<h2>Endpoints</h2>


<h3>/login</h3>

| Método | Função | Corpo |
|---|---|---|
|POST| Realiza login e retorna o token | { "email": string, "password": string }|

<hr />

<h3>/user</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna todos os usuários | |
|POST| Cadastra pessoa usuária | { "displayName": string, "email": string, "password": string, "image": url(Opcional) } |

<h3>/user/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna usuário com base no id | |

<h3>/user/me</h3>

| Método | Função | Corpo |
|---|---|---|
|DELETE| Deleta usuário | |

<hr />

<h3>/categories</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna todas as categorias | |
|POST| Cadastra categoria | { "name": string } |

<hr />

<h3>/post</h3>

| Método | Função | Corpo |
|---|---|---|
|POST| Retorna todos os posts | |
|POST| Cadastra um post | { "title": string, "content": string, "categoryIds": arrayOfNumbers } |

<h3>/post/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna post com base no id | |
|PUT| Alterar post com base no id | { "title": string, "content": string } |
|DELETE| Deleta post com base no id  | |

<h3>/post/search?q=:searchTerm</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna posts com base na query | |

<br/>

<h2>Guia de instalação</h2> 
<ol>
  <li>
    <p>Clone o repositório</p>
    <pre>git clone git@github.com:celso-rodrigo/blogs-api.git</pre>
  </li>
  <li>
    <p>Abra a pasta do repositório</p>
  </li>
  <li>
    <p>Instale as dependências</p>
    <pre>npm install</pre>
  </li>
  <li>
    <p>Inicie o projetot</p>
    <pre>npm start</pre>
  </li>
</ol>
