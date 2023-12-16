import { LayoutDualPanel } from '../layouts';
import { BillTableControls } from '../components/bill-table-controls/BillTableControls';

export const ReceivesPage = () => {
  return (
    <LayoutDualPanel>
      <h1 className="pt-4 text-5xl font-semibold text-white">Recives</h1>
      <BillTableControls />
    </LayoutDualPanel>
  );
};
