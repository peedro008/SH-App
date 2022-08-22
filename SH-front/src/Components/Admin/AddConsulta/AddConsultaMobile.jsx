import React from "react";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";

import BotonMas from "./../AdminControlPanel/BotonMas.svg";
import "./AddConsultaMobile.css";
import Navbar from "../../Paciente/Elementos/Navbar";
import ButtonAdd from "../Elementos/ButtonAdd";
import { useLocation } from "react-router-dom";
function AddConsultaComponentMobile({
  form,
  setForm,
  onSubmitConsulta,
  ImageHandleChange,
  setTramite,
  imagen,
}) {
  const location = useLocation();
  console.log(location);
  const Nombre = location.state[0];
  return (
    <div className="containerAddConsultaMob">
      <Navbar />
      <div className="containerHeader">
        <h2>{Nombre}</h2>
        <h4>Nueva Consulta</h4>
      </div>
      <div className="AddContainMob">
        <div className="AddFormMob">
          <div className="AddFormRowMob" style={{ marginTop: "30px" }}>
            <p className="AddFormTitleMob">Consulta</p>
            <textarea
              className="AddFormInputMob"
              onChange={(e) => setForm({ ...form, Detalle: e.target.value })}
              placeholder="Ingrese aquí"
            ></textarea>
          </div>
          <div className="AddFormRowMob">
            <p className="AddFormTitleMob">Se Indicó</p>
            <textarea
              onChange={(e) => setForm({ ...form, Indicacion: e.target.value })}
              className="AddFormInputMob"
              placeholder="Ingrese aquí"
            ></textarea>
          </div>
          <div className="AddFormFotoRowMob" style={{ marginBottom: "30px" }}>
            <div style={{ flexDirection: "row", marginRight: "30px" }}>
              <p className="AddFormTitleMob">Añadir Fotos</p>

              {imagen?.length ? (
                <p
                  className="AddFormTitle"
                  style={{
                    fontSize: "13px",
                    marginTop: "5px",
                    fontColor: "grey",
                  }}
                >
                  {imagen.length} imagenes subidas
                </p>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                type={"file"}
                multiple
                style={{ display: "none", backgroundSize: "cover" }}
                id="archivo"
                onChange={ImageHandleChange}
              />{" "}
              <div style={{ flexDirection: "row" }}></div>
              <label htmlFor="archivo">
                <img style={{ cursor: "pointer" }} src={BotonMas} />
              </label>
            </div>
          </div>
        </div>
      </div>
      <ButtonBack />
      <ButtonAdd onSubmitConsulta={onSubmitConsulta} />
      {/* <div className="containerBack">
        <img
          alt="btnAdd"
          src={Añadir}
          style={{
            position: "absolute",
            width: "95px",
            height: "48px",
            bottom: "5vh",
            right: "1vw",
            zIndex: 5,
            cursor: "pointer",
          }}
          onClick={onSubmitConsulta}
        />
      </div> */}
    </div>
  );
}

export default AddConsultaComponentMobile;
