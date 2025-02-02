import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BeforeAndAfter from "../../Components/Paciente/BeforeAndAfter/BeforeAndAfter";

function BeforeAndAfterController() {
  const PacienteId = useSelector((state) => state.userSession).pacienteId;

  const [fotos, setFotos] = useState([]);
  const [fotosP, setFotosP] = useState([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [formBAF, setFormBAF] = useState({ PacienteId });

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < fotos.length; i + 9) {
      temp.push(fotos.splice(i, i + 9));
    }
    setFotosP(temp);
  }, [fotos]);

  const onSubmitBAF = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddAntesDespues`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formBAF),
      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 404) {
            setIsError(true);
            setMessage(jsonRes.message);
            console.log(`Hubo un error? ${isError}. Mensaje: ${message}`);
          } else {
            setIsError(false);
            window.location.reload();
            setMessage(jsonRes.message);
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetFotosPaciente?PacienteId=${PacienteId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFotos(data);
      });
  }, [PacienteId]);

  return (
    <BeforeAndAfter
      fotosP={fotosP}
      onSubmitBAF={onSubmitBAF}
      setFormBAF={setFormBAF}
      formBAF={formBAF}
    />
  );
}
export default BeforeAndAfterController;
