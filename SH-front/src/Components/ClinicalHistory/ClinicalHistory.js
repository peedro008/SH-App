import React from "react";
import ButtonBack from "../ButtonBack";
import Navbar from "../Navbar";
import "./ClinicalHistory.css";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const ClinicalHistory = () => {
  
  let data = [
    {name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd"},
    {name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd"},
    {name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd"},
    {name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd"},
    {name: "Alfonso", data: "SADSADSADASDsadasdasdasdsd"}
  ]
  
const SCROLL_DIRECTION = {
  H:"horizontal",
  
}
  return (
     <div className="main">
      <Navbar />
     
       <div className="containerHeader">
         <h2>Jose Alfonso</h2>
         <h4>Historia clínica</h4>
      </div>
      <div className="Carousel">
      <Carousel showStatus={false}  showThumbs={false} infiniteLoop={true} >
                <div className="ConsultaCard">
                    asdas
                    
                </div>
                <div className="ConsultaCard">
                    aaa
                    
                </div>
                <div className="ConsultaCard">
                    
                    ggg
                </div>
                <div className="ConsultaCard">
                    asdas
                    
                </div>
                <div className="ConsultaCard">
                    aaa
                    
                </div>
                <div className="ConsultaCard">
                    
                    ggg
                </div>
                <div className="ConsultaCard">
                    asdas
                    
                </div>
                <div className="ConsultaCard">
                    aaa
                    
                </div>
                <div className="ConsultaCard">
                    
                    ggg
                </div>
                <div className="ConsultaCard">
                    asdas
                    
                </div>
                <div className="ConsultaCard">
                    aaa
                    
                </div>
                <div className="ConsultaCard">
                    
                    ggg
                </div>
            </Carousel>
          </div>
       <div>
         <div className="containerFooter">
           <button className="buttonPink">
             <BsShare size="5vw" />
           </button>
           <button className="buttonPink">
             <FiDownload size="5vw" />
           </button>
         </div>
         <ButtonBack />
       </div> 
     </div>
  );
};

export default ClinicalHistory;
