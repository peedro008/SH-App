import "./Bienvenide.css";
import LogoRedo from "../../assets/LogoRedo.svg";
import Vector3 from "../../assets/Vector3.svg";
import Vector4 from "../../assets/Vector4.svg";
import Vector5 from "../../assets/Vector5.svg";
import Vector6 from "../../assets/Vector6.svg";

const BienvenideComponent = () => {
  return (
    
    <div className="ContainerDiv">
      <img src={Vector6} alt="vector" className="Vector6" />
      <img src={Vector3} alt="vector" className="Vector3" />
      <img src={LogoRedo} alt="vector" className="LogoRedo" />
      <p className="Bienvenide">Bienvenido Jose</p>
    <p className="text">  Acá podés ver la evolución de tu tratamiento en SH consultorios.</p>
    <p className="text"> Historia clínica, fotografías, indicaciones y más.</p>
      <img src={Vector4} alt="vector" className="Vector4" />
      <img src={Vector5} alt="vector" className="Vector5" />
      <button className="Comenzar">Comenzar</button>
      <button className="ProximoTurno">Próximo Turno</button>
    </div>
  );
};

export default BienvenideComponent;
