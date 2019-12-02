# ApollusEHS
Avaliação Dev

# Apollusehs-core

Pré-requisitos:

* Java 11
* Maven
* MySQL
* Eclipse
* Git

Configuração do Projeto:

Clone o projeto no seu ambiente local.
Abra o Eclipse. Importe como projeto Maven.

Banco de Dados:
Crie um schema no MySQL.
Abra o arquivo application.properties e altere os dados do banco de dados.

spring.datasource.url=jdbc:mysql://localhost:3306/nome_schema?useTimezone=true&serverTimezone=UTC
spring.datasource.username=nome_usuario
spring.datasource.password=senha_usuario

Execução do Projeto:
Execute no banco de dados os inserts iniciais de usuário que se encontra no arquivo "dml.sql".
Execute a classe "Startup.java" para criar a base e subir o serviço.

Acesse o link abaixo e veja todos os serviços disponíveis.
http://localhost:8080/swagger-ui.html


# Apollusehs-web

Pré-requisitos

* Node.js
* Angular-cli
* Visual Studio Code

Configuração do Projeto:
Clone o projeto no seu ambiente local.
Abra o Visual Studio Code. Abra a pasta do projeto.

Execução do projeto:
Execute os comandos baixo no terminal do Visual Studio Code.
npm install

ng serve

Acesse o link: http://http://localhost:4200/


