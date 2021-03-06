'use strict'

var express = require('express');
var UserController = require('../controllers/user');

//vamos a cargar el router de express
var api = express.Router();

//crear ruta
api.get('/probando-controlador', UserController.pruebas);
api.post('/registro', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;