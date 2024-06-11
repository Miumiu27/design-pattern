import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userContext = useContext(UserContext);
  const isAdmin = userContext?.user?.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
