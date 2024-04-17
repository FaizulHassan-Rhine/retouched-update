
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContextManager } from '../../App';

const PrivateRoute = () => {
    const [getUserInfo] = useContext(userContextManager); 

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return getUserInfo.status_code == 200 ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;