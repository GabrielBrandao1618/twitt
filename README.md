# Twitt

Um mini-clone do Twitter criado com o objetivo de replicar algumas de suas funcionalidades

## Sumário

- [Rodando localmente](#rodando-localmente)
- [Tecnologias](#tecnologias)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Funcionalidades](#funcionalidades)
- [Referência da api](#referência-da-api)


## Tecnologias

- Node.js - Ambiente de execução Javascript
- NestJS - Framework back-end
- PrismaORM - ORM
- Jest - Testing library
- SQLite - Banco de dados

## Funcionalidades

- Cadastro e configuração de conta
- Criação e edição de Twitts
- Autenticação JWT com refresh token

## Rodando localmente

Clone o projeto

```bash
git clone https://github.com/GabrielBrandao1618/twitt
```

Entre no diretório do projeto

```bash
cd twitt
```

Instale as dependências

```bash
yarn install
```

Defina as variáveis de ambiente, como mostrado em:
[Variáveis de ambiente](#variáveis-de-ambiente)

Carregue o schema no banco de dados

```bash
yarn prisma db push
```

Inicie o servidor

```bash
yarn start
```

Em modo de desenvolvimento

```bash
yarn dev
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto conforme o arquivo .env.example

`DATABASE_URL` - A URL do banco de dados, que deve ser prefixada com `file:` no caso de um arquivo SQLite

`JWT_SECRET` - Um valor aleatório que pode ser um UUID, por exemplo

`JWT_REFRESH_SECRET` - Um valor aletório que pode ser um UUID e deve ser diferente do `JWT_SECRET`

## Referência da api

### GET `/user`

Retorna todos os usuários

Exemplo de resposta:
```json
[
  {
    "id": "cb3b8f03-4e66-445e-832d-d4b56842b728",
    "bio": "Hello everybody",
    "name": "John Doe",
    "user": "johndoe1",
    "createdAt": "2023-01-07T17:07:24.363Z"
  }
]
```

### POST `/user`
Cadastra um usuário

Exemplo de corpo de requisição:
```json
{
  "name": "John Doe",
  "user": "johndoe1",
  "password": "password123" // não use uma senha desse tipo!!!
}
```
Exemplo de resposta do servidor
```json
{
  "id": "cb3b8f03-4e66-445e-832d-d4b56842b728",
  "bio": "",
  "name": "John Doe",
  "user": "johndoe1",
  "createdAt": "2023-01-07T17:07:24.363Z"
}
```