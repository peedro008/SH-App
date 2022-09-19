import React, { useEffect } from "react";
import Añadir from "./Añadir.svg";
import volver from "./volver.svg";
function AddTratamientoComponent({
  setTramite,
  trataForm,
  setTrataForm,
  openTR,
  setOpenTR,
  setAddTrat,
  onSubmitTrat,
  messageMTR
}) {
  useEffect(() => {
    setTrataForm({});
    setOpenTR(false);
  }, []);
  return (
    <div
      className="RightMain"
      style={{ height: "100vh", marginInline: "50px" }}
    >
      <p style={{ paddingTop: "50px", fontSize:"24px" }} className="Paciente2">
        Nuevo tratamiento
      </p>

      <div className="AddForm" style={{marginTop:"40px", minHeight:"60vh"}}>
      <div className="AddFormRow">
              <p className="AddFormTitleMob">Tipo Tratamiento</p>
              <select
                className="inputType"
                onChange={(e) =>
                  setTrataForm({ ...trataForm, Categoria: e.target.value })
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
        <div className="AddFormRow" style={{ marginTop: "30px" }}>
          {" "}
          <p className="AddFormTitle">Nombre del Tratamiento</p>
          <textarea
            className="AddFormInput"
            onChange={(e) =>
              setTrataForm({ ...trataForm, Titulo: e.target.value })
            }
            placeholder="Ingrese aquí"
          ></textarea>
        </div>
        <div className="AddFormRow" style={{ marginTop: "30px" }}>
          {" "}
          <p className="AddFormTitle">Descripción</p>
          <textarea
            className="AddFormInput"
            onChange={(e) =>
              setTrataForm({ ...trataForm, Descripcion: e.target.value })
            }
            placeholder="Ingrese aquí"
          ></textarea>
          
        </div>
        
      </div>
      <img
        style={{
          position: "absolute",
          width: "95px",
          height: "48px",
          bottom: "1%",
          right: "5%",
          zIndex: 5,
          cursor: "pointer",
        }}
        src={volver}
        onClick={() => setAddTrat(null)}
      />
      <img
        src={Añadir}
        style={{
          position: "absolute",
          width: "95px",
          height: "48px",
          bottom: "1%",
          right: "14%",
          zIndex: 5,
          cursor: "pointer",
        }}
        onClick={onSubmitTrat}
      />
      {openTR && (
        <div className="modalCont">
          <div className="modal">
            <p className="modalText">{messageMTR}</p>

            <button
              className="modalButton"
              onClick={() => {
                if (messageMTR.substring(0, 3) == "Com") {
                  setOpenTR(false);
                } else {
                  setOpenTR(false);
                  setAddTrat(null);
                }
              }}
            >
       
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTratamientoComponent;
