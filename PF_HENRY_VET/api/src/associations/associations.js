function makeAssociations(sequelize){

    const {User, ShoppingCart, ShoppingCartDetail, Product, Favorite, Invoice, InvoiceDetail} = sequelize.models;
    
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
<<<<<<< HEAD
    User.hasMany(Favorite, {foreignKey:"user_favorite"});
    Favorite.belongsTo(User, {foreignKey:"user_favorite"});
    //Associations Producto-Favorito
    Product.hasMany(Favorite, {foreignKey:"product_id"});
    Favorite.belongsTo(Product, {foreignKey:"product_id"});
=======
    User.hasMany(Favorite, {foreignKey:"user_favorite"})
    Favorite.belongsTo(User, {foreignKey:"user_favorite"})
    //Associations Detalles de Factura-Factura
    Invoice.hasMany(InvoiceDetail,{foreignKey:"invoice_detail"});
    InvoiceDetail.belongsTo(Invoice,{foreignKey:"invoice_detail"});
    //Associations Detalles de Factura-Productos
    InvoiceDetail.belongsTo(Product);
    Product.hasOne(InvoiceDetail);

>>>>>>> 7f6ba45adfa7437ed32d79ace32a754421088b72
}

module.exports = makeAssociations;
