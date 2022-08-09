import React from 'react'

const AddTratamientoComponent = ({formT , setFormT, onSubmit }) => {
  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
     <p>Tipo de Tratamiento</p>
     <select onChange={(e) => setFormT({...formT, Categoria:e.target.value})} defaultValue=''>
            <option value=''>- - -</option>
            <option value='Tratamientos faciales'>Tratamientos faciales</option>
            <option value='Tratamientos capilares'>Tratamientos capilares</option>
            <option value='Tratamientos corporales'>Tratamientos corporales</option>
           
      </select>
        <input type={"text"} onChange={(e)=>setFormT({...formT, Categoria:e.target.value})}/>
    <p>Nombre del Tratamiento</p>
    <input type={"text"} onChange={(e)=>setFormT({...formT, Titulo:e.target.value})}/>
    <p>Descripción</p>
    <input type={"text"} onChange={(e)=>setFormT({...formT, Descripcion:e.target.value})}/>
    <button onClick={onSubmit}>Subir Tratamiento</button>
  </div>
  )
}

export default AddTratamientoComponent