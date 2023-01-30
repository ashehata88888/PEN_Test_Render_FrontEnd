import React from 'react'
/* eslint-disable */
import Login from "../Login";
import {useLocation} from "react-router-dom";
import Footer from "../Footer"
import VTabBar from './VerticalTabs'
import HTabBar from './FullWidthTabs';
import Header from '../Header'
import AppLogout from './AppLogout'

// const userName = location.state.user_name;
// console.log(userName)
export const UserContext = React.createContext()
function DMHome() {

  const userData = localStorage.getItem('userData')

  console.log("localstorage user Data from Home component",userData)
  // const location = useLocation() 
  // // const userName = location.state.user_name
  // // console.log(userName)
  // const userData = {
  //   id: location.state.id,
  //   first_name: location.state.first_name,
  //   last_name: location.state.last_name,
  //   user_name: location.state.user_name,
  //   user_mail: location.state.user_mail,
  //   position: location.state.position,
  //   privilege: location.state.privilege,
  //   status: location.state.status,
  //   token: location.state.token,
  //   created_date: location.state.created_date,
  //   bl1_id: location.state.bl1_id,
  //   bl2_id: location.state.bl2_id,
  //   bl3_id: location.state.bl3_id,
  //   bl4_id: location.state.bl4_id,
  //   bl5_id: location.state.bl5_id,
  //   bl6_id: location.state.bl6_id,
  //   bl7_id: location.state.bl7_id,
  //   bu_id: location.state.bu_id
  // }
  return (
    <div className="homeMain">
      <UserContext.Provider value={userData}>
        <AppLogout>

       
        <Header />
        {/* <HTabBar /> */}
        <VTabBar />
        <Footer />
        </AppLogout>
      </UserContext.Provider>
    </div>
  )
}

export default DMHome;




