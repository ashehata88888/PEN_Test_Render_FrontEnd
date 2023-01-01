import React from 'react'
/* eslint-disable */
import Footer from "../Footer"



function ENT() {

  return <div className="homeContainer">
      <h1>Welcome to ENT Page</h1>
       <section>
    <h1>You are logged in! with ENT Privileges</h1>
  <br />
  <p>
     <a href="/Home">Go back to Home Page</a>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default ENT;