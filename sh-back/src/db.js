require("dotenv").config();
const fs = require("fs");
const path = require("path");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:Messiyyaco@localhost:5432/sh-app",
  { logging: false }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Consulta, Cupon, Foto, Paciente, Turno } = sequelize.models;
User.hasOne(Paciente, {
  foreignKey: "UserId",
});
Paciente.belongsTo(User);

Consulta.hasMany(Foto, {
  foreignKey: "ConsultaId",
});
Foto.belongsTo(Consulta);

Paciente.hasMany(Foto, {
  foreignKey: "PacienteId",
});
Foto.belongsTo(Paciente);

Paciente.hasMany(Consulta, {
  foreignKey: "PacienteId",
});
Consulta.belongsTo(Paciente);

Paciente.hasMany(Turno, {
  foreignKey: "PacienteId",
});
Turno.belongsTo(Paciente);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importart la conexión { conn } = require('./db.js');
};
