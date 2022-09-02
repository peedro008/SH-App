import React, { useEffect, useState } from "react";
import AdminControlPanelMobileComponent from "../../Components/Admin/Mobile/AdminControlPanelMobile";

function AdminControlPanelMobile() {
  const [Pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetPacientes`
    )
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
      });
  }, []);

  return <AdminControlPanelMobileComponent Pacientes={Pacientes} />;
}

export default AdminControlPanelMobile;
