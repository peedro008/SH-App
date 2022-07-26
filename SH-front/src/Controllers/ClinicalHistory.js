import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ClinicalHistoryComponent from '../Components/ClinicalHistory/ClinicalHistory'

function ClinicalHistory() {
  const PacienteId = useSelector(state=>state.userSession).pacienteId
const [consultas, setConsultas] = useState([])

useEffect(()=>{
    fetch(`http://localhost:8080/GetConsultasPaciente?PacienteId=${PacienteId}`)
    .then(response => response.json())
    .then(data => {
        setConsultas(data)
    });
},[PacienteId])

  return (
   <ClinicalHistoryComponent PacienteId={PacienteId} consultas={consultas}/>
  )
}

export default ClinicalHistory