const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://caffeee:caffeee17k@cluster0-uj485.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
//req.body = acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);

