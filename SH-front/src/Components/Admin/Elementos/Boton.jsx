
import React from 'react'
import "./Boton.css"
import { IoPersonOutline } from 'react-icons/io5'
const BotonComponent = ({Titulo, Paciente, submit}) => {
  return (
    <div className='botonContainer' onClick={()=>submit(Paciente)}>
        <IoPersonOutline size={"25px"} color={"#15353B"}/>
      <p className='botonText'>{Titulo}</p>
      <div className='subButon'><p className='subButonText'>ver</p></div>
    </div>
  )
}

export default BotonComponent