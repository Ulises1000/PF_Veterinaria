const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Review", {
        id_review:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primarykey:true,


        },
        commentary_R:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        stars_R:{
            type:DataTypes.FLOAT,
            allowNull:false,
            validate:{
                min:0,
                max:5
            }
        },
        baja_R:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
        
    })
}