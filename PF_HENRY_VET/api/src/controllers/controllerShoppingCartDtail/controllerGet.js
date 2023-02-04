const {ShoppingCartDetail} = require("../../db");

async function findAllDetailCartDetails(idCart){
    try{
        const info = await ShoppingCartDetail.findAll({
            where: {
              shoppingCartCodCart: idCart  
            }
        })
        return info;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    findAllDetailCartDetails
}