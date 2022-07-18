const {User, Paciente, Foto, Consulta, Turno} =require("../db")

const GetPacientes  = async ( req, res ) => {
    let PacientesDb = await Paciente.findAll({
        include: [
            { model: Foto },
            { model: Consulta },
            { model: Turno },
        ]
           
       }
    )
    PacientesDb.length?
    res.status(200).json(PacientesDb):
    res.status(404).send("No Hay Pacientes")
}

const AddPaciente = async (req,res) => {
    let {DNI,
        Nombre,
        ObraSocial,
        NroAfiliade,
        Nacimiento,
        Edad,
        Email,
        Celular,
        CantVacunas,
        
        } = req.body
        try{
         
            let UserDb = await User.create({
                DNI:DNI,
                UserRole: "Paciente"
                
               })
               .then(UserDb=>{
                 Paciente.create({
                    DNI:DNI,
                    Nombre:Nombre,
                    ObraSocial:ObraSocial,
                    NroAfiliade:NroAfiliade,
                    Nacimiento:Nacimiento,
                    Edad:Edad,
                    Email:Email,
                    Celular:Celular,
                    CantVacunas:CantVacunas,
                    UserId:UserDb.id
               })
               })
           
         
          res.status(200).send("Agregado")
        }
        catch(e){
        console.log("Error in Paciente controller"+ e)
    }
}

module.exports={GetPacientes, AddPaciente}
    
