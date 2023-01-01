/* eslint-disable */
import React, { Component }  from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
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
    const { auth } = useAuth();
    const location = useLocation();

    return (
            auth.user
               ?<Outlet/>
        //        <Navigate to="/Home" state={{ from: location }} replace />
               
        //        
                // : <Navigate to="/unauthorized" state={{ from: location }} replace />
                : 
                <Navigate to="/" state={{ from: location }} replace='false' />
    );
}




export default RequireAuth;