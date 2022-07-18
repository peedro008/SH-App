const { DataTypes } = require("sequelize");

const Consulta = (sequelize) => {
  sequelize.define("Consulta", {
    Detalle: {
      type: DataTypes.TEXT,
    },
    Indicacion: {
      type: DataTypes.TEXT,
    },
    Observacion: {
      type: DataTypes.TEXT,
    },

    Fecha: {
      type: DataTypes.DATEONLY,
    },
  });
};
module.exports = Consulta;
