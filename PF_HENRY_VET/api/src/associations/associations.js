function makeAssociations(sequelize){
    const {User, ShoppingCart, Breed, Product} = sequelize.models;
    
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);

    Breed.hasMany(Product);
    Product.belongsTo(Breed);
}

module.exports = makeAssociations;