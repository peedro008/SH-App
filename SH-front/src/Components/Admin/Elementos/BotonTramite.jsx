
import React from 'react'
import "./BotonTramite.css"
import { IoPersonOutline } from 'react-icons/io5'
const BotonTramiteComponent = ({Titulo,  submit, Icon}) => {
  return (
    <div className='botonTramiteContainer' onClick={submit}>
        {Icon}
      <p className='botonTramite1Text'>{Titulo}</p>
      
    </div>
  )
}

export default BotonTramiteComponent