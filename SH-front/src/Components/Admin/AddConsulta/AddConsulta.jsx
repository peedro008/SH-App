import React, { useState } from "react";
import ButtonBack from "../../Paciente/Elementos/ButtonBack";
import "./AddConsulta.css";

function AddConsultaComponent({
  setImagen,
  SubirImagen,
  form,
  setForm,
  onSubmit,
}) {
  const [up, setUp] = useState(null);

  const inputVal = document.getElementById("archivo");
  const text = document.getElementById("text");
  const btn = document.getElementById("upload-btn");

  // inputVal.addEventListener("change", () => {
  //   const path = inputVal.value.split('\\')
  //   const filename = path[path.length - 1]

  //   text.innerText = filename ? filename : "Choose file"
  // })

  return (
    <div className="fondo">
      <div className="containerAddConsulta">
        <div class="formContainer">
          <div className="hola">
            <div class="formGroup">
              <input
                type="text"
                id="name"
                class="formInput"
                placeholder=" "
                onChange={(e) => setForm({ ...form, Detalle: e.target.value })}
              />
              <label for="name" class="formLabel">
                Detalle:
              </label>
              <span class="formLine"></span>
            </div>
            <div class="formGroup">
              <input
                type="text"
                id="user"
                class="formInput"
                placeholder=" "
                onChange={(e) =>
                  setForm({ ...form, Indicacion: e.target.value })
                }
              />
              <label for="user" class="formLabel">
                Indicación:
              </label>
              <span class="formLine"></span>
            </div>
            <div class="formGroup">
              <input
                type="text"
                id="password"
                class="formInput"
                placeholder=" "
                onChange={(e) =>
                  setForm({ ...form, Observacion: e.target.value })
                }
              />
              <label for="password" class="formLabel">
                Observación:
              </label>
              <span class="formLine"></span>
            </div>

            <input
              type={"file"}
              style={{ display: "none" }}
              id="archivo"
              onChange={(e) => setImagen(e.target.files[0])}
            />
            <label id="text" for="archivo">
              <span
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "50%",
                  backgroundColor: "#7aafb9",
                  borderRadius: "1rem",
                  padding: "0.5rem",
                }}
              >
                <svg
                  width="7vw"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z" />
                </svg>
                <p style={{ fontSize: "4vw" }}>Choose File</p>
              </span>
            </label>

            <label>
              <span
                onClick={SubirImagen}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "50%",
                  backgroundColor: "#7aafb9",
                  borderRadius: "1rem",
                  padding: "0.5rem",
                }}
              >
                <svg
                  width="6vw"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25 .001L224 109.3V352c0 17.67 14.33 32 32 32c17.67 0 32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0S239.6 3.125 233.4 9.375L105.4 137.4C92.88 149.9 92.88 170.1 105.4 182.6zM480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z" />
                </svg>
                <p style={{ fontSize: "4vw" }}>Upload File</p>
              </span>
            </label>

            <button class="formSubmit" onClick={onSubmit}>
              Subir consulta
            </button>
          </div>
        </div>
      </div>
      <ButtonBack />
    </div>
  );
}

export default AddConsultaComponent;
