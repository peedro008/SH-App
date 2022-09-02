import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BeforeAndAfterAdmin from "../../Components/Admin/Mobile/BeforeAndAfterAdmin/BeforeAndAfterAdmin";
import ComparationAdminComponent from "../../Components/Admin/Mobile/ComparationAdmin/ComparationAdmin";

const AddComparation = () => {
  const [PhotoForm, setPhotoForm] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [formBAF, setFormBAF] = useState({});
  const [fotos, setFotos] = useState([]);
  const [fotosP, setFotosP] = useState([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const PacienteId = location.state[0]?.id;

  let pE = location.state[0];

  useEffect(() => {
    setPacienteSelected(pE);
    setFotosP(location.state[1]);
    setFormBAF({ ...formBAF, PacienteId: PacienteId });
  }, [pE]);

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

  console.log(fotosP);
  return (
    <BeforeAndAfterAdmin
      fotosP={fotosP}
      PacienteSelected={PacienteSelected}
      onSubmitBAF={onSubmitBAF}
      setFormBAF={setFormBAF}
      formBAF={formBAF}
    />
  );
};

export default AddComparation;
