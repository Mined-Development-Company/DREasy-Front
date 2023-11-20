import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { Register } from '../components/register/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
