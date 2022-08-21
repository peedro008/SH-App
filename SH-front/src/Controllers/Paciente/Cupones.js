import React, { useEffect, useState } from "react";
import Cupon from "../../Components/Paciente/Cupon/Cupon";

function Cupones() {
  const [Cupones, setCupones] = useState([]);

  useEffect(() => {
    fetch(`http://shapi-env.eba-c37uz2s3.us-east-1.elasticbeanstalk.com/GetCupones`)
      .then((response) => response.json())
      .then((data) => {
        setCupones(data);
      });
  }, []);

  return <Cupon Cupones={Cupones} />;
}

export default Cupones;
