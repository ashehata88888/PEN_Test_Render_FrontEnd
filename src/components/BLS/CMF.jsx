import React from 'react'
/* eslint-disable */
import Footer from "../Footer"



function CMF() {

  return <div className="homeContainer">
      <h1>Welcome to CMF Page</h1>
       <section>
    <h1>You are logged in! with CMF Privileges</h1>
  <br />
  <p>
     <a href="/Home">Go back to Home Page</a>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default CMF;