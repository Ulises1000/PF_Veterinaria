const {ShoppingCartDetail} = require("../../db");

async function findCartDtailToDelete(idCartDtail,productId){
    try{
        const info = await ShoppingCartDetail.findOne({
            where: {
                productCodProduct: productId,
                cod_CartDetail: idCartDtail
            }
        })
        return info;
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findCartDtailToDelete
}