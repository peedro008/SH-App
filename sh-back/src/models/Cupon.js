const { DataTypes } = require("sequelize");

const Cupon = (sequelize) => {
  sequelize.define("Cupon", {
    Porcentaje: {
      type: DataTypes.STRING,
    },
    Titulo: {
      type: DataTypes.TEXT,
    },
    URL: {
      type: DataTypes.STRING,
    },
 });
};
module.exports = Cupon;
