import React, { useEffect, useState } from "react";
import AdminControlPanelComponent from "../../Components/Admin/AdminControlPanel/AdminControlPanel";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function AdminControlPanel() {
  const [Consultas, setConsultas] = useState([]);
  const [Pacientes, setPacientes] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);

  const getConsulta = (PacienteId) => {
    fetch(`http://localhost:8080/GetConsultasPaciente?PacienteId=${PacienteId}`)
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
    fetch(`http://localhost:8080/GetPacientes`)
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
      });
  }, []);
  const SelectPaciente = (e) => {
    setPacienteSelected(e);
  };

  const [imagen, setImagen] = useState(null);
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setForm({ ...form, PacienteId: PacienteSelected });
  }, [PacienteSelected]);

  const onSubmitConsulta = () => {
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
    />
  );
}

export default AdminControlPanel;
