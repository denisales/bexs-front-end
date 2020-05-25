# Exame - Bexs Front-end

## Desafio
Desenvolver uma aplicação front-end de acordo com as especificações descritas pela Bexs, utilizando as tecnologias de minha preferência.

## Projeto
O projeto foi criado pensado como se fosse realmente grande e escalavel, por isso optei utilizar o framewrok front end Vue.js junto com Vue CLI para inicializar as estruturas de pastas.



## Dependências do projeto e o porque

- Axios

- Vee validate - Bilioteca de validação muito poderosa para o vue, com ela é possivel criar diversos tipos de validações nos dados de formulário;

- Vue the mask - Utilizado para criar todas as mascaras de formulário;

- Vuetify - Framework UI Material Design para o Vue, decidi utilizá-lo para evitar ter que criar diversos componentes na mão, já que o Vuetify possui uma gama muito grande de componentes testados e funcionais tornando o desenvolvimento de qualquer aplicação muito mais rápido. 

- Vue router - Mesmo com o projeto possuindo somente uma única página, decidi utiliza-lo pois como disse o projeto foi pensado para ser grande.

- Vuex -  Configurei uma Store na aplicação somente para exemplo.

- PWA - Inicialiei o projeto de forma que também seja um PWA.

- JEST - Usado para realizar testes na aplicação.

- @vue/test-utils - Utilizado para auxiliar os testes no front end.

## Estruta do projeto
 - src
    - /assets
    - /components
    - /filters < -- contem filtros globais para ser utilizado na aplicação.
    - /helpers < -- constem funcões auxiliares
    - /plugins < -- constem as configurações de plugins vue.
    - /router < -- contem a configuração do Vue router
    - /services < -- contem a configuração do axios e funções que executam requisições para api's
    - /store < -- configuração do Vuex
    - /styles < -- contem todos os estilos globais em scss.
    - /validators < -- contem a configuração e regras de validações do vee validate
    - /views


# Inicializando o projeto

Para executar o projeto é necessario ter o Node.js devidamente instalado e configurado na maquina.

## Instalar dependências
```
npm install
```

### Compilar e executar a aplicação no modo de desenvolvimento com  hot-reloads
```
npm run serve
```

### Compilar e minificar para produção
```
npm run build
```

### Executar testes unitários 
```
npm run test:unit
```

### Executar o Eslint e corrigir os arquivos
```
npm run lint
```
