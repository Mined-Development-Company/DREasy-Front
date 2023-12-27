// Layout
import { LayoutDualPanel } from '../layouts';
// react-router-dom
import { Route, Routes } from 'react-router-dom';
// Components
import {
  BillTableControls,
  NewAccount,
  PageIdentifier,
  Table,
} from '../components';

export const ReceivesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Receives" />
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
