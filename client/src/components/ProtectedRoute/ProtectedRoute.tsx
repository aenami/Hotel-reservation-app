import { Navigate, Outlet } from 'react-router';
import { tokenManager } from '../../utils/tokenManager';

const isTokenValid = () => {
  return tokenManager.isAuthenticated();
};

const ProtectedRoute = () => {
  return isTokenValid() 
    ? <Outlet /> 
    : <Navigate to="/login" replace />;
};

export default ProtectedRoute;