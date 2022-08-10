import React from "react";

function AddCupon({ setImagen, SubirImagenCupon, formC, setFormC, onSubmit }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Porcentaje</p>
      <input type={"text"} onChange={(e)=>setFormC({...formC, Porcentaje:e.target.value})}/>
      <p>Titulo</p>
      <input type={"text"} onChange={(e)=>setFormC({...formC, Titulo:e.target.value})}/>
     
      <input type={"file"} onChange={(e) => setImagen(e.target.files[0])} />
      <button onClick={SubirImagenCupon}>Subir imagen del Cupon</button>
      <button onClick={onSubmit}>Subir Descuento</button>
    </div>
  );
}

export default AddCupon;