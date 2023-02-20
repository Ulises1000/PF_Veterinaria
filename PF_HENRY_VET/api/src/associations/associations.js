function makeAssociations(sequelize) {
  const { User, ShoppingCart, ShoppingCartDetail, Product, Favorite, Invoice } =
    sequelize.models;


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
  User.hasMany(Favorite, { foreignKey: "user_favorite" });
  Favorite.belongsTo(User, { foreignKey: "user_favorite" });
  //Associations Producto-Favorito
  Product.hasMany(Favorite, { foreignKey: "product_id" });
  Favorite.belongsTo(Product, { foreignKey: "product_id" });
  //Associations Producto-Favorito
  Product.hasMany(Favorite, { foreignKey: "user_favorite" });
  Favorite.belongsTo(User, { foreignKey: "user_favorite" });
}

module.exports = makeAssociations;
