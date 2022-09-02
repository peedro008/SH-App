import React from 'react'
import volver from "./volver.svg"
function DetallePacienteComponent({  PacienteSelected,setTramite}) {
    let name = PacienteSelected?.Nombre.split(" ");
    if (name) {
      name = `${name[0][0].toUpperCase()}${name[
        name.length - 1
      ][0].toUpperCase()}`;
    }
  
  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3" >Información personal</p>
          </div>
        
        </div>
        <div className='DetallePaciente'>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%", marginTop:"20px"}}>
              <p className='DetalleTitle'>DNI:&nbsp; </p>
              <p className='DetalleValor'>{PacienteSelected.DNI}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%"}}>
              <p className='DetalleTitle'>Obra Social:&nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.ObraSocial}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%"}}>
              <p className='DetalleTitle'>N° de Afiliado: &nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.NroAfiliade}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%"}}>
              <p className='DetalleTitle'>Nacimiento:&nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.Nacimiento}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%"}}>
              <p className='DetalleTitle'>Edad:&nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.Edad}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%"}}>
              <p className='DetalleTitle'>Mail:&nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.Mail}</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginInline:"10%", marginBottom:"20px"}}>
              <p className='DetalleTitle'>Celular:&nbsp;</p>
              <p className='DetalleValor'>{PacienteSelected.Celular}</p>
            </div>

          </div> 
      </div>
      <img style={{position:"absolute", width:"95px", height:"48px", bottom:"1%", right:"5%", zIndex:5, cursor: "pointer"}}src={volver} onClick={()=>setTramite(null)}/></div>
  )
}

export default DetallePacienteComponent