import React, { useState } from "react";
import AddTratamientoComponent from "../../Components/Admin/AddTratamiento/AddTratamientoComponent";

const AddTratamiento = () => {
  const [formT, setFormT] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmitTrat = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddTratamientos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formT),
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
      onSubmitTrat={onSubmitTrat}
    />
  );
};

export default AddTratamiento;
