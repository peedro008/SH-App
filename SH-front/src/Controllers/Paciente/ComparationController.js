import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comparation from "../../Components/Paciente/BeforeAndAfter/Comparation";

const ComparationController = () => {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;
  const [PhotoForm, setPhotoForm] = useState([]);
  const [noInfo, setNoInfo] = useState("");

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetAntesDespuesPaciente?PacienteId=${PacienteId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.mensaje) setPhotoForm(data);
        else {
          setNoInfo(data);
        }
      });
  }, [PacienteId]);

  return <Comparation PhotoForm={PhotoForm} noInfo={noInfo} />;
};

export default ComparationController;
