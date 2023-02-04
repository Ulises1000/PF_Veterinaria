function makeAssociations(sequelize){
    const {User, ShoppingCart, ShoppingCartDetail, Product, Favorite} = sequelize.models;
    //Associations Carrito-Usuario
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);
    //Associations Carrito-Detalle Carrito
    ShoppingCart.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(ShoppingCart);
    //Associations Detalle Carrito-Productos
    Product.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(Product);

    User.hasMany(Favorite, {foreignKey:"user_favorite"})
    Favorite.belongsTo(User, {foreignKey:"user_favorite"})
}

module.exports = makeAssociations;