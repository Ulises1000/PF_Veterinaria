const {ShoppingCart} = require("../../db"); 

async function searchCart(idCart){
    try{
        const info = await ShoppingCart.findByPk(idCart);
        return info;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    searchCart
} 