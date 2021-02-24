const Sequelize = require("sequelize")
const bd = require("./../bd");

const Usuario = bd.define("usuario", {
    correo: {
        type: Sequelize.STRING,
        unique:  true
    },
    clave: Sequelize.STRING,
    estado: Sequelize.BOOLEAN
});

const Role = bd.define("rol", {
    nombre: {
        type: Sequelize.STRING,
        
    },
    descripcion: Sequelize.TEXT
});

module.exports = {
    Usuario,
    Role
}