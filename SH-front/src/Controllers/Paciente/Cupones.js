import React, { useEffect, useState } from "react";
import Cupon from "../../Components/Paciente/Cupon/Cupon";

function Cupones() {
  const [Cupones, setCupones] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/GetCupones`)
      .then((response) => response.json())
      .then((data) => {
        setCupones(data);
      });
  }, []);

  return <Cupon Cupones={Cupones} />;
}

export default Cupones;
