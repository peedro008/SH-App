import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import ClinicalHistory from "../Components/ClinicalHistory/ClinicalHistory";
import PhotographicTracking from "../Components/PhotographicTracking/PhotographicTracking";
import BeforaAndAfter from "../Components/BeforeAndAfter/BeforeAndAfter";
import Tratamientos from "../Components/Tratamientos/Tratamientos";
import Discount from "../Components/Discount/Discount";

const HandlerRoutes = () => {
  return (
    <div className="containerRoutes">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clinical-history" element={<ClinicalHistory />} />
        <Route
          path="/photographic-tracking"
          element={<PhotographicTracking />}
        ></Route>
        <Route path="/before-and-after" element={<BeforaAndAfter />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
    </div>
  );
};

export default HandlerRoutes;
