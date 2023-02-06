const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("breed", {
        /*numero codificado con UUIDV4 para identificar la raza*/
        id_breed:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:DataTypes.UUIDV4
        },
        /*Especie*/
        kind:{
            type:DataTypes.STRING,
            allowNull:false
        },
        /*Nombre*/
        name:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        /*Rango de Peso*/
        WeightRange:{
            type:DataTypes.STRING,
            allowNull:false
        },
        /*Rango de Altura*/
        HeightRange:{
            type:DataTypes.STRING,
            allowNull:false
        },
        /*Dar de baja*/
        unsuscribe:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },{timestamps:false})
}
