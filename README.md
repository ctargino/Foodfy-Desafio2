# Foodfy-Desafio2

Seguimento do desafio Foodfy Rocketseat - Launchbase, onde, neste modulo, se trabalhou o Back End e refatoração de arquivos.

#Passos
- [x] Instalação dos pacotes do NodeJs (npm init -y)
- [x] Instalação dos pacotes do Express (npm install express)
- [x] Instalação do nodemon em modo Desenvolvimento (npm install -D nodemon)
- [x] Instalação do template engine "nunjucks" (npm install nunjucks)

Edição do package.json: 
```
  ""scripts": {
    "start": "nodemon server.js"
  },
```
Criação de rotas através do __express__: *"server.listen" "server.get" "function(req,res)" "res.send" "res.render"*

Todas as Html's foram refatoradas para o formato __".njk"__ e os recursos "block" utilizado de forma sistemática afim de limpar o cdigo e reutilizar códigos previamente escritos: *{{%block name%}} {{%endblock%}} {{%for 0 in 00%}} {{%endfor%}}*

Criação de página de receitas que chama a receita do banco de dados "data.js", trazendo automaticamente o nome da receita, seus ingredientes, modo de preparo, imagem da receita

Criação de botão "Esconder" - "Mostrar" que mostra/esconde determinado bloco da receita.

![Captura de tela de 2020-03-24 16-37-00](https://user-images.githubusercontent.com/19331255/77479830-4af6d580-6dff-11ea-9fdb-c181f8b07c1a.png)
![Captura de tela de 2020-03-24 16-37-20](https://user-images.githubusercontent.com/19331255/77479832-4b8f6c00-6dff-11ea-9705-3be68689ccfd.png)
![Captura de tela de 2020-03-24 18-44-09](https://user-images.githubusercontent.com/19331255/77479916-7bd70a80-6dff-11ea-9394-89c6610afb4c.png)

