const {
    User,
    Consulta,
    Paciente
  } = require("../db");
  
  const Pe = function () {
   User.create({
    DNI:39661063,
    Password:12345678,
    UserRole:"Admin",
    deleted:false
    });
    User.create({
      DNI:12345678,
      UserRole:"Paciente",
      deleted:false
      });
  Paciente.create({
    Nombre:"Pedro Sanchez",
    UserId:2,
    DNI:12345678
  })
  
  
    
  };
  
module.exports = { Pe };
