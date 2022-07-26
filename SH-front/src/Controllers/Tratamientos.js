import React, { useEffect, useState } from "react";
import Tratamiento from "../Components/Tratamientos/Tratamiento";

function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/GetTratamientos`)
      .then((response) => response.json())
      .then((data) => {
        setTratamientos(data);
      });
  }, []);

  console.log({ tratamientos });
  return <Tratamiento tratamientos={tratamientos} />;
}

export default Tratamientos;
