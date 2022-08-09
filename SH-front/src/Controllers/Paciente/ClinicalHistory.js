import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClinicalHistoryComponent from "../../Components/Paciente/ClinicalHistory/ClinicalHistory";

function ClinicalHistory() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const userName = useSelector((state) => state.userSession).userName;
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/GetConsultasPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setConsultas(data);
      });
  }, [PacienteId]);

  return <ClinicalHistoryComponent userName={userName} consultas={consultas} />;
}

export default ClinicalHistory;
