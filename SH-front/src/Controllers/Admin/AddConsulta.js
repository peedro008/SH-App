import React, { useEffect, useState } from "react";
import AddConsultaComponent from "../../Components/Admin/AddConsulta/AddConsulta";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
function AddConsulta() {
 const [imagen, setImagen] = useState([]);
  const [url, setURL] = useState([]);
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const pacienteId = useSelector((state) => state.userSession).pacienteId;
  const userId = useSelector((state) => state.userSession).userId;
  useEffect(() => {
    setForm({ ...form, Fotos: url });
  }, [url]);

  const onSubmit = () => {
    fetch(`http://localhost:8080/AddConsulta`, {
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
  };

 
  const SubirImagen = () => {

    if (imagen == null) return;

    imagen.map(e=>{
      const imagenRef = ref(
      storage,
      `images/${333 * Math.random() + e.name}`
    );
    console.log(imagenRef);
    uploadBytes(imagenRef, e)
      .then(() => {
        getURL(imagenRef);
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Error", err);
      });
    })
    
  };
  const handleChange = (e) =>{
    for(let i = 0; i < e.target.files.length;i++){
      const newImage = e.target.files[i];
      newImage["id"] = Math.random()
      setImagen((prevState)=>[...prevState, newImage])
    }
  }
  const  getURL = (imagenRef) => {
    getDownloadURL(imagenRef).then((url) => {
      setURL((prevState)=>[...prevState, url]);
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
      handleChange={handleChange}
    />
  );
}

export default AddConsulta;
