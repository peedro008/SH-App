import React, { useEffect, useState } from "react";
import "./login.css";

import LogoLogin from "../../assets/LogoLogin.svg";
import Continuar from "../../assets/Continuar.svg";
import PopUpContra from "../../assets/PopUpContra.svg";

const PasswordDComponent = ({ password, setPassword, onSubmit, isError }) => {
  const [error, setError] = useState("offPop");
  const [errorInput, setErrorInput] = useState("Input");

  useEffect(() => {
    if (isError === true) {
      setError("onPop");
    }
  }, [isError]);

  useEffect(() => {
    if (isError === true) {
      setErrorInput("InputOff");
    }
  }, [isError]);
  return (
    <div className="DContainerDiv">
      <img src={LogoLogin} className="DLogoLogin" alt="Logo" />
      <img
        src={PopUpContra}
        alt="popUp"
        className={isError === false ? "offPop" : "onPop"}
      />

      <p className="DBienvenide">BIENVENIDA SABINA</p>
      <p className="DDNI">PASSWORD</p>

      <input
        type={"password"}
        value={password}
        className={isError === false ? "Input" : "InputOff"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <img
        src={Continuar}
        alt="btn"
        className="Dbotonn"
        onClick={() => {
          onSubmit();
        }}
      />

      <p className="Dfooter">
        Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6{" "}
      </p>
    </div>
  );
};

export default PasswordDComponent;
