import "./Bienvenide.css";
import LogoLogin from "../../../assets/LogoLogin.svg";
import btnQuit from "../../../assets/btnQuit.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BienvenideComponent = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userSession).userName;
  const [turno, setTurno] = useState("turnoStart");
  return (
    <div className="ContainerDiv">
      <img src={LogoLogin} alt="Logo" className="logoLoginBienvenide" />
      <div className="textBienvenide">
        <p className="Bienvenide">Bienvenido/a </p>
        <p className="Bienvenide">{userName}</p>
      </div>
      <p className="text">
        Acá podés ver la evolución de tu tratamiento en SH consultorios.
      </p>
      <p className="text">Historia clínica, fotografías y más.</p>

      <button className="Comenzar" onClick={() => navigate("/main")}>
        Comenzar
      </button>
      <button className="ProximoTurno" onClick={() => setTurno("turnoOn")}>
        Próximo Turno
      </button>
      <div className={turno}>
        <div className="agendaTurno">
          <img
            src={btnQuit}
            alt="Quit"
            style={{
              width: "30px",
              justifySelf: "end",
            }}
            onClick={() => setTurno("turnoOff")}
          />
          <h2>Agendá un turno en SH Consultorios</h2>
          <p>Llamanos al 3513457849</p>
          <p>O envianos un mensaje por whatsapp a traves de este link</p>
        </div>
      </div>
    </div>
  );
};

export default BienvenideComponent;
