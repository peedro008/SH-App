import React, { useState } from "react";
import Calendar from "react-calendar";
import BotonMas from "./BotonMas.svg"
import "./AdminControlPanel.css";
import Añadir from "./Añadir.svg" 
import volver from "./volver.svg"
function AddConsultaComponent({ PacienteSelected, Consultas, setTramite ,imagen, setImagen,onSubmitConsulta, ImageHandleChange,ImageHandleClick, setForm, form}) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  };
  return (
    <div className="RightMain" style={{ height: "100vh" }}>
      <div className="PacienteHeader">
        <div className="Pacientediv1">
          <div className="Pacientediv2">
            <p className="CircleName">{name.substring(0, 2)}</p>
          </div>
          <div className="Pacientediv3">
            <p className="Paciente2">{PacienteSelected?.Nombre}</p>
            <p className="Paciente3">Ver información personal del paciente</p>
          </div>
        </div>
      </div>
      <div className="AddContain">
        <Calendar
          className={"react-calendar"}
          calendarType="US"
          onChange={(e)=>setForm({...form, Fecha:e.toISOString().split('T')[0]})}
     
        />
        <div className="AddForm">
          <div className="AddFormRow"  style={{marginTop:"30px"}}>
          <p className="AddFormTitle">Consulta</p>
          <textarea className="AddFormInput" onChange={(e) => setForm({ ...form, Detalle: e.target.value })} placeholder="Ingrese aquí"></textarea></div>
          <div className="AddFormRow">
          <p className="AddFormTitle">Se Indicó</p>
          <textarea onChange={ (e)=>setForm({ ...form, Indicacion: e.target.value })} className="AddFormInput" placeholder="Ingrese aquí"></textarea></div>
          <div className="AddFormFotoRow"  style={{marginBottom:"30px"}}>
           <div style={{flexDirection:"row", marginRight:"30px"}}><p className="AddFormTitle"  >Añadir Fotos</p>
         
          {
              imagen.length?<p className="AddFormTitle" style={{fontSize:"13px",marginTop:"5px", fontColor:"grey"}}>{imagen.length} imagenes subidas</p>:<></>
            }</div>
          <div>
          <input
              type={"file"}
              multiple
             style={{display:"none", backgroundSize:"cover"}}
              id="archivo"
              onChange={ImageHandleChange}
             
            />  <div style={{flexDirection:"row"}}>
        </div><label for="archivo"><img style={{cursor:"pointer"}}  src={BotonMas}/></label></div>
           
          </div> 
        
        </div>
      </div>
      <img style={{position:"absolute", width:"95px", height:"48px", bottom:"1%", right:"5%", zIndex:5, cursor: "pointer"}}src={volver} onClick={()=>setTramite(null)}/>
          <img src={Añadir} style={{position:"absolute", width:"95px", height:"48px", bottom:"1%", right:"14%", zIndex:5, cursor: "pointer"}} onClick={onSubmitConsulta}/>
    </div>
  );
}

export default AddConsultaComponent;
