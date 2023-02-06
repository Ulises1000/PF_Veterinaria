 const {Product} = require("../../db.js");
 const {Op} = require("sequelize");

async function findProduct(nameP){
    try{
        const buscaProduct = await Product.findOne({
            where: {
                name: {
                    [Op.iLike]: nameP
                }
            }, 
        })
        return buscaProduct;
    }catch(err){
        throw new Error(err.message)
    }
}

 

module.exports = {findProduct};