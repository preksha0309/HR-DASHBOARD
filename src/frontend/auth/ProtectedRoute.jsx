import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  // Admin can access everything, employee can only access dashboard
  if (role === 'employee' && window.location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;