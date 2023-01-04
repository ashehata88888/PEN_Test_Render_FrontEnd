/* eslint-disable */
import React, { Component }  from 'react';
// import LogIn from "./Login";
// import Footer from "./Footer";

// export default function App() {
// return <div>
//     <LogIn/>
//     <Footer/>
// </div>
// }

//just comment to solve git issue

// import Register from './components/Register';
import Login from './Login'
import Home from './BLS/Home'
import Layout from './Layout'

// import Editor from './components/Editor';
// import Admin from './components/Admin';
import Missing from './Missing'
import Unauthorized from './Unauthorized'
// import Lounge from './components/Lounge';
import RequireAuth from './RequireAuth'
import { Routes, Route } from 'react-router-dom'




// Imprting All BLS pages 

// import BB from './BLS/BB';
// import BIOS from './BLS/BIOS';
// import CONS from './BLS/CONS';
// import DM from './BLS/DM';
// import IMP from './BLS/IMP';
// import SD from './BLS/SD';
// import STER from './BLS/STER';
// import WCL from './BLS/WCL';
// import CMF from './BLS/CMF';
// import TRM from './BLS/TRM';
// import OR from './BLS/OR';
// import ENT from './BLS/ENT';
// import ENTTH from './BLS/ENTTH';
// import UR from './BLS/UR';
// import JOT from './BLS/JOT';
// import LAPA from './BLS/LAPA';
// import GYN from './BLS/GYN';
// import ERBE from './BLS/ERBE';
// import ICU from './BLS/ICU';
// import NICU from './BLS/NICU';
// import SE from './BLS/SE';
// import Fluke from './BLS/Fluke';
// import Private_Medical_upper from './BLS/Private_Medical_upper';
// import Private_Medical_lower from './BLS/Private_Medical_lower';
// import Private_OR from './BLS/Private_OR';
// import Private_Disposable from './BLS/Private_Disposable';
// import ICU_NICU from './BLS/ICU_NICU';
import Admin from './BLS/Admin';
import Developer from './BLS/Developer';
import Activity from './BLS/Activity'
// import LabTabs from './BLS/FullWidthTabs'

// const ROLES = {
//   'User': 2001,
//   'Editor': 1984,
//   'Admin': 5150
// }

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="LinkPage" element={<LinkPage />} /> */}
        <Route path="/" element={<Login />} />
   {/* <Route path="Activity" element={<Activity />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
    
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="Home" element={<Home />} />
        <Route path="http://localhost:3000/Home" element={<Home />} />
        
        <Route path="https://pen-test.onrender.com/Home" element={<Home />} />


        
        {/* <Route path="labTabs" element={<LabTabs />} /> */}

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route> */}

        <Route element={<RequireAuth/>}>
   
          {/* <Route path="BB" element={<BB />} />
          <Route path="BIOS" element={<BIOS />} />
          <Route path="CONS" element={<CONS />} />
          <Route path="DM" element={<DM />} />
          <Route path="IMP" element={<IMP />} />
          <Route path="SD" element={<SD />} />
          <Route path="STER" element={<STER />} />
          <Route path="WCL" element={<WCL />} />
          <Route path="JOT" element={<JOT />} />
          <Route path="CMF" element={<CMF />} />
          <Route path="TRM" element={<TRM />} />
          <Route path="OR" element={<OR />} />
          <Route path="ENT" element={<ENT />} />
          <Route path="ENTTH" element={<ENTTH />} />
          <Route path="UR" element={<UR />} />
          <Route path="LAPA" element={<LAPA />} />
          <Route path="GYN" element={<GYN />} />
          <Route path="ERBE" element={<ERBE />} />
          <Route path="ICU" element={<ICU />} />
          <Route path="NICU" element={<NICU />} />
          <Route path="SE" element={<SE />} />
          <Route path="Fluke" element={<Fluke />} />
          <Route path="Private_Medical_upper" element={<Private_Medical_upper />} />
          <Route path="Private_Medical_lower" element={<Private_Medical_lower />} />
          <Route path="Private_OR" element={<Private_OR />} />
          <Route path="Private_Disposable" element={<Private_Disposable />} />

          <Route path="ICU_NICU" element={<ICU_NICU />} /> */}
          <Route path="Admin" element={<Admin />} />
          <Route path="Developer" element={<Developer />} />
          <Route path="Activity" element={<Activity />} />
          {/* <Route path="Home" element={<Home />} /> */}
      
         </Route>





        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route> */}


        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}
{/* catch all */}
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;