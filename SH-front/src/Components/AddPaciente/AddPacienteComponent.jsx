import React from 'react'

const AddPacienteComponent = ( {setFormP, formP, onSubmit}) => {
  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <p>DNI</p>
    <input type={"text"} onChange={(e)=>setFormP({...formP, DNI:e.target.value})}/>
    <p>Nombre Completo</p>
    <input type={"text"} onChange={(e)=>setFormP({...formP, Nombre:e.target.value})}/>
    <p>Obra Social</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, ObraSocial:e.target.value})} />
    <p>N° de aflidiado</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, NroAfiliade:e.target.value})} />
    <p>Fecha de nacimiento</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, Nacimiento:e.target.value})} />
    <p>Edad</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, Edad:e.target.value})} />
    <p>Email</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, Email:e.target.value})} />
    <p>Celular</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, Celular:e.target.value})} />
    <p>Cantidad de vacunas</p>
    <input type={"text"}  onChange={(e)=>setFormP({...formP, CantVacunas:e.target.value})} />
    <button onClick={onSubmit}>Cargar Paciente</button>
  </div>
  )
}

export default AddPacienteComponent