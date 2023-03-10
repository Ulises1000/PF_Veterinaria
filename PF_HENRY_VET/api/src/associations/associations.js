function makeAssociations(sequelize){
    const {User, ShoppingCart, ShoppingCartDetail, Product, Favorite, Breed} = sequelize.models;
    //Associations Carrito-Usuario
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);
    //Associations Carrito-Detalle Carrito
    ShoppingCart.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(ShoppingCart);
    //Associations Detalle Carrito-Productos
    Product.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(Product);
    //Associations Breed-Product
    Breed.hasMany(Product);
    Product.belongsTo(Breed);
    //Associations Usuario-Favorito
    User.hasMany(Favorite, {foreignKey:"user_favorite"})
    Favorite.belongsTo(User, {foreignKey:"user_favorite"})
}

module.exports = makeAssociations;