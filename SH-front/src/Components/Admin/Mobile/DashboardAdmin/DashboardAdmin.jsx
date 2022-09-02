import React, { useEffect, useState } from "react";

import "./DashboardAdmin.css";
import AntDesp from "../../../../assets/AntDesp.svg";
import Notas from "../../../../assets/Notas.svg";

import calen from "../../../../assets/calen.svg";
import Edit from "../../../../assets/Edit.svg";
import Cam from "../../../../assets/Cam.svg";
// import Vector7 from "../../../assets/Vector7.svg";
import ButtonBack from "../../../Paciente/Elementos/ButtonBack";
import Navbar from "../../../Paciente/Elementos/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DashboardAdminComponent({}) {
  const location = useLocation();
  const { Nombre, Consulta } = location.state[0];
  const [fotos4, setFotos4] = useState([]);
  const [fotos9, setFotos9] = useState([]);
  const [fotosArray4, setFotosArray4] = useState([]);
  const [fotosArray9, setFotosArray9] = useState([]);

  // Armando el array de 4

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetFotosPaciente?PacienteId=${location.state[0].id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFotos4(data);
      });
  }, [location]);

  useEffect(() => {
    let temp2 = [];
    for (let i = 0; i < fotos4.length; i + 4) {
      temp2.push(fotos4.splice(i, i + 4));
    }
    setFotosArray4(temp2);
  }, [fotos4]);

  // Fin array de 4

  // Armando el array de 9

  useEffect(() => {
    fetch(
      `http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetFotosPaciente?PacienteId=${location.state[0].id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFotos9(data);
      });
  }, [location]);

  useEffect(() => {
    let temp3 = [];
    for (let i = 0; i < fotos9.length; i + 9) {
      temp3.push(fotos9.splice(i, i + 9));
    }
    setFotosArray9(temp3);
  }, [fotos9]);

  // Fin array de 9

  const navigate = useNavigate();

  // Nombre
  let name = Nombre.split(" ");
  name = `${name[0][0].toUpperCase()}${name[name.length - 1][0].toUpperCase()}`;
  //
  return (
    <>
      <Navbar />
      <div className="containerPatient">
        <div className="div1" style={{ marginBottom: "5vh" }}>
          <div className="div2">
            <h1>{name}</h1>
          </div>
          <div className="div3">
            <h2 className="2">{Nombre}</h2>
            <h4
              className="3"
              style={{ color: "#3E9AAB", fontSize: "4vw" }}
              onClick={() =>
                navigate("/infoPaciente", {
                  state: [location.state[0]],
                })
              }
            >
              Editar informacion personal
            </h4>
          </div>
        </div>
        <div className="containerPatient3">
          <div
            className="botonTramiteCont"
            onClick={() =>
              navigate("/clinicalHistoryAdmin", {
                state: [Consulta, Nombre, location.state[0]],
              })
            }
          >
            <img
              src={Notas}
              style={{ width: "5vw", height: "5vh" }}
              alt="imagen"
            />
            <p className="botonTramiteText">Historia Clinica Completa</p>
          </div>

          <div
            className="botonTramiteCont"
            onClick={() =>
              navigate("/addconsulta", { state: [location.state[0]] })
            }
          >
            <img
              src={Edit}
              style={{ width: "5vw", height: "5vh" }}
              alt="imagen"
            />
            <p className="botonTramiteText">Agregar última consulta</p>
          </div>

          <div
            className="botonTramiteCont"
            onClick={() =>
              navigate("/fotos", {
                state: [fotosArray4, Nombre, location.state[0]],
              })
            }
          >
            <img
              src={Cam}
              style={{ width: "5vw", height: "5vh" }}
              alt="imagen"
            />
            <p className="botonTramiteText">Fotografías</p>
          </div>

          <div
            className="botonTramiteCont"
            onClick={() =>
              navigate("/compareAdmin", {
                state: [location.state[0], fotosArray9],
              })
            }
          >
            <img
              src={AntDesp}
              style={{ width: "5vw", height: "5vh" }}
              alt="imagen"
            />
            <p className="botonTramiteText">Antes y después en fotos</p>
          </div>
        </div>
      </div>
      <ButtonBack />
    </>
  );
}

export default DashboardAdminComponent;
