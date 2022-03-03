const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const herois = ['Mulher Maravilha', 'Capitã Marvel', 'Homem de Ferro']

app.get('/herois', function (req, res) {
    res.send(herois)
})

app.listen(3000)
