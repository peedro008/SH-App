const { DataTypes } = require('sequelize');

const User= (sequelize)=>{
    sequelize.define('User', {
    DNI:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },
    Password:{
        type:DataTypes.STRING,
         allowNull: true,
         default:null
    },
    UserRole:{
    type:DataTypes.ENUM("Admin", "Paciente"),
    allowNull:false,
    default:"Paciente"
    },
    deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

});
};
module.exports= User;