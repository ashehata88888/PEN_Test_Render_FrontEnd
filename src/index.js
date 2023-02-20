import React from 'react'
// import ReactDOM from "react-dom";
import App from './components/App.jsx'
/* eslint-disable */
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import {store} from './store/index.js'
import { Provider } from 'react-redux';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <AuthProvider>
    <Provider store={store}>
    <Routes>
  <Route path="/*" element={<App/>}/>
  </Routes>
  </Provider>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);


// ReactDOM.render(
//   <div>
//     {/* <h1>Hello World Yaaaaaaaaaaaaaaaaaaaaaaaa</h1> */}
//     <App />
//   </div>,
//   document.getElementById("root")
// );