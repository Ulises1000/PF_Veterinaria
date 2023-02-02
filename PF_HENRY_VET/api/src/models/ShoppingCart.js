const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("shoppingCart", {
        cod_Cart: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        products_Threshold: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        }
    })
}