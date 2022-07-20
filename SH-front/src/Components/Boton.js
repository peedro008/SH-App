import React from "react";
import { useNavigate } from "react-router-dom";
import "./Boton.css";
const Boton = ({ icon, text, nav }) => {
  const navigate = useNavigate();

  return (
    <button className="boton" onClick={() => navigate(nav)}>
      <div>{icon}</div>
      <h3>{text}</h3>
    </button>
  );
};

export default Boton;
