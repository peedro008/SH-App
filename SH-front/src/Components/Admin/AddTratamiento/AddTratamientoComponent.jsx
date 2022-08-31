import React from "react";
import Navbar from "../../Paciente/Elementos/Navbar";
import ButtonAdd from "../Elementos/ButtonAdd";
import "./AddTratamientoComponent.css";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";

const AddTratamientoComponent = ({ formT, setFormT, onSubmitTrat }) => {
  return (
    //   <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //    <p>Tipo de Tratamiento</p>
    //    <select onChange={(e) => setFormT({...formT, Categoria:e.target.value})} defaultValue=''>
    //           <option value=''>- - -</option>
    //           <option value='Tratamientos faciales'>Tratamientos faciales</option>
    //           <option value='Tratamientos capilares'>Tratamientos capilares</option>
    //           <option value='Tratamientos corporales'>Tratamientos corporales</option>

    //     </select>

    //   <p>Nombre del Tratamiento</p>
    //   <input type={"text"} onChange={(e)=>setFormT({...formT, Titulo:e.target.value})}/>
    //   <p>Descripción</p>
    //   <input type={"text"} onChange={(e)=>setFormT({...formT, Descripcion:e.target.value})}/>
    //   <button onClick={onSubmit}>Subir Tratamiento</button>
    // </div>
    <>
      <Navbar />
      <div className="containerAddConsultaMob">
        <div className="containerHeaderAddCons">
          <h4>Nuevo Tratamiento</h4>
        </div>
        <div className="contFormConsulta">
          <div className="AddFormTrat">
            <div className="AddFormRowMob" style={{ marginTop: "5%" }}>
              <p className="AddFormTitleMob">Tipo Tratamiento</p>
              <select
                className="inputType"
                onChange={(e) =>
                  setFormT({ ...formT, Categoria: e.target.value })
                }
                defaultValue=""
              >
                <option value="">- - -</option>
                <option value="Tratamientos faciales">
                  Tratamientos faciales
                </option>
                <option value="Tratamientos capilares">
                  Tratamientos capilares
                </option>
                <option value="Tratamientos corporales">
                  Tratamientos corporales
                </option>
              </select>
            </div>
            <div className="AddFormRowMob">
              <p className="AddFormTitleMob">Nombre del Tratamiento</p>
              <textarea
                onChange={(e) => setFormT({ ...formT, Titulo: e.target.value })}
                className="textAreaTrat"
                placeholder="Ingrese aquí"
              ></textarea>
            </div>
            <div className="AddFormRowMob">
              <p className="AddFormTitleMob">Descripción</p>
              <textarea
                onChange={(e) =>
                  setFormT({ ...formT, Descripcion: e.target.value })
                }
                className="textAreaTrat"
                placeholder="Ingrese aquí"
              ></textarea>
            </div>
          </div>
        </div>

        <ButtonBack />
        <ButtonAdd onSubmitConsulta={onSubmitTrat} />
      </div>
    </>
  );
};

export default AddTratamientoComponent;
