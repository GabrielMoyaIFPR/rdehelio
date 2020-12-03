const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://aula:aula123456@cluster0.uc3sg.mongodb.net/aula?retryWrites=true&w=majority', {

    useUnifiedTopology: true,
    useNewUrlParser: true

});

server.use(express.json());

server.use(routes);

server.listen(3333);