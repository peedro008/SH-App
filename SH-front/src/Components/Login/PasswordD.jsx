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

    <div className="Dcontainer">
      
<form onSubmit={onSubmit} className="DContainerDiv">
<img  src={LogoLogin} alt="vector" className="DLogoLogin" />
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
            alt="vector"
            className="Dbotonn"
            onClick={onSubmit}
          /> 
          <button type="submit" style={{display:"none"}}/>
   
          <p className="Dfooter">
            Sabina Hairabedian Consultorios Bv. San Juan 670 - Piso 6{" "}
          </p>
        </form>
      </div>






  );
};

export default PasswordDComponent;
