'use strict';

var mongoose = require('mongoose');
var app = require('./app');
mongoose.Promise = global.Promise;
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/boxyfy', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("La conexión a la base de datos está funcionando correctamente...");

        app.listen(port, function() {
            console.log("Servidor del api rest de musica escuchando en http://localhost:" + port);
        });
    }
});