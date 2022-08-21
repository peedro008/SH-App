import React, { useEffect, useState } from "react";
import AdminControlPanelComponent from "../../Components/Admin/AdminControlPanel/AdminControlPanel";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function AdminControlPanel() {
  const [Consultas, setConsultas] = useState([]);
  const [Pacientes, setPacientes] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);
  const [url, setURL] = useState([]);
  const getConsulta = (PacienteId) => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetConsultasPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setConsultas(data);
      })
      .catch((err) => setConsultas([]));
  };
  useEffect(() => {
    PacienteSelected && getConsulta(PacienteSelected?.id);
    setTramite(null);
  }, [PacienteSelected]);

  useEffect(() => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetPacientes`)
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
      });
  }, []);
  const SelectPaciente = (e) => {
    setPacienteSelected(e);
  };

  const [imagen, setImagen] = useState([]);
  const [form, setForm] = useState({
    Fecha: new Date().toISOString().split("T")[0],
  });
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setForm({ ...form, PacienteId: PacienteSelected?.id });
  }, [PacienteSelected]);

  const onSubmitConsulta = () => {
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
            window.location.reload()
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
    <AdminControlPanelComponent
      Consultas={Consultas}
      Pacientes={Pacientes}
      getConsulta={getConsulta}
      PacienteSelected={PacienteSelected}
      Tramite={Tramite}
      setTramite={setTramite}
      setPacienteSelected={setPacienteSelected}
      SelectPaciente={SelectPaciente}
      onSubmitConsulta={onSubmitConsulta}
      setForm={setForm}
      form={form}
      ImageHandleChange={ImageHandleChange}
      SubirImagen={SubirImagen}
      imagen={imagen}
    />
  );
}

export default AdminControlPanel;
