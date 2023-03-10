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
        creditCard_U: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direction_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unsubscribe_U: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
}