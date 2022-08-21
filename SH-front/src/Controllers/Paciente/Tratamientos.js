import React, { useEffect, useState } from "react";
import Tratamiento from "../../Components/Paciente/Tratamientos/Tratamiento";

function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);

  useEffect(() => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetTratamientos`)
      .then((response) => response.json())
      .then((data) => {
        setTratamientos(data);
      });
  }, []);

  return <Tratamiento tratamientos={tratamientos} />;
}

export default Tratamientos;
