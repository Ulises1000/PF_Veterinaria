const {ShoppingCartDetail} = require("../../db");

async function findCartDtailToDelete(idCartDtail){
    try{
        const info = await ShoppingCartDetail.findByPk(idCartDtail);
        if(!info || info.usubscribe_CD) return false;
        return true;
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    findCartDtailToDelete
}