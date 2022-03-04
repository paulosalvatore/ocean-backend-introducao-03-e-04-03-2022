const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//              0                    1                2

// [GET] Read All (Ler individualmente)
app.get("/herois", function (req, res) {
    res.send(herois);
});

// [GET] Read Single (by Id) (Ler individualmente pelo ID)
app.get("/herois/:id", function (req, res) {
    // Acesso o parâmetro da rota chamado ID
    const id = req.params.id - 1;

    // Pega o item da lista que corresponde a esse ID
    const item = herois[id];

    res.send(item);
});

app.listen(3000);
