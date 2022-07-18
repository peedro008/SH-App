const { DataTypes } = require("sequelize");

const Tratamiento = (sequelize) => {
  sequelize.define("Tratamiento", {
    Categoria: {
      type: DataTypes.ENUM("Tratamientos faciales","Tratamientos capilares","Tratamientos corporales"),
    },
    Titulo: {
      type: DataTypes.STRING,
    },
    Descripcion: {
      type: DataTypes.TEXT,
    },
  });
};
module.exports = Tratamiento;
