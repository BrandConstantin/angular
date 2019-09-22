'use strict'
/* 
Los errores:
200 - cuando faltan datos, error de servidor, no se ha guardado un dato
400 - no existe un registro en la bd, o un dato en la bd
500 - error de excepción, o de no guardarse bien un dato
*/

//creamos un metodo que recibe la petición y la devuelve
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Mongo'
    });
}

module.exports = {
    pruebas
};