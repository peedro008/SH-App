import React from 'react'
import { useState } from 'react';

const TratamientosCapilares = ({tratamientos}) => {

    const [show, setShow] = useState({ pri: false, sec: false, thr: false });
    console.log({tratamientos})

  return (
    <>
       <div className="containerTrat">
          <h4></h4>
          <button
            className="SeeBtn"
            onClick={() => {
              setShow({ ...show, pri: !show.pri });
            }}
          >
            ver
          </button>
        </div>

        <div className="containerText">
          {show.pri && (
            <p>
              N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1 N°1
              N°1 N°1 N°1 N°1
            </p>
          )}
        </div>
    </>
  )
}

export default TratamientosCapilares