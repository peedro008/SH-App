import React, { useEffect, useState } from "react";

import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AddConsultaComponent from "../../Components/Admin/AddConsulta/AddConsultaMobile";
import { useLocation } from "react-router-dom";

function AddConsulta() {
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);
  const [url, setURL] = useState([]);
  const [imagen, setImagen] = useState([]);
  const [form, setForm] = useState({
    Fecha: new Date().toISOString().split("T")[0],
  });
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();

  let pE = location.state[0];

  useEffect(() => {
    setPacienteSelected(pE);
  }, [pE]);

  useEffect(() => {
    setForm({ ...form, PacienteId: location.state[0]?.id });
  }, [PacienteSelected]);

  const onSubmitTurno = () => {
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

  const SubirImagen = () => {};
  useEffect(() => {
    setForm({ ...form, Fotos: url });
  }, [url]);

  const ImageHandleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImagen((prevState) => [...prevState, newImage]);
    }
  };
  const getURL = (imagenRef) => {
    getDownloadURL(imagenRef).then((url) => {
      setURL((prevState) => [...prevState, url]);
    });
  };
  useEffect(() => {
    imagen.map((e) => {
      const imagenRef = ref(storage, `images/${333 * Math.random() + e.name}`);
      console.log(imagenRef);
      uploadBytes(imagenRef, e)
        .then(() => {
          getURL(imagenRef);
        })

        .catch((err) => {
          console.log("Error", err);
          alert("Error", err);
        });
    });
  }, [imagen]);
  return (
    <AddConsultaComponent
      PacienteSelected={PacienteSelected}
      Tramite={Tramite}
      setTramite={setTramite}
      setPacienteSelected={setPacienteSelected}
      onSubmitTurno={onSubmitTurno}
      setForm={setForm}
      form={form}
      ImageHandleChange={ImageHandleChange}
      SubirImagen={SubirImagen}
      imagen={imagen}
      Paciente={location.state[0]}
    />
  );
}

export default AddConsulta;
