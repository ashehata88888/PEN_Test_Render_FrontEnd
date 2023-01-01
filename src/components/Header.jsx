import React from 'react'
/* eslint-disable */
import pen_logo from '../logos/final_logo1.png'


function Header() {
  return (
    <header className="mainHeader">
      {/* <img className="logoImg" src="../logos/final_logo1.png"/> */}
      {/* <img src={URL.createObjectURL("../logos/final_logo1.png")} alt="fooBar" /> */}
      <img src={pen_logo} alt="PEN-Logo" className="penLogo" />
      {/* <h1 className="headerText"> PEN</h1> */}
    </header>
  )
}

export default Header;