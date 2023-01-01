import React from 'react'
/* eslint-disable */
import Footer from "../Footer"



function WCL () {

  return <div className="homeContainer">
      <h1>Welcome to WCL Page</h1>
       <section>
    <h1>You are logged in! with WCL Privileges</h1>
  <br />
  <p>
     <a href="/Home">Go back to Home Page</a>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default WCL;