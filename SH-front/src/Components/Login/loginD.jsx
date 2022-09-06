import React, { useEffect, useState } from "react";
import "./login.css";

import LogoLogin from "../../assets/LogoLogin.svg";
import LogoStartNew from "../../assets/LogoStartNew.svg";
import Continuar from "../../assets/Continuar.svg";
import PopUpDNI from "../../assets/PopUpDNI.svg";

const LoginDComponent = ({ dni, setDni, onSubmit, isError }) => {
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
    <div className="Dcontainer">
      <img src={PopUpDNI} alt="popUp" className={error} />
      <div className="grow"></div>
      <div className="Dloader"></div>
      {/* <div className="Dgrow"></div>
        <img src={LogoStart} className="Dlogo" alt="logo"></img> */}
      <div className="containerGrow">
        <img src={LogoStartNew} className="logo2D" alt="logo"></img>
      </div>
      <div className="Dwhi">
        <div className="DContainerDiv">
          <img src={LogoLogin} alt="vector" className="DLogoLogin" />

          <p className="DBienvenide">BIENVENIDA/O</p>
          <p className="DDNI">D.N.I</p>

          <input
            value={dni}
            className={errorInput}
            onChange={(e) => {
              setDni(e.target.value);
            }}
          ></input>
          <img
            src={Continuar}
            alt="vector"
            className="Dbotonn"
            onClick={onSubmit}
          />

          <p className="Dfooter">
            Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDComponent;
