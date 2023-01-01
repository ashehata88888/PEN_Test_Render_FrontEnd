import React from 'react'
/* eslint-disable */
import Footer from "../Footer"



function NICU() {

  return <div className="homeContainer">
      <h1>Welcome to NICU Page</h1>
       <section>
    <h1>You are logged in! with NICU Privileges</h1>
  <br />
  <p>
     <a href="/Home">Go back to Home Page</a>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default NICU;