const Sequelize = require("sequelize")
const bd = require("./../bd");


const Usuario = bd.define("Usuario", {
    correo: {
        type: Sequelize.STRING(50),
        unique:  true
    },
    clave: Sequelize.STRING(30),
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

// Persona
const Persona = bd.define("Persona", {
    nombres: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    ci: Sequelize.STRING(15),
    usuario_id: {
        type: Sequelize.INTEGER,
        references: {model: Usuario, key: 'id'}
    }
},{

})
// Relacion de Uno a Uno
Usuario.hasOne(Persona, {foreignKey: 'usuario_id'});
Persona.belongsTo(Usuario, {foreignKey: 'usuario_id'});

const Categoria = bd.define("Categoria", {
    nombre: {
        type: Sequelize.STRING(50),
        unique: true
    },
    descripcion: Sequelize.TEXT
});

const Producto = bd.define("Producto", {
    nombre: Sequelize.STRING,
    cantidad: Sequelize.INTEGER,
    precio: Sequelize.DECIMAL(10,2),
    categoria_id: {
        type: Sequelize.INTEGER,
        references: {model: Categoria, key: 'id'}
    } 
});

// Relación UNO a MUCHOS
Categoria.hasMany(Producto, {foreignKey: 'categoria_id'});
//Producto.belongsTo(Categoria, {foreignKey: 'categoria_id'});


const Role = bd.define("Role", {
    nombre: {
        type: Sequelize.STRING(30),        
    },
    descripcion: Sequelize.TEXT
});

//Relacion de N a M
const RoleUsuario = bd.define('role_usuario'); 
Usuario.belongsToMany(Role, {through: RoleUsuario});
Role.belongsToMany(Usuario, {through: RoleUsuario});

module.exports = {
    Usuario,
    Role,
    Persona,
    Categoria,
    Producto,
    RoleUsuario

}