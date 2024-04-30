# Diário de Notícias (app)

Diário de Notícias é um projeto mobile que oferece acesso fácil e rápido às últimas notícias disponíveis na API de Notícias do IBGE. Desenvolvido com React Native, o projeto, embora bastante simples, esboça uma ideia de como desenvolver em poucas horas um aplicativo intuitivo e de fácil uso para notícias.

## Instalação

Para começar, certifique-se de ter o Node.js instalado em seu computador. Em seguida, clone o repositório do projeto e instale as dependências usando npm, yarn ou pnpm:

```bash
npm install
# ou 
yarn install
# ou
pnpm install 
```

## Rodando o projeto localmente

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento localmente. Basta executar um dos seguintes comandos:

```bash
npm start
# ou 
npx expo start
```

Ambos os comandos abrem um QRCode no terminal, que pode ser lido por seu smartphone. Importante lembrar que é preciso ter o Expo Go instalado, e o mesmo pode ser baixado de sua loja de aplicativos. Pode-se testar tanto em Android quanto iOS!

Outra possibilidade é ter um emulador instalado em sua máquina. Ao executar o emulador (por exemplo, Android Studio), basta teclar A no terminal para que o Expo se encarregue de instalar o aplicativo em seu emulador. No Mac o procedimento é parecido, mas você utilizará o XCode para isso.

## Sobre o Projeto

O Diário de Notícias tem como objetivo fornecer um ambiente amigável para os usuários se manterem informados sobre os acontecimentos mais recentes publicados pelo IBGE. Ele oferece uma página inicial simples onde os usuários podem visualizar as últimas notícias e carregar mais notícias conforme desejarem. No cabeçalho, é possível abrir uma barra de Menu ou um botão de pesquisa. Pode-se pesquisar livremente para retornar mensagens filtradas.


![Home](https://i.ibb.co/nb7Rn3v/Design01.png "Home")

![Details](https://i.ibb.co/5hFBC0h/Design02.png "Details") 

![Profile](https://i.ibb.co/yFt9sKy/Design03.png "Profile")

De modo a componentizar um pouco a aplicação, foram implementados os componentes Header, Footer, NewsList e Sidebar. Entende-se que, para a pouca complexidade do proejto, são necessários para suprir a construção e organização das telas. Em um projeto maior, com certeza seriam revisadas algumas regras aplicadas, bem com o uso de context ou redux.

## Principais Dependências

* **React Native**: Framework para desenvolvimento de aplicativos móveis utilizando JavaScript (TypeScript) )e React.
* **React Query**: O React Query facilita a busca e o gerenciamento de dados provenientes da API, garantindo uma experiência de usuário mais fluida e responsiva.
* **React Navigation**: Biblioteca de roteamento e navegação para aplicativos React Native.
* **Tailwind CSS**: Optei pelo Tailwind CSS para estilizar o projeto devido à sua abordagem baseada em classes e sua ampla gama de utilitários de estilo, permitindo uma estilização rápida e consistente dos componentes.
* **StyleSheet:** Módulo do React Native para criar estilos de componentes usando objetos JavaScript. Foi mesclado na aplicação apenas para fins comparativos.

Devido ao curto prazo para submissão da aplicação, muita coisa foi deixada para aperfeiçoar no futuro. Novos filtros por período, por exemplo, ou uma refatoração de componente NewsList que acabou crescendo mais que o esperado, dentre outros. Contribuições e Pull Requests são sempre bem-vindas.

Obrigado pela visita 😁 !
