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
  const [imagen, setImagen] = useState(null);
  const SubirImagen = () => {
    if (imagen == null) return;
    const imagenRef = ref(
      storage,
      `images/${333 * Math.random() + imagen.name}`
    );
    console.log(imagenRef);
    uploadBytes(imagenRef, imagen)
      .then(() => {
        getURL(imagenRef);
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Error", err);
      });
  };
  const getURL = (imagenRef) => {
    getDownloadURL(imagenRef).then((url) => {
      alert(url);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"file"} onChange={(e) => setImagen(e.target.files[0])} />
        <button onClick={SubirImagen}>Subir</button>
      </header>
    </div>
  );
}

export default App;
