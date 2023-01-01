import React from 'react'
/* eslint-disable */
import Footer from "../Footer"
import { useLocation, useNavigate } from "react-router-dom";


// const position = login.res.data.position
// console.log(position)




function Admin() {
  const location = useLocation()
  console.log(location.state.token)
  const navigate = useNavigate();
  function navigateToActivity() {
    navigate('/Activity', { state:{
      position: location.state.position,
      bu_id: 1,
      token: location.state.token
    }, replace: true
    })
  }


  return <div className="homeContainer">
      <h1>Welcome to {location.state.position} Page From Backend API Response Ya Prince </h1>
       <section>
    <h1>You are logged in! with Admin Privileges</h1>
      <br />
  <p>
     <button onClick={navigateToActivity}>Go back to Activity Page</button>
  </p>
  </section> 
  <Footer/>
  </div>;
}

export default Admin;
