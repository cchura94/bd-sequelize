//importacion
const express = require("express");


//configuracion
const app = express();



//Levantar el servidor
app.listen(3000, ()=>{
    console.log("Servidor Levantado");
})