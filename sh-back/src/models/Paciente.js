const { DataTypes } = require("sequelize");

const Paciente = (sequelize) => {
  sequelize.define("Paciente", {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DNI: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    ObraSocial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NroAfiliade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Nacimiento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Edad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Celular: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CantVacunas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
module.exports = Paciente;
