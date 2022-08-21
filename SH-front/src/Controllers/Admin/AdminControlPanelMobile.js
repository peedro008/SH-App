import React, { useEffect, useState } from "react";
import AdminControlPanelMobileComponent from "../../Components/Admin/Mobile/AdminControlPanelMobile";

function AdminControlPanelMobile() {
  const [Consultas, setConsultas] = useState([]);
  const [Pacientes, setPacientes] = useState([]);
  const [PacienteSelected, setPacienteSelected] = useState(null);
  const [Tramite, setTramite] = useState(null);

  const getConsulta = (PacienteId) => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetConsultasPaciente?PacienteId=${PacienteId}`)
      .then((response) => response.json())
      .then((data) => {
        setConsultas(data);
      });
  };
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
