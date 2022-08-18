import React, { useEffect, useState } from "react";
import AdminControlPanelMobileComponent from "../../Components/Admin/Mobile/AdminControlPanelMobile";

function AdminControlPanelMobile() {
  const [Consultas, setConsultas] = useState([]);
  const [Pacientes, setPacientes] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);

  const getConsulta = (PacienteId) => {
    fetch(`http://localhost:8080/GetConsultasPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setConsultas(data);
      });
  };
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
  return (
    <AdminControlPanelMobileComponent
      Consultas={Consultas}
      Pacientes={Pacientes}
      getConsulta={getConsulta}
      PacienteSelected={PacienteSelected}
      Tramite={Tramite}
      setTramite={setTramite}
      setPacienteSelected={setPacienteSelected}
      SelectPaciente={SelectPaciente}
    />
  );
}

export default AdminControlPanelMobile;
