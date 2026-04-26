import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // ────────────────────────────────────────────────
  // First check: if it's a public/auth page → allow access (no redirect)
  // ────────────────────────────────────────────────
  const publicAuthPaths = ['/login', '/register', '/'];

  if (publicAuthPaths.includes(location.pathname)) {
    console.log(`Allowing access to public page: ${location.pathname}`);
    return children;
  }

  // ────────────────────────────────────────────────
  // Only for non-public pages: require authentication
  // ────────────────────────────────────────────────
  if (!user) {
    console.log(`Redirecting to /login from: ${location.pathname}`);
    const pathToSave = location.pathname + location.search;
    localStorage.setItem('lastPath', pathToSave);
    return <Navigate to="/login" replace />;
  }

  // Authenticated → show the page
  return children;
};

export default PrivateRoute;