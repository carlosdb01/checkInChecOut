const { sequelize, DataTypes } = require("../utils/database.util.js");

const Registration = sequelize.define("registration", {
    idRegistration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue: "working"
    },
});

module.exports = { Registration };
