const { DataTypes } = require("sequelize");

const Turno = (sequelize) => {
  sequelize.define("Turno", {
    PacienteID: {
      type: DataTypes.INTEGER,
    },
    FechaHora: {
      type: DataTypes.DATE,
    },
    Observacion: {
      type: DataTypes.TEXT,
    },
  });
};
module.exports = Turno;
