import React, { useEffect, useState } from "react";
import ButtonAdd from "../Elementos/ButtonAdd";
import "./AddTratamientoComponent.css";
import ButtonBackStart from "../Elementos/ButtonBackStart";
import NavBarAdmin from "../Elementos/NavBarAdmin";

const AddTratamientoComponent = ({ formT, setFormT, onSubmitTrat }) => {
  const [addOn, setAddOn] = useState(true);

  useEffect(() => {
    if (formT.Categoria && formT.Titulo && formT.Descripcion) setAddOn(false);
  }, [formT]);
  return (
    <>
      <NavBarAdmin />
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

        <ButtonBackStart />
        <ButtonAdd onSubmitConsulta={onSubmitTrat} addOn={addOn} />
      </div>
    </>
  );
};

export default AddTratamientoComponent;
