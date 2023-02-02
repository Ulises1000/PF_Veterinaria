const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("breed", {
        /*numero codificado con UUIDV4 para identificar la raza*/
        id_breed:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        /*Especie*/
        kind:{
            type:DataTypes.STRING
        },
        /*Nombre*/
        name:{
            type:DataTypes.STRING
        },
        /*Rango de Peso*/
        WeightRange:{
            type:DataTypes.STRING
        },
        /*Rango de Altura*/
        HeightRange:{
            type:DataTypes.STRING
        },
        /*Dar de baja*/
        unsuscribe:{
            type:DataTypes.BOOLEAN
        }
    },{timestamps:false})
}