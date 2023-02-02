const {Product} = require("../../db.js");

async function findProductUpdate(codProduct){
    try{
        const buscaProductUpdate = await Product.findOne({
            where: {codProduct}, 
        })
        return buscaProductUpdate;
    }catch(err){
        throw new Error(err.message)
    }
}

 

module.exports = {findProductUpdate};