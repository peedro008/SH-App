import React from "react";
import { Link } from "react-router-dom";
import "./Boton.css";
const Boton = ({ icon, text }) => {
  return (
    <button className="boton">
      <div>{icon}</div>
      <h3>{text}</h3>
    </button>
  );
};

export default Boton;
