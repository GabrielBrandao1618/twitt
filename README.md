# Twitt

Um mini-clone do Twitter criado com o objetivo de replicar algumas de suas funcionalidades

## Sumário

- [Rodando localmente](#rodando-localmente)
- [Tecnologias](#tecnologias)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Funcionalidades](#funcionalidades)

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
