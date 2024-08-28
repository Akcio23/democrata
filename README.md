# CRUD Blog

> Aplicação que realiza um CRUD, simulando um blog de posts sobre variados assuntos.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Iniciando o Projeto](#iniciando-o-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto foi realizado como parte do processo seletivo da empresa DEMOCRATA. A aplicação permite que os usuários listem, criem, alterem e excluam posts de forma rápida e eficiente, simulando um blog.

## Funcionalidades

- **Create**: Permite a criação de novos posts.
- **Read**: Exibe uma lista de todos os posts criados.
- **Update**: Permite a edição de posts existentes.
- **Delete**: Permite a exclusão de posts.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e bibliotecas:

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript server-side.
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições.
- [Json-server](https://www.npmjs.com/package/json-server) - Simulador de API REST para desenvolvimento rápido.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com/) - Controle de versão.
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) - Gerenciadores de pacotes.
- [Json-server](https://www.npmjs.com/package/json-server) - Simulador de API REST.

Além disso, é recomendado ter um editor de código, como [VSCode](https://code.visualstudio.com/).

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Akcio23/democrata

2. Acesse o diretório do projeto:

    cd democrata

3. Instale as dependências:

        npm install
            #ou
        yarn install

## iniciando o projeto

Para iniciar o projeto, é necessário executar o json-server para simular a API e o banco de dados localmente. Siga os passos abaixo:
 
1. Execute o json-server na porta 3000: #npx json-server --watch db.json --port 3000

2. Com o servidor JSON rodando, inicie o servidor de desenvolvimento do React:

    npm run dev
        #ou
    yarn dev

3. Abra http://localhost:${porta-de-execução} no seu navegador para visualizar a aplicação.

## Contribuição
Contribuições são bem-vindas! Se você tiver alguma ideia ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Contato
Pedro Akcio - dev.akcio@gmail.com

Link do Projeto: https://github.com/Akcio23/democrata