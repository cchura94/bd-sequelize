//importacion
const express = require("express");
const bd = require("./bd");
const usuario = require("./models/index").Usuario
const Role = require("./models/index").Role
// migraciones
usuario.sync({ force: true });
Role.sync({ force: true });
// 1 : 1
// 1 : N
// N : M
// Consultas ORM


//configuracion
const app = express();

// Prueba de Conexion Base de datos
try {
    bd.authenticate();
    console.log('Conexion Correcta a la BD.');
  } catch (error) {
    console.error('ERROR DE CONEXION A LA BD: ', error);
  }


//Levantar el servidor
app.listen(3000, ()=>{
    console.log("Servidor Levantado");
})