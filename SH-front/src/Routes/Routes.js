import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import ClinicalHistory from "../Controllers/ClinicalHistory";
import Tratamiento from "../Controllers/Tratamientos";
import Discount from "../Components/Discount/Discount";
import PasswordComponent from "../Components/Login/Password";
import Login from "../Controllers/login";
import AddConsulta from "../Controllers/AddConsulta";
import AddPaciente from "../Controllers/AddPaciente";
import AddTratamiento from "../Controllers/AddTratamiento";
import PhotograpicTracking from "../Controllers/PhotograpicTracking";
import BeforeAndAfterController from "../Controllers/BeforeAndAfter";

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
        <Route path="/discount" element={<Discount />} />
        <Route path="/addConsulta" element={<AddConsulta />} />
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
        <Route path="/password" element={<PasswordComponent />} />
      </Routes>
    </div>
  );
};
