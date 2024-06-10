import { Route, Navigate, useLocation, RouteProps } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
  }

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const location = useLocation();

  const isAuthenticated = userContext && !!userContext.token;

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location.pathname }} replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
