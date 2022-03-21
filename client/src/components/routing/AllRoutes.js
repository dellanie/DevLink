import React from 'react';
import {Route,Routes} from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Routes>
    </div>
  )
}

export default AllRoutes;