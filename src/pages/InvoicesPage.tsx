// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import {
  BillTableControls,
  NewAccount,
  PageIdentifier,
  Table,
} from '../components';
import { Route, Routes } from 'react-router-dom';

export const InvoicesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Invoices" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BillTableControls />
              <Table />
            </>
          }
        />
        <Route path="/account" element={<NewAccount />} />
      </Routes>
    </LayoutDualPanel>
  );
};
