import React, { useEffect, useState } from "react";
import AdminControlPanelComponent from "../../Components/Admin/AdminControlPanel/AdminControlPanel";
import { storage } from "../../firebase";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function AdminControlPanel() {
  //estados
  const [Turnos, setTurnos] = useState([]);
  const [Consultas, setConsultas] = useState([]);
  const [Pacientes, setPacientes] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);
  const [url, setURL] = useState([]);
  const [turnoForm, setTurnoForm] = useState({});
  const [PacienteForm, setPacienteForm] = useState({});
  const [imagen, setImagen] = useState([]);
  const [form, setForm] = useState({
    Fecha: new Date().toISOString().split("T")[0],
  });

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [fotosP, setFotosP] = useState([]);
  //modalEstados
  const [openT, setOpenT] = useState(false);
  const [messageMT, setMessageMT] = useState("");

  const [openC, setOpenC] = useState(false);
  const [messageMC, setMessageMC] = useState("");
  const [onBurger, setOnBurger]=useState(false)
  const [openP, setOpenP] = useState(false);
  const [messageMP, setMessageMP] = useState("");
  const [searchPaciente, setSearchPaciente] = useState("");
  const [SearchOpen, setSearchOpen] = useState(false);
  const [fotos, setFotos] = useState([]);
  const [fotosP9, setFotosP9] = useState([]);
  //useEffect
  useEffect(() => {
    PacienteSelected && getConsulta(PacienteSelected?.id);
    getTurno(PacienteSelected?.id);
    setTramite(null);
  }, [PacienteSelected]);
  useEffect(() => {
    setForm({ ...form, PacienteId: PacienteSelected?.id });
    setTurnoForm({ ...turnoForm, PacienteID: PacienteSelected?.id });
  }, [PacienteSelected]);
 useEffect(() => {
  if (PacienteSelected) {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetFotosPaciente?PacienteId=${PacienteSelected?.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFotos(data);
      });}
  }, [PacienteSelected]);
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
  useEffect(() => {
    if (PacienteSelected) {
      if(fotos.length<=9){
        setFotosP9([fotos])
      }
      else{
      let temp = [];
   
  
    
    for (let i = 0; i < fotos; i + 9) {
      temp.push(fotos.splice(i, i + 9));
    }
    setFotosP9(temp);}}
  }, [fotos, PacienteSelected]);
  useEffect(() => {
    if (PacienteSelected) {
      let temp = [];
      let temp1 = [];
      let fotos = PacienteSelected.Fotos
      let fotos1 = PacienteSelected.Fotos
      for (let i = 0; i < fotos.length; i + 4) {
        temp.push(fotos.splice(i, i + 4));
        console.log(temp)
      }
      setFotosP(temp);
   
    for (let i = 0; i < fotos1; i + 9) {
      temp1.push(fotos1.splice(i, i + 9));
      console.log(temp1)
    }
    setFotosP9(temp1) }
  }, [PacienteSelected]);

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetPacientes`
    )
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
      });
  }, []);
  useEffect(() => {
    setForm({ ...form, Fotos: url });
  }, [url]);
  //Funciones
  const getConsulta = (PacienteId) => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetConsultasPaciente?PacienteId=${PacienteId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setConsultas(data);
      })
      .catch((err) => setConsultas([]));
  };
  const getTurno = (PacienteId) => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetTurnos?PacienteId=${PacienteId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTurnos(data);
      })
      .catch((err) => setConsultas([]));
  };

  const SelectPaciente = (e) => {
    setPacienteSelected(e);
  };

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

  //onSubmit

  const onSubmitConsulta = () => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddConsulta`,
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
  const onSubmitTurno = () => {
    if (!turnoForm.Fecha || !turnoForm.Observacion || !turnoForm.Hora) {
      setMessageMT("Debes completar todos los campos");
      setOpenT(true);
    } else {
      fetch(
        `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddTurno`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(turnoForm),
        }
      )
        .then(async (res) => {
          try {
            const jsonRes = await res.json();

            if (res.status === 404) {
              setIsError(true);
              setMessage(jsonRes.mensaje);

              console.log(`Hubo un error? ${isError}. Mensaje: ${message}`);
            } else {
              setMessage(jsonRes.mensaje);
              setMessageMT(jsonRes.mensaje);
              setOpenT(true);
              setIsError(false);
            }
          } catch (err) {}
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSubmitPaciente = () => {
    if (!PacienteForm.DNI || !PacienteForm.Email || !PacienteForm.Nombre) {
      setMessageMP("Debes completar todos los campos requeridos");
      setOpenP(true);
    } else {
      fetch(
        `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/AddPaciente`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(PacienteForm),
        }
      )
        .then(async (res) => {
          try {
            const jsonRes = await res.json();

            if (res.status === 404) {
              setIsError(true);
              setMessage(jsonRes.mensaje);

              console.log(`Hubo un error? ${isError}. Mensaje: ${message}`);
            } else {
              setMessage(jsonRes.mensaje);
              setMessageMP(jsonRes.mensaje);
              setOpenP(true);
              setIsError(false);
            }
          } catch (err) {}
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      form={form}
      ImageHandleChange={ImageHandleChange}
      openT={openT}
      setOpenT={setOpenT}
      openC={openC}
      setOpenC={setOpenC}
      openP={openP}
      setOpenP={setOpenP}
      turnoForm={turnoForm}
      setTurnoForm={setTurnoForm}
      imagen={imagen}
      fotosP={fotosP}
      onSubmitTurno={onSubmitTurno}
      messageMT={messageMT}
      setMessageMT={setMessageMT}
      messageMC={messageMC}
      setMessageMC={setMessageMC}
      messageMP={messageMP}
      setMessageMP={setMessageMP}
      Turnos={Turnos}
      onSubmitPaciente={onSubmitPaciente}
      PacienteForm={PacienteForm}
      setPacienteForm={setPacienteForm}
      searchPaciente={searchPaciente}
      setSearchPaciente={setSearchPaciente}
      SearchOpen={SearchOpen}
      setSearchOpen={setSearchOpen}
      fotosP9={fotosP9}
onBurger={onBurger}
      setOnBurger={setOnBurger}
    />
  );
}

export default AdminControlPanel;
