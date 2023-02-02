 const {Product} = require("../../db.js");

async function findProduct(name){
    try{
        const buscaProduct = await Product.findOne({
            where: {name}, 
        })
        return buscaProduct;
    }catch(err){
        throw new Error(err.message)
    }
}

 

module.exports = {findProduct};