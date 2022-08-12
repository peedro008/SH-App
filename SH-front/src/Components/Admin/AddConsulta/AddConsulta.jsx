import React from "react";

function AddConsultaComponent({ setImagen, SubirImagen, form, setForm, onSubmit, handleChange }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
       <p>Paciente</p>
      <input type={"number"} onChange={(e)=>setForm({...form, PacienteId:e.target.value})}/>
      <p>Detalle</p>
      <input type={"text"} onChange={(e)=>setForm({...form, Detalle:e.target.value})}/>
      <p>Indicacion</p>
      <input type={"text"} onChange={(e)=>setForm({...form, Indicacion:e.target.value})}/>
      <p>Observacion</p>
      <input type={"text"}  onChange={(e)=>setForm({...form, Observacion:e.target.value})} />
      <input type={"file"}  multiple onChange={handleChange} />
      <button onClick={SubirImagen}>Subir imagen</button>
      <button onClick={onSubmit}>Subir consulta</button>
    </div>
  );
}

export default AddConsultaComponent;
