//importacion
const express = require("express");
const bd = require("./bd");

const usuario = require("./models/index").Usuario
const Role = require("./models/index").Role
const Persona = require("./models/index").Persona
const Categoria = require("./models/index").Categoria
const Producto = require("./models/index").Producto
const RoleUsuario = require("./models/index").RoleUsuario
// migraciones
usuario.sync({ force: true });
Role.sync({ force: true });
Persona.sync({ force: true });
Categoria.sync({ force: true });
Producto.sync({ force: true });
RoleUsuario.sync({ force: true });
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