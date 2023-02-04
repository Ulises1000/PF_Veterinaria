const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("favorite", {
        id_favorito: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false

        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: false

        },
        id_usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_producto: {
            type: DataTypes.STRING,
            allowNull: false

        },
        is_favorite:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }


    })
}