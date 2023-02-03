const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
   codProduct: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    unit_price: {
      type: DataTypes.FLOAT,
      //allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unsubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};

/* codProduct: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
}, */
