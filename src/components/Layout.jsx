import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { AuthProvider } from '@/context/AuthContext';
const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <NavBar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
