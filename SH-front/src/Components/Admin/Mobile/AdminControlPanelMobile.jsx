import { IoPersonAddOutline } from "react-icons/io5";
import Navbar from "../../Paciente/Elementos/Navbar";
import "./AdminControlPanelMobile.css";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBarCPMobile from "../Elementos/NavBarCPMobile";

function AdminControlPanelMobileComponent({ Pacientes }) {
  const navigate = useNavigate();
  const [searchPaciente, setSearchPaciente] = useState("");
  const [SearchOpen, setSearchOpen] = useState(false);

  return (
    <div className="Main">
      <NavBarCPMobile
        search
        setSearch={setSearchPaciente}
        searchPaciente={searchPaciente}
        SearchOpen={SearchOpen}
        setSearchOpen={setSearchOpen}
      />

      <div className="containerPatients">
        <p className="ListaTitleMob">Listado de Pacientes</p>
        <div className="patientsList">
          <div
            className="botonAddPaciente"
            onClick={() => {
              navigate("/addpaciente");
            }}
          >
            <IoPersonAddOutline size={"25px"} color={"#15353B"} />
            <p className="botonTextAdd">Agregar nuevo/a paciente</p>
          </div>

          {!searchPaciente
            ? Pacientes.map((e, i) => {
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
              })
            : Pacientes.filter((f) =>
                f.Nombre.toUpperCase().includes(searchPaciente.toUpperCase())
              ).map((e, i) => {
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
