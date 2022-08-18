import React from "react";
import { TbDiscount2 } from "react-icons/tb";
import { IoPersonAddOutline } from "react-icons/io5";
import Navbar from "../../Paciente/Elementos/Navbar";
import "./AdminControlPanel.css";
import BotonComponent from "../Elementos/Boton";
import Vector1 from "./Vector1.svg";
import Vector2 from "./Vector2.svg";
import BotonTramiteComponent from "../Elementos/BotonTramite";
import Notas from "../../../assets/Notas.svg"
import AntDesp from "../../../assets/AntDesp.svg"
import calen from "../../../assets/calen.svg"
import Edit from "../../../assets/Edit.svg"
import Cam from "../../../assets/Cam.svg"
import AdminClinicalHistoryComponent from "./ClinicalHistory";
import AddConsultaComponent from "./AddConsulta";
function AdminControlPanelComponent({
  Consultas,
  Pacientes,
  getConsulta,
  PacienteSelected,
  setPacienteSelected,
  SelectPaciente,
  Tramite,
  setTramite,
}) {
  let name = PacienteSelected?.Nombre.split(" ");
  if (name) {
    name = `${name[0][0].toUpperCase()}${name[
      name.length - 1
    ][0].toUpperCase()}`;
  }
  return (
    <div className="Main">
      <Navbar />
      <div className="twoSides">
        <div className="LeftSide">
          <p className="ListaTitle">Listado de Pacientes</p>
          <div className="PacientesLista">
            <div
              className="botonContainer1"
           
            >
              <IoPersonAddOutline size={"25px"} color={"#15353B"} />
              <p className="botonText1">Agregar nuevo/a paciente</p>
            </div>

            {Pacientes.map((e) => {
              return (
                <BotonComponent
                  Titulo={e.Nombre}
                  Paciente={e}
                  submit={SelectPaciente}
                />
              );
            })}
          </div>
        </div>
        <div className="RightSide">
          {!PacienteSelected ? (
            <p className="holaSabina">
              Hola Sabina, ¡bienvenida! Seleccioná un/a paciente para ver más
              información.
            </p>
          ) : (
            !Tramite ? (
              <div className="RightMain">
                <div className="PacienteHeader">
                  <div className="Pacientediv1">
                    <div className="Pacientediv2">
                      <p className="CircleName">{name.substring(0, 2)}</p>
                    </div>
                    <div className="Pacientediv3">
                      <h2 className="Paciente2">{PacienteSelected?.Nombre}</h2>
                      <h4 className="Paciente3">
                        Ver información personal del paciente
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tramiteBotonContainer">
                <BotonTramiteComponent Titulo={"Historia Clinica Completa"} Icon={<img src={Notas} style={{width:"2.5vw", height:"2.5vh", }}/>} submit={()=>{setTramite(1)}} />
                <BotonTramiteComponent Titulo={"Agregar última consulta"} Icon={<img src={Edit} style={{width:"2.5vw", height:"2.5vh", }}/>}submit={()=>{setTramite(2)}} />
                <BotonTramiteComponent Titulo={"Agregar próximo turno"} Icon={<img src={calen} style={{width:"2.5vw", height:"2.5vh", }}/>} submit={()=>{setTramite(3)}} />
                <BotonTramiteComponent Titulo={"Fotografías"} Icon={<img src={Cam} style={{width:"2.5vw", height:"2.5vh", }}/>} submit={()=>{setTramite(4)}}/>
                <BotonTramiteComponent Titulo={"Antes y después en fotos"} Icon={<img src={AntDesp} style={{width:"2.5vw", height:"2.5vh", }}/>}  submit={()=>{setTramite(5)}} />
                 </div>
              </div>
            ):Tramite==1?
            <AdminClinicalHistoryComponent PacienteSelected={PacienteSelected} Consultas={Consultas} setTramite={setTramite}/>:
            Tramite==2&&<AddConsultaComponent  PacienteSelected={PacienteSelected} Consultas={Consultas} setTramite={setTramite}/>
          )}
          {/* <div style={{zIndex:0}}>
          <img className="fector1" src={Vector1} />
          <img className="fector2" src={Vector2} /></div> */}
        </div>
      </div>
    </div>
  );
}

export default AdminControlPanelComponent;
