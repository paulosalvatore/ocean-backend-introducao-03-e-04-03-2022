const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/herois', function (req, res) {
    res.send('Ler todos os heróis')
})

app.listen(3000)
