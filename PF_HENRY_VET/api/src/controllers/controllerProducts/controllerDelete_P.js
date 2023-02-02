const {Product} = require("../../db.js");

async function findProductDelete(codProduct){
    try{
        const buscaProductDel = await Product.findOne({
            where: {codProduct}, 
        })
        return buscaProductDel;
    }catch(err){
        throw new Error(err.message)
    }
}

 

module.exports = {findProductDelete};