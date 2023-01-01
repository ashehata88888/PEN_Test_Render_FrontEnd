import React from 'react'
/* eslint-disable */
import Footer from '../Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.css'

// const position = login.res.data.position
// console.log(position)

function BB() {
  const location = useLocation()
  console.log(location.state.token)
  const navigate = useNavigate()
  function navigateToActivity() {
    navigate('/Activity', {
      state: {
        position: location.state.position,
        bl1: location.state.bl1,
        token: location.state.token
      },
      replace: true
    })
  }

  return (
    <div className="homeMain">
      <h1>Welcome to BB Page From Backend API Response </h1>
      <section>
        <h1>You are logged in! with BB Privileges</h1>
        <br />
        <p>
          <button onClick={navigateToActivity}>Go back to Activity Page</button>
        </p>
      </section>
      <Footer />
    </div>
  )

}

export default BB
