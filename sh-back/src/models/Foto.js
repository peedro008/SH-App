const { DataTypes } = require("sequelize");

const Foto = (sequelize) => {
  sequelize.define("Foto", {
    URL: {
      type: DataTypes.STRING,
    },
    ConsultaId: {
      type: DataTypes.INTEGER,
    },
    PacienteId: {
      type: DataTypes.INTEGER,
    },
  });
};
module.exports = Foto;
