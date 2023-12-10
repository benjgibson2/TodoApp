import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';


// Redircts to Login page if the profile page is attempted to be accessed
// while not logged in

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  console.log(location);
  if (!user) {
    return (
        <Navigate 
            to="/login" 
            state={{ pathname: location.pathname }}
            replace
        />
    );
  }
  return children;
};
export default ProtectedRoute;
