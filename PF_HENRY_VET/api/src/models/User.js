const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        cod_User: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction_U: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_U: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1
        },
        url: {
            type: DataTypes.STRING,
            allowFalse: false,
            defaultValue: "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
        },
        unsubscribe_U: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
}