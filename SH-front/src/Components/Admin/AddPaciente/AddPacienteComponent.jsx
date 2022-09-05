import React, { useState } from "react";
import { useEffect } from "react";

import ButtonBack from "../../Paciente/Elementos/ButtonBack";
import Navbar from "../../Paciente/Elementos/Navbar";
import NavBarAdmin from "../Elementos/NavBarAdmin";
import "./AddPacienteComponent.css";

const AddPacienteComponent = ({ setFormP, formP, onSubmit }) => {
  const [btnOn, setBtnOn] = useState(true);

  useEffect(() => {
    if (formP.Nombre && formP.DNI && formP.Email) setBtnOn(false);
  }, [formP]);

  return (
    <>
      <NavBarAdmin />
      <div className="containerAddPacienteMob">
        <div className="div1" style={{ marginBottom: "5vh" }}>
          <div className="divAddP">
            <h2>SH</h2>
          </div>
          <div className="div3">
            <input
              style={{ height: "3vh", fontSize: "2.2vh" }}
              placeholder="Nombre Completo"
              className="inputText"
              type={"text"}
              onChange={(e) => setFormP({ ...formP, Nombre: e.target.value })}
            />
          </div>
        </div>
        <div className="contAddFormPaciente">
          <div className="AddFormMobP">
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">DNI</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) => setFormP({ ...formP, DNI: e.target.value })}
                onFocusCapture={() => console.log()}
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Obra Social</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) =>
                  setFormP({ ...formP, ObraSocial: e.target.value })
                }
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">N° de afilidiado</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) =>
                  setFormP({ ...formP, NroAfiliade: e.target.value })
                }
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Fecha de nacimiento</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) =>
                  setFormP({ ...formP, Nacimiento: e.target.value })
                }
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Edad</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) => setFormP({ ...formP, Edad: e.target.value })}
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Email</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) => setFormP({ ...formP, Email: e.target.value })}
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Celular</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) =>
                  setFormP({ ...formP, Celular: e.target.value })
                }
              />
            </div>
            <div className="containerAddPacienteInput">
              <p className="pAddPaciente">Cant. vacunas</p>
              <input
                className="inputText"
                type={"text"}
                onChange={(e) =>
                  setFormP({ ...formP, CantVacunas: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="addPaciente">
          <button
            className="addPacienteBtn"
            disabled={btnOn}
            onClick={onSubmit}
          >
            <h3>Añadir Paciente</h3>
          </button>
        </div>
        {/* <div className="containerGenerateOn">
          <button disabled={true} className="botonGenerate">
            <h3 className="back">Generar</h3>
          </button>
        </div> */}
        <ButtonBack />
      </div>
    </>
  );
};

export default AddPacienteComponent;
