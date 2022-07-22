const {
    User,
    Consulta
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
      Consulta.create()
  
  
    
  };
  
module.exports = { Pe };
