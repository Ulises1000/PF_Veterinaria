const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        cod_User: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_U: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1
        },
        unsubscribe_U: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
}