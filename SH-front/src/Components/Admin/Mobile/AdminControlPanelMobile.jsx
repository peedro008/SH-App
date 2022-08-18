import { IoPersonAddOutline } from "react-icons/io5";
import Navbar from "../../Paciente/Elementos/Navbar";
import "./AdminControlPanelMobile.css";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AdminControlPanelMobileComponent({ Pacientes, PacienteId }) {
  const navigate = useNavigate();

  return (
    <div className="Main">
      <Navbar />

      <div className="containerPatients">
        <p className="ListaTitleMob">Listado de Pacientes</p>
        <div className="patientsList">
          <div
            className="botonContainer1"
            onClick={() => {
              navigate("/addpaciente");
            }}
          >
            <IoPersonAddOutline size={"25px"} color={"#15353B"} />
            <p className="botonTextAdd">Agregar nuevo/a paciente</p>
          </div>

          {Pacientes.map((e, i) => {
            return (
              <div
                key={i}
                className="botonContainerMob"
                onClick={() => {
                  navigate("/patient", {
                    state: [e],
                  });
                }}
              >
                <IoPersonOutline size={"25px"} color={"#15353B"} />
                <p className="botonTextMob">{e.Nombre}</p>
                <div className="subButonMob">
                  <p className="subButonTextMob">ver</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminControlPanelMobileComponent;
