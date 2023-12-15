import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages';
import { Login } from '../components/login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
