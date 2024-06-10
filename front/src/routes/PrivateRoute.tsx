import React, { useContext } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute: React.FC<RouteProps> = ({ ...routeProps }) => {
  const userContext = useContext(UserContext);

  const isAdmin = userContext?.user?.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return <Route {...routeProps} />;
};

export default PrivateRoute;
