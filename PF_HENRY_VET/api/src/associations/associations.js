function makeAssociations(sequelize){
    const {User, ShoppingCart} = sequelize.models;
    
    ShoppingCart.hasOne(User);
    User.belongsTo(ShoppingCart);
}

module.exports = makeAssociations;