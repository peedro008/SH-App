const {
    User
  } = require("../db");
  
  const Pe = function () {
   User.create({
    DNI:39661063,
    Password:12345678,
    UserRole:"Admin",
    deleted:false
    });
  
  
  
    
  };
  
module.exports = { Pe };
