import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Root from "./Root";
import WelcomeUser from "./Components/WelcomeUser/WelcomeUser";
import TratamientosCapilares from "./Components/Tratamientos/TratamientosCapilares";
import Tratamientos from "./Controllers/Tratamientos";
import ClinicalHistoryComponent from "./Components/ClinicalHistory/ClinicalHistory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Tratamientos />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
