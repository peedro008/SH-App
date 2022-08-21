import React, { useEffect, useState } from "react";
import AddConsultaComponent from "../../Components/Admin/AddConsulta/AddConsulta";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddConsulta() {
  const [imagen, setImagen] = useState(null);
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const pacienteId = useSelector((state) => state.userSession).pacienteId;
  const userId = useSelector((state) => state.userSession).userId;
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ ...form, PacienteId: pacienteId });
  }, [userId]);

  const onSubmit = () => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddConsulta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
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
    navigate("/");
  };

  const SubirImagen = () => {
    if (imagen == null) return;
    const imagenRef = ref(
      storage,
      `images/${333 * Math.random() + imagen.name}`
    );
    console.log(imagenRef);
    uploadBytes(imagenRef, imagen)
      .then(() => {
        getURL(imagenRef);
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Error", err);
      });
  };
  const getURL = (imagenRef) => {
    getDownloadURL(imagenRef).then((url) => {
      setForm({ ...form, Fotos: [url] });
    });
  };
  return (
    <AddConsultaComponent
      imagen={imagen}
      setImagen={setImagen}
      SubirImagen={SubirImagen}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
    />
  );
}

export default AddConsulta;
