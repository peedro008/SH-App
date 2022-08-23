import React, { useEffect, useState } from "react";
import AddTurnoMobileComponent from "../../Components/Admin/AddTurno/AddTurnoMobile";
import { useLocation } from "react-router-dom";

function AddTurno() {
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();

  let pacienteNum = location.state[0];

  useEffect(() => {
    setPacienteSelected(pacienteNum);
  }, [pacienteNum]);

  useEffect(() => {
    setForm({ ...form, PacienteId: location.state[0]?.id });
  }, [PacienteSelected]);

  const onSubmitConsulta = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddTurno`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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

  return (
    <AddTurnoMobileComponent
      onSubmitConsulta={onSubmitConsulta}
      setForm={setForm}
      form={form}
      Paciente={location.state[0]}
    />
  );
}

export default AddTurno;
