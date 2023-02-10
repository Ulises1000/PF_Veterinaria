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
    petSize: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    breedType: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image_url: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    unsubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
