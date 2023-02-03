const {ShoppingCartDetail} = require("../../db");

async function verifyProductInCart(values){
    const {
        idCart,
        idProduct,
        unit_price,
        date_added,
        quantity
    } = values;
    try{
        const [info, created] = await ShoppingCartDetail.findOrCreate({
            where: {
                productCodProduct: idProduct,
                shoppingCartCodCart: idCart
            },
            defaults: {
                productCodProduct: idProduct,
                shoppingCartCodCart: idCart,
                unit_Price_CD: unit_price,
                date_Added_CD: date_added,
                quantity_CD: quantity
            }
        })
        return created;
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    verifyProductInCart
}