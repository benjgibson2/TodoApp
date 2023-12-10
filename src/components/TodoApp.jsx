import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NotMatch from '@/routes/NotMatch';
import SinglePage from '@/routes/SinglePage';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';

//We nested all the route elements as children inside a Layout route
// The parent path here is "/" and will be built upon by the child routes

//Slug is a URL param
const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route> 
        <Route path="login" element={<Login />} />
        <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotMatch/>} /> 
      </Route>
    </Routes>
  );
};
export default TodoApp;


