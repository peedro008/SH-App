import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PhotographicTracking from "../../Components/Paciente/PhotographicTracking/PhotographicTracking";

function PhotograpicTracking() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const userName = useSelector((state) => state.userSession).userName;
  const [fotos, setFotos] = useState([]);
  const [fotosP, setFotosP] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < fotos.length; i + 4) {
      temp.push(fotos.splice(i, i + 4));
    }
    setFotosP(temp);
  }, [fotos]);

  useEffect(() => {
    fetch(`http://localhost:8080/GetFotosPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setFotos(data);
      });
  }, [PacienteId]);

  return <PhotographicTracking fotosP={fotosP} userName={userName} />;
}

export default PhotograpicTracking;
