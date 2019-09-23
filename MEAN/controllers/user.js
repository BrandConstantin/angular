'use strict'
/* 
Los errores:
200 - cuando faltan datos, error de servidor, no se ha guardado un dato
400 - no existe un registro en la bd, o un dato en la bd
500 - error de excepción, o de no guardarse bien un dato
*/

//importar model
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

//creamos un metodo que recibe la petición y la devuelve
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
    });
}

function saveUser(req, res) {
    var user = new User();

    console.log(params);

    //recogemos los parametros que llegan por post
    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    //guardar los datos en la BBDD después de encryptar la pass
    if (params.password) {
        //encryptar pass y guardar datos
        bcrypt.hash(params.password, null, null, function(err, hash) {
            user.password = hash;

            if (user.name != null && user.surname != null && user.email != null) {
                //guardar usuario
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al guardar el usuario' });
                    } else {
                        if (!userStored) {
                            res.status(404).send({ message: 'No se ha registrado el usuario' });
                        } else {
                            res.status(200).send({ user: userStored });
                        }
                    }
                });
            } else {
                res.status(200).send({ message: 'Rellana todos los campos' });
            }
        });
    } else {
        res.status(200).send({ message: 'Introduce la contraseña' });
    }
}

module.exports = {
    pruebas,
    saveUser
};