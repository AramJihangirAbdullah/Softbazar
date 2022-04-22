import React , {useContext} from 'react';

import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from './AuthContext';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext)

   
    const location = useLocation();

    return (
        auth.roles == allowedRoles
            ? <Outlet />
            : (auth?.user
                ? <Navigate to="/admin-panel" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />)
    );
}

export default RequireAuth;