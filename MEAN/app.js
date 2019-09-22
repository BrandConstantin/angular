'use strict';

var express = require('express');
var bodyParser = require('body-parser');

//crear el objeto express
var app = express();

//cargar rutas
var user_routes = require('./routes/user');

//configurar body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar cabeceras http

//carga de rutas base
app.use('/api', user_routes);

//ejemplo de ruta
/*app.get('/pruebas', function(req, res) { //una función de callback
    res.status(200).send({ message: "Bienvenido al curos" });
});*/

//exportamos modulo
module.exports = app;