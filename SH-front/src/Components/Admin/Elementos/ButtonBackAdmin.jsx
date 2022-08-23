import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ButtonBackAdmin = ({ Paciente }) => {
  const navigate = useNavigate();

  return (
    <div className="containerBack">
      <button
        className="botonBack"
        onClick={() => navigate("/patient", { state: [Paciente] })}
      >
        <IoIosArrowBack size="4vw" />
        <h3>Volver</h3>
      </button>
    </div>
  );
};

export default ButtonBackAdmin;
