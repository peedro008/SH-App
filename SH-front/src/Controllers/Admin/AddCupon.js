import React, { useState } from "react";
import AddCuponComponent from "../../Components/Admin/AddCupon/AddCuponComponent";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddTratamiento = () => {
  const [imagen, setImagen] = useState(null);
  const [formC, setFormC] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    fetch(`http://localhost:8080/AddCupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        URL: formC.Fotos[0],
        Titulo: formC.Titulo,
        Porcentaje: formC.Porcentaje,
      }),
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

  const SubirImagenCupon = () => {
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
      setFormC({ ...formC, Fotos: [url] });
    });
  };

  return (
    <AddCuponComponent
      setImagen={setImagen}
      SubirImagenCupon={SubirImagenCupon}
      formC={formC}
      setFormC={setFormC}
      onSubmit={onSubmit}
    />
  );
};

export default AddTratamiento;
