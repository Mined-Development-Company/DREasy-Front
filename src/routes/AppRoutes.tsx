// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Pages
import {
  CashFlow,
  DrePage,
  InvoicesPage,
  LoginPage,
  ReceivesPage,
  RegisterPage,
} from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/receives/*" element={<ReceivesPage />} />
      <Route path="/invoices/*" element={<InvoicesPage />} />
      <Route path="/cash-flow" element={<CashFlow />} />
      <Route path="/dre" element={<DrePage />} />
    </Routes>
  );
};

export default AppRoutes;
