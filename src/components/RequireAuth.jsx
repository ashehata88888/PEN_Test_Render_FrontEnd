/* eslint-disable */
import React, { Component }  from 'react';
import { useLocation, Navigate, Outlet, useRouteLoaderData ,useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//     const { auth } = useAuth();
//     const location = useLocation();
        // const roll = location.state.role
//     return (
//         auth.roles.find(role => allowedRoles.includes(role))
//             ? <Outlet />
//             : auth.user
//                 ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//                 : <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

const RequireAuth = () => {
        // const [pathHook , setpathHook] = React.useState("/")
    const { auth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const userDatafromStorage = localStorage.getItem('userData');
    console.log("userDatafromStorage",userDatafromStorage.length)
//     if(auth.user.length > 0){
//         setpathHook("Home")
//     }else{
//         setpathHook("/") 
//     }
    console.log("value of auth.user is ",auth.user)
    if(userDatafromStorage.length > 0){
        return <Outlet/>
    }else{
        return  navigate('/' , {replace:false})
        // <Navigate to="/" state={{ from: location }} replace='false' />
    }
//     return (
       
            
//                ? <Outlet/>
//         //        <Navigate to="/Home" state={{ from: location }} replace />
               
//         //        
//                 // : <Navigate to="/unauthorized" state={{ from: location }} replace />
//                 : 
//                 <Navigate to="/" state={{ from: location }} replace='false' />
//     );
}




export default RequireAuth;