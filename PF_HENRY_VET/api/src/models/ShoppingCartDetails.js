const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("shoppingCartDetail", {
    cod_CartDetail: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    unit_Price_CD: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    date_Added_CD: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quantity_CD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 100
      }
    }
  });
};
