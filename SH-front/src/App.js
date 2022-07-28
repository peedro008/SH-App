import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
function App() {
  const userRole = useSelector((state) => state.userSession).userRole;
  const userID = useSelector((state) => state.userSession).userID;
  console.log(userRole, userID);
  const [imagen, setImagen] = useState([]);
  const [url, setURL] = useState([]);
  const SubirImagen = () => {

    if (imagen == null) return;

    imagen.map(e=>{
      const imagenRef = ref(
      storage,
      `images/${333 * Math.random() + e.name}`
    );
    console.log(imagenRef);
    uploadBytes(imagenRef, e)
      .then(() => {
        getURL(imagenRef);
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Error", err);
      });
    })
    
  };
  const handleChange = (e) =>{
    for(let i = 0; i < e.target.files.length;i++){
      const newImage = e.target.files[i];
      newImage["id"] = Math.random()
      setImagen((prevState)=>[...prevState, newImage])
    }
  }
  const  getURL = (imagenRef) => {
    getDownloadURL(imagenRef).then((url) => {
      setURL((prevState)=>[...prevState, url]);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"file"}  multiple onChange={handleChange} />
        <button onClick={SubirImagen}>Subir</button>
      </header>
    </div>
  );
}

export default App;
