import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClinicalHistoryComponent from "../../Components/Paciente/ClinicalHistory/ClinicalHistory";

function ClinicalHistory() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const userName = useSelector((state) => state.userSession).userName;
  const [consultas, setConsultas] = useState([]);
  const [noInfo, setNoInfo] = useState("");

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetConsultasPaciente?PacienteId=${PacienteId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.mensaje) setConsultas(data);
        else {
          setNoInfo(data);
        }
      });
  }, [PacienteId]);
  console.log(consultas);
  return (
    <ClinicalHistoryComponent
      userName={userName}
      consultas={consultas}
      noInfo={noInfo}
    />
  );
}

export default ClinicalHistory;
