function makeAssociations(sequelize){
    const {User, ShoppingCart, ShoppingCartDetail} = sequelize.models;
    //Associations Carrito-Usuario
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);
    //Associations Carrito-Detalle Carrito
    ShoppingCart.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(ShoppingCart);
}

module.exports = makeAssociations;