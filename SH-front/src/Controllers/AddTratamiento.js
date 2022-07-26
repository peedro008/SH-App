import React, { useState } from "react";
import AddTratamientoComponent from "../Components/AddTratamiento/AddTratamientoComponent";

const AddTratamiento = () => {
  const [formT, setFormT] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(`http://localhost:8080/AddTratamientos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formT),
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
    <AddTratamientoComponent
      formT={formT}
      setFormT={setFormT}
      onSubmit={onSubmit}
    />
  );
};

export default AddTratamiento;
