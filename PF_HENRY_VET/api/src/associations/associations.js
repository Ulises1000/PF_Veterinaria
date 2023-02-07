function makeAssociations(sequelize){
    const {User, ShoppingCart, ShoppingCartDetail, Product, Favorite, Breed, Invoice, InvoiceDetail} = sequelize.models;
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
    Breed.hasMany(Product, {foreignKey:"product_breed"});
    Product.belongsTo(Breed, {foreignKey:"product_breed"});
    //Associations Usuario-Favorito
    User.hasMany(Favorite, {foreignKey:"user_favorite"})
    Favorite.belongsTo(User, {foreignKey:"user_favorite"})
    //Associations Detalles de Factura-Factura
    Invoice.hasMany(InvoiceDetail,{foreignKey:"invoice_detail"});
    InvoiceDetail.belongsTo(Invoice,{foreignKey:"invoice_detail"});
    //Associations Detalles de Factura-Productos
    InvoiceDetail.belongsTo(Product);
    Product.hasOne(InvoiceDetail);

}

module.exports = makeAssociations;