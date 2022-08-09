import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PhotographicTracking from "../../Components/Paciente/PhotographicTracking/PhotographicTracking";

function PhotograpicTracking() {
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

  return <PhotographicTracking consultas={consultas} userName={userName} />;
}

export default PhotograpicTracking;
