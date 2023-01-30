const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("product", {
        codProduct: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        unit_price: {
            type: DataTypes.FLOAT
        },
        stock: {
            type: DataTypes.INTEGER
        },
        image_url: {
            type: DataTypes.STRING
        },
        unsubscribe: {
            type: DataTypes.BOOLEAN            
        },
    })
}