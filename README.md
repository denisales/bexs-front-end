# Exame - Bexs Front-end

## Desafio
Desenvolver uma aplicação front-end de acordo com as especificações descritas pela Bexs, utilizando as tecnologias de minha preferência.

## Projeto
O projeto foi desenvolvido pensando em algo grande e escalável, por isso optei em utilizar o framework front-end Vue.js junto com Vue CLI para inicializar as estruturas de pastas.

### Link do projeto:
[Demo Shop](https://gracious-mayer-2d6411.netlify.app/)


## Dependências do projeto e sua utilização

- Axios

- Vee validate - Biblioteca de validação muito poderosa para o Vue, que possibilita criar diversos tipos de validações nos dados de formulário;

- Vue The Mask - Utilizado para criar todas as máscaras de formulário;

- Vuetify - Framework UI Material Design para o Vue, este possui uma infinidade de componentes já testados e funcionais, sendo utilizado para evitar a criação de componentes na mão, tornando o desenvolvimento de qualquer aplicação muito mais eficaz;

- Vue router - Mesmo com o projeto possuindo somente uma única página, decidi utiliza-lo pois como disse o projeto foi pensado para ser grande;

- Vuex -  Configurei uma Store na aplicação somente para exemplo;

- PWA - Inicialiei o projeto de forma que também seja um PWA;

- JEST - Usado para realizar os testes da aplicação;

- @vue/test-utils - Utilizado para auxiliar os testes no front end;

## Estruta do projeto
 - src
    - `/components`
    - `/assets`
    - `/filters` < -- contém os filtros globais utilizados na aplicação.
    - `/helpers` < -- contém as funções auxiliares.
    - `/plugins` < -- contém as configurações de plugins vue.
    - `/router` < -- contém a configuração do Vue router.
    - `/services` < -- contém a configuração do axios e funções que executam as requisições para API's
    - `/store` < -- configuração do Vuex
    - `/styles` < -- contém todos os estilos globais em SCSS.
    - `/validators` < -- contém as configurações e regras de validações do Vee validate
    - `/views`


# Inicializando o projeto

Para executar o projeto é necessário ter o Node.js devidamente instalado e configurado na máquina.

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
