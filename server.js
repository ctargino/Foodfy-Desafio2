const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})

server.listen(5000, function(){
  console.log("Server is running!!")
})

server.get("/", function (req, res) {
  return res.render("index", { items: recipes })
})

server.get("/about", function (req, res) {
  return res.render("about")
})

server.get("/recipes", function (req, res) {
  return res.render("recipes", {items: recipes })
})

server.get("/recipe", function (req, res) {
  const id = req.query.id

  const recipe = recipes.find(function(recipe) {
    return recipe.id == id
  })

  return res.render("recipe", { item: recipe })
})