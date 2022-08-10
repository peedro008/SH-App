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

export const PacienteRouter = () => {
  return (
    <div className="containerRoutes">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clinical-history" element={<ClinicalHistory />} />
        <Route
          path="/photographic-tracking"
          element={<PhotograpicTracking />}
        ></Route>
        <Route
          path="/before-and-after"
          element={<BeforeAndAfterController />}
        />
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
        <Route path="/" element={<AdminControlPanel />} />
        <Route path="/addCupon" element={<AddCupon />} />
        <Route path="/addConsulta" element={<AddConsulta />} />
        <Route path="/addPaciente" element={<AddPaciente />} />
        <Route path="/addTratamiento" element={<AddTratamiento />} />
      </Routes>
    </div>
  );
};
