function makeAssociations(sequelize) {

    const {User, ShoppingCart, ShoppingCartDetail, Product, Favorite, Review} = sequelize.models;
    
    //Associations Carrito-Usuario
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);
    //Associations Carrito-Detalle Carrito
    ShoppingCart.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(ShoppingCart);
    //Associations Detalle Carrito-Productos
    Product.hasMany(ShoppingCartDetail);
    ShoppingCartDetail.belongsTo(Product);
    //Associations Usuario-Favorito
    User.hasMany(Favorite, {foreignKey:"user_favorite"});
    Favorite.belongsTo(User, {foreignKey:"user_favorite"});
    //Associations Producto-Favorito
    Product.hasMany(Favorite, {foreignKey:"product_id"});
    Favorite.belongsTo(Product, {foreignKey:"product_id"});
    //Associations Producto-Favorito
    Product.hasMany(Favorite, {foreignKey:"user_favorite"})
    Favorite.belongsTo(User, {foreignKey:"user_favorite"})
    //Associations Producto-Review
    User.hasMany(Review, {foreignKey:'userId'});
    Review.belongsTo(Review, {foreignKey:'userId'});
    //Associations Usuario-Review
    Product.hasMany(Review, {foreignKey:'productId'});
    Review.belongsTo(Review, {foreignKey:'productId'});
}

module.exports = makeAssociations;
