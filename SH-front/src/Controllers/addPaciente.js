import { useState } from "react";
import AddPacienteComponent from "../Components/AddPaciente/AddPacienteComponent";

function AddPaciente() {
  const [formP, setFormP] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(`http://localhost:8080/AddPaciente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formP),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 404) {
            setIsError(true);
            setMessage(jsonRes.message);
            console.log(`Hubo un error? ${isError}. Mensaje: ${message}`);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddPacienteComponent
      formP={formP}
      setFormP={setFormP}
      onSubmit={onSubmit}
    />
  );
}

export default AddPaciente;