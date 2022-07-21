import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import HandlerRoutes from "./Routes/Routes";
import Dashboard from "./Components/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HandlerRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
