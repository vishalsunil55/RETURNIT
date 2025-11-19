import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ requireAdmin = false }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // You may render a loading spinner here
    return <div>Loading...</div>;
  }

  if (!user) {
    // Not logged in: redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && user.role !== 'admin') {
    // Logged in but not admin: redirect somewhere else
    return <Navigate to="/" replace />;
  }

  // User is authorized
  return <Outlet />;
};

export default PrivateRoute;
