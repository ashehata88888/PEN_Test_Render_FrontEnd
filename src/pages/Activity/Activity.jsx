import React from 'react'
/* eslint-disable */
// import Home from "./Home"
// import { BrowserRouter as Router, Switch, 
//     Route, Redirect,} from "react-router-dom";
import Footer from "./Footer"



function ICU() {

  return <div className="homeContainer">
      <h1>Welcome to ICU Page</h1>
       <section>
    <h1>You are logged in! with ICU Privileges</h1>
  <br />
  <p>
     <a href="/Home">Go back to Home Page</a>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default ICU;
