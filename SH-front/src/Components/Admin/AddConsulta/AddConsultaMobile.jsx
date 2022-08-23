import React from "react";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";
import { useNavigate } from "react-router-dom";
import BotonMas from "./../AdminControlPanel/BotonMas.svg";
import "./AddConsultaMobile.css";
import Navbar from "../../Paciente/Elementos/Navbar";
import ButtonAdd from "../Elementos/ButtonAdd";
import ButtonBackAdmin from "../Elementos/ButtonBackAdmin";

function AddConsultaComponentMobile({
  form,
  setForm,
  onSubmitConsulta,
  ImageHandleChange,
  setTramite,
  imagen,
  Paciente,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="containerAddConsultaMob">
        <div className="containerHeaderAddCons">
          <h2>{Paciente.Nombre}</h2>
          <h4>Nueva Consulta</h4>
        </div>
        <div className="contFormConsulta">
          <div className="AddFormMob">
            <div className="AddFormRowMob" style={{ marginTop: "5%" }}>
              <p className="AddFormTitleMob">Consulta</p>
              <textarea
                className="textareaForm"
                onChange={(e) => setForm({ ...form, Detalle: e.target.value })}
                placeholder="Ingrese aquí"
              ></textarea>
            </div>
            <div className="AddFormRowMob">
              <p className="AddFormTitleMob">Se Indicó</p>
              <textarea
                onChange={(e) =>
                  setForm({ ...form, Indicacion: e.target.value })
                }
                className="textareaForm"
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
                      fontSize: "15px",
                      marginTop: "5%",
                      marginLeft: "10%",
                      fontColor: "grey",
                      backgroundColor: "white",
                      paddingRight: "5%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                      border: "2px solid #7aafb9",
                      borderRadius: "20px",
                    }}
                  >
                    {imagen.length > 1
                      ? `${imagen.length} imagenes subidas`
                      : `${imagen.length} imagen subida`}
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
                />
                <div style={{ flexDirection: "row" }}></div>
                <label htmlFor="archivo">
                  <img
                    alt="Hola"
                    style={{ cursor: "pointer", marginLeft: "50%" }}
                    src={BotonMas}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <ButtonBackAdmin Paciente={Paciente} />
        <ButtonAdd onSubmitConsulta={onSubmitConsulta} />
      </div>
    </>
  );
}

export default AddConsultaComponentMobile;
