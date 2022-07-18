import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BienvenideComponent from "./Components/Bienvenide/Bienvenide";
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from 'react-redux';
import Dashboard from "./Components/Dashboard/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
<Dashboard/>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
//<App store={store} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Root from './Root';
// import  store  from './Redux/store';

// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <div>
//     <Provider store={store}>
//     <BrowserRouter>
//        <Root store={store} />
//       </BrowserRouter>
//     </Provider>
//   </div>,

//   document.getElementById('root')
// )
