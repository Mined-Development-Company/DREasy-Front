import { Header } from '../components';
import { BillTableControls } from '../components/bill-table-controls/BillTableControls';
import { LayoutDualPanel } from '../layouts';

export const HomePage = () => {
  return (
    <LayoutDualPanel>
      <Header />
      <BillTableControls />
    </LayoutDualPanel>
  );
};
