import React, { useState } from "react";
import Calendar from "react-calendar";
import BotonMas from "./BotonMas.svg"
import "./AdminControlPanel.css";
import Añadir from "./Añadir.svg" 
import volver from "./volver.svg"
function AddPacienteComponent({PacienteForm,
    setTramite,
    setAddPaci,
    onSubmitPaciente,
    setPacienteForm,
    openP,
    messageMP,setOpenP}) {


  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">NP</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteForm.Nombre&&PacienteForm.Apellido?PacienteForm.Nombre + " " +PacienteForm.Apellido: "Nombre y Apellido"}</p>
            <p className="Paciente3" >Nuevo/a paciente</p>
          </div>
        </div>
      </div>
   <div style={{display:"flex", flexDirection:"row"}}>
        <div className="AddForm11" style={{marginLeft:"5%", marginTop:"1%", minHeight:"60vh"}}>
            <div className="AddPRow" style={{marginTop:"10%"}}>
                <p className="AddPTitle">Nombre: *</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,Nombre:e.target.value})}}/>
            </div>
            <div className="AddPRow" >
                <p className="AddPTitle">Apellido: *</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,Apellido: e.target.value})}}/>
            </div>
            <div className="AddPRow">
                <p className="AddPTitle">DNI: *</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,DNI:e.target.value})}}/>
            </div>
            <div className="AddPRow">
                <p className="AddPTitle">Obra Social:</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,ObraSocial:e.target.value})}}/>
            </div>
            <div className="AddPRow">
                <p className="AddPTitle">N° de Afiliade:</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,NroAfiliade:e.target.value})}}/>
            </div>
        
            <div className="AddPRow" style={{marginBottom:"10%"}} >
                <p className="AddPTitle">Cant. Vacunas:</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,CantVacunas:e.target.value})}}/>
            </div>





       
        </div>
        
        <div className="AddForm11" style={{marginLeft:"5%", marginTop:"1%", minHeight:"60vh"}}>

            <div className="AddPRow"       style={{marginTop:"10%"}}>
                <p className="AddPTitle">Edad:</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,Edad:e.target.value})}}/>
            </div>
            <div className="AddPRow" >
                <p className="AddPTitle">Nacimiento:</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,Nacimiento:e.target.value})}}/>
            </div>
            <div className="AddPRow">
                <p className="AddPTitle">Mail: *</p>
                <input className="AddPInput" onChange={(e)=>{setPacienteForm({...PacienteForm,Email:e.target.value})}}/>
            </div>
            <div className="AddPRow">
                <p className="AddPTitle">Celular:</p>
                <input className="AddPInput"style={{marginBottom:"5%"}} onChange={(e)=>{setPacienteForm({...PacienteForm,Celular:e.target.value})}}/>
            </div>
   
         


            <img src={Añadir} style={{alignSelf:"flex-end",width:"95px", height:"48px", marginBottom:"5%", marginRight:"5%",zIndex:5, cursor: "pointer"}} onClick={onSubmitPaciente}/>
            </div>

       
        </div>
  
      <img style={{position:"absolute", width:"95px", height:"48px", bottom:"1%", right:"5%", zIndex:5, cursor: "pointer"}}src={volver} onClick={()=>setAddPaci(false)}/>
      {openP && (
        <div className="modalCont" >
          <div className="modal" style={{width:"max-content", paddingInline:"20px"}}>
            <p className="modalText">{messageMP}</p>

            <button
              className="modalButton"
              onClick={() => {
                messageMP.substring(0, 3) == "Deb"
                  ? setOpenP(false)
                  : window.location.reload()
              }}
            >
              {" "}
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPacienteComponent;
