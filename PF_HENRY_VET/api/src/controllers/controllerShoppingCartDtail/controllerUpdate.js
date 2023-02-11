const {ShoppingCartDetail} = require("../../db");

function objWithNewValues(newValues){
    let obj = {}
    for(let prop in newValues){
        if(prop !== "idCartDtail" && prop !== "productId" && newValues) obj[prop] = newValues[prop]
    }
    return obj;
}

async function testExistence(idCartDtail, productId){
    try{
        const info = await ShoppingCartDetail.findOne({
            where: {
                productCodProduct: productId,
                cod_CartDetail: idCartDtail
            }
        })
        return info;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    objWithNewValues,
    testExistence
}