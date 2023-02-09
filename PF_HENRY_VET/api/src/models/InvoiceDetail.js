const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("invoiceDetail", {
        cod_product:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
        },
        cod_invoice:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true
        },
        unit_price:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{timestamps:false})
}