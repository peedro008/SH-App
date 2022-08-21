import React from "react";
import "./login.css"

import LogoLogin from "../../assets/LogoLogin.svg"
import Continuar from "../../assets/Continuar.svg"
import LogoStart from "../../assets/LogoStart.svg"
import VectorD1 from "./VectorD1.svg"
import VectorD2 from "./VectorD2.svg"
import VectorD3 from "./VectorD3.svg"
import VectorD4 from "./VectorD4.svg"
import VectorD5 from "./VectorD5.svg"
  

const LoginDComponent = ({
    dni,
    setDni,
    onSubmit
}) => {

    return(
        <div className="Dcontainer">
            <div className="Dloader"></div>
        {/* <div className="Dgrow"></div>
        <img src={LogoStart} className="Dlogo" alt="logo"></img> */}
        <div className="Dwhi">
          <div className="DContainerDiv">
           
            <img src={LogoLogin} alt="vector" className="DLogoLogin" />
           
            <p className="DBienvenide">BIENVENIDA/O</p>
            <p className="DDNI">D.N.I</p>
  
            <input
              value={dni}
              className="DInput"
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
        {/* <div className="containerStart">
          <img src={LogoStart} className="logo"></img> 
          <div className="grow"></div> */}
                      <img src={VectorD1} alt="vector" className="VectorD1" />
           <img src={VectorD2} alt="vector" className="VectorD2" />
            <img src={VectorD3} alt="vector" className="VectorD3" />
             <img src={VectorD4} alt="vector" className="VectorD4" />
            <img src={VectorD5} alt="vector" className="VectorD5" />
      </div>
    )
}

export default LoginDComponent