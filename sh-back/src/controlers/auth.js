
const {User,Paciente} =require("../db")


const login = (req, res, next) => {
    // checks if email exists
   
  

    let dbUser = User.findOne({ where : {
        DNI: req.body.DNI, },
        include:[
            {model:Paciente},]
    })
    .then(dbUser => {
        if (!dbUser) {
            return res.status(404).json({message: "Usuario no Registrado"});
        } else {
            if(dbUser.UserRole=="Paciente"){
                console.log(dbUser)
                res.status(200).json({message: "User logged in", UserRole: dbUser.UserRole, userId:dbUser.id, Nombre:dbUser.Paciente.Nombre,  PacienteId:dbUser.Paciente.id});
            }
            else {
                res.status(300).send("Password");
            }
           
         
        };
    })
    .catch(err => {
        console.log('Error in login controllers: ' + err);
    });
};
const loginPassword = (req, res, next) => {
    // checks if email exists
   let Password = req.body.Password
    User.findOne({ where : {
        id: 1, 
    }})
    .then(dbUser => {
       
            if(!dbUser.Password||dbUser.Password!==Password){
            return res.status(404).json({message: "Contraseña Incorrecta"});
        }
        else {
            res.status(200).json({message: "User logged in", UserRole: dbUser.UserRole, userId:dbUser.id});
         
        };
    })
    .catch(err => {
        console.log('Error in login controllers: ' + err);
    });
};





module.exports={
    login,
    loginPassword
}
