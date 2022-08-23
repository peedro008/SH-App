import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Paciente/Dashboard/Dashboard";
import ClinicalHistory from "../Controllers/Paciente/ClinicalHistory";
import Tratamiento from "../Controllers/Paciente/Tratamientos";
import Password from "../Controllers/Login/password";
import Login from "../Controllers/Login/login";
import AddConsulta from "../Controllers/Admin/AddConsulta";
import AddPaciente from "../Controllers/Admin/addPaciente";
import AddTratamiento from "../Controllers/Admin/AddTratamiento";
import PhotograpicTracking from "../Controllers/Paciente/PhotograpicTracking";
import BeforeAndAfterController from "../Controllers/Paciente/BeforeAndAfter";
import AdminControlPanel from "../Controllers/Admin/AdminControlPanel";
import AddCupon from "../Controllers/Admin/AddCupon";
import Cupones from "../Controllers/Paciente/Cupones";
import Comparation from "../Components/Paciente/BeforeAndAfter/Comparation";
import AdminControlPanelMobile from "../Controllers/Admin/AdminControlPanelMobile";

import ClinicalHistoryAdmin from "../Components/Admin/Mobile/ClinicalHistoryAdmin/ClinicalHistoryAdmin";
import Fotos from "../Components/Admin/Mobile/Fotos/Fotos";
import DashboardAdminComponent from "../Components/Admin/Mobile/DashboardAdmin/DashboardAdmin";
import BeforeAndAfterAdmin from "../Components/Admin/Mobile/BeforeAndAfterAdmin/BeforeAndAfterAdmin";
import ComparationAdmin from "../Components/Admin/Mobile/BeforeAndAfterAdmin/ComparationAdmin";
import InfoPaciente from "../Components/Admin/Mobile/InfoPaciente/InfoPaciente";
import AddTurnoMobile from "../Components/Admin/AddTurno/AddTurnoMobile";
import AddTurno from "../Controllers/Admin/AddTurno";

export const PacienteRouter = () => {
  return (
    <div className="containerRoutes">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clinical-history" element={<ClinicalHistory />} />
        <Route
          path="/photographic-tracking"
          element={<PhotograpicTracking />}
        />
        <Route
          path="/before-and-after"
          element={<BeforeAndAfterController />}
        />
        <Route path="/compare" element={<Comparation />} />
        <Route path="/tratamientos" element={<Tratamiento />} />
        <Route path="/cupon" element={<Cupones />} />
        <Route path="/addCupon" element={<AddCupon />} />
        <Route path="/addConsulta" element={<AddConsulta />} />
        <Route path="/addCupon" element={<AddCupon />} />
        <Route path="/addPaciente" element={<AddPaciente />} />
        <Route path="/addTratamiento" element={<AddTratamiento />} />
      </Routes>
    </div>
  );
};

export const LoginRouter = () => {
  return (
    <div className="containerRoutes">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
};

export const AdminRouter = () => {
  return (
    <div className="containerRoutes">
      <Routes>
        <Route
          path="/"
          element={
            document.documentElement.scrollWidth < 750 ? (
              <AdminControlPanelMobile />
            ) : (
              <AdminControlPanel />
            )
          }
        />
        <Route path="/patient" element={<DashboardAdminComponent />} />
        <Route
          path="/clinicalHistoryAdmin"
          element={<ClinicalHistoryAdmin />}
        />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/compareAdmin" element={<ComparationAdmin />} />
        <Route path="/beforeAndAfterAdmin" element={<BeforeAndAfterAdmin />} />
        <Route path="/infoPaciente" element={<InfoPaciente />} />
        <Route path="/addCupon" element={<AddCupon />} />
        <Route path="/addConsulta" element={<AddConsulta />} />
        <Route path="/addturno" element={<AddTurno />} />
        <Route path="/addPaciente" element={<AddPaciente />} />
        <Route path="/addTratamiento" element={<AddTratamiento />} />
      </Routes>
    </div>
  );
};
