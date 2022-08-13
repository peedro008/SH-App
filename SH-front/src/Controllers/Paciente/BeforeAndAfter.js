import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BeforeAndAfter from "../../Components/Paciente/BeforeAndAfter/BeforeAndAfter";

function BeforeAndAfterController() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const userName = useSelector((state) => state.userSession).userName;
  const [fotos, setFotos] = useState([]);
  const [fotosP, setFotosP] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < fotos.length; i + 9) {
      temp.push(fotos.splice(i, i + 9));
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

  return <BeforeAndAfter fotosP={fotosP} userName={userName} />;
}

export default BeforeAndAfterController;
