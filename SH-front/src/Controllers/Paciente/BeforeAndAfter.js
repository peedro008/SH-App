import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BeforeAndAfter from "../../Components/Paciente/BeforeAndAfter/BeforeAndAfter";

function BeforeAndAfterController() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const userName = useSelector((state) => state.userSession).userName;
  const [fotos, setFotos] = useState([]);
  const [fotosP, setFotosP] = useState([]);

  useEffect(() => {
    let temp = 0;
    fotos.forEach((value, index) => {
      fotos.slice(temp, temp + 9).length &&
        setFotosP([...fotosP, [fotos.slice(temp, temp + 9)]]);
      temp = temp + 9;
    });
  }, [fotos]);
  console.log(fotos);
  useEffect(() => {
    fetch(`http://localhost:8080/GetFotosPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setFotos(data);
      });
  }, [PacienteId]);

  return <BeforeAndAfter fotos={fotos} userName={userName} />;
}

export default BeforeAndAfterController;
