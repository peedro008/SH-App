const { DataTypes } = require("sequelize");

const Turno = (sequelize) => {
  sequelize.define("Turno", {
    PacienteID: {
      type: DataTypes.INTEGER,
    },
    Fecha: {
      type: DataTypes.DATE,
    },
    Hora: {
      type: DataTypes.TIME,
    },
    Observacion: {
      type: DataTypes.TEXT,
    },
  });
};
module.exports = Turno;
