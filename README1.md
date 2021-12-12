﻿# API NestJS+Prisma+Postgres

Neste primeiro projeto do módulo 4 de Backend da Blue Ed Tech iremos criar uma API com todo o CRUD atráves do NestJS, onde poderá se cadastrar Filmes, Gêneros e Participantes.


# Instalações
Antes de mais nada, tenha instalado na sua máquina a versão mais recente do NodeJS, para que todas as dependências sejam instaladas corretamente.
Também será necessário ter instalado localmente o database Postgresql e colocar no arquivo `.envbkp` os dados do seu banco de dados.
Prosseguindo, para utilizar a  API, é necessário inicializar via CMD (se você utiliza o VS Code e abre um terminal, por padrão ele abre no PowerShell, só que por ele há grandes chances de dar vários erros de permissão e instalação das dependências do Nest) o comando abaixo:

``` npm install ```

Este comando irá instalar e atualizar todas as dependências necessárias para rodas a API.

# Rodando a API

Para iniciar a API rode o seguinte comando:

    npx prisma studio

Após ativar esse comando deve-se abrir uma guia do seu navegador padrão contendo os botões para cadastrar as informações de Filmes, Participantes e Gênero.


# Utilizando a API

No cadastro de Filmes, existe 6 campos que podemos cadastrar:

    nome
    imagem
    data_lancamento
    tempo_duracao
    genero
    participante

Para `genero` e `participante` haverá um cadastro a parte para cada um, onde haverá os seguintes campos:
* genero: nome e filme.
* participante: nome, imagem, data_nascimento, ator, filme e filmeId.

Para cada rota (Filme, Genero e Participante), será possível criar, atualizar, buscar e apagar os dados cadastrados.



# Utilizando o Thunder Client

A seguir será mostrado a estrutura dos dados para fazer as requisições utilizando o Thunder Client.

### Rota Get findAll 

Rota ao qual podemos listar todos os dados cadastrados.

### Rota Get findOne 

Rota que apenas seleciona o item específico, com base no id passado no HTTP.

### Rota Post create

Rota que cadastra um novo dado, onde devemos passa-los da seguinte forma:

* Filme

```json
{
    "nome":"nomefilme",
    "imagem":"https://site",
    "data_lancamento":"12/12/12",
    "tempo_ducacao": "155 min"
}
```



* Genero

  ```json
  {
      "nome":"nomedogenero"
  }
  ```

  

  * Participante

  ```json
  {
      "nome":"nomedoparticipante",
      "imagem":"https://site",
      "data_nascimento":"20/12/1980",
      "ator":"ator",
      "filme":"filme",
      "filmeId":"iddofilme"
  }
  ```

  ### Rota Patch update

  Essa rota atualiza a informação. É diferente em relação ao Put no fato de quê com ela é capaz de se atualizar apenas uma das informações da lista cadastrada, ao contrário do Put. necessita do id para funcionar.

  

  ### Rota Delete remove

  Rota responsável por deletar informações. Assim como a rota Patch, também necessita do id para deletar selecionar a informação a ser deletada.
