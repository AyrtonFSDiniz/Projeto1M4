# API NestJS+Prisma+Postgres

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

Para cada rota (Filme, Genero e Participante), será possivel criar, atualizar, buscar e apagar os dados cadastrados.

