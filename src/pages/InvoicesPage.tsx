// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls } from '../components';

export const InvoicesPage = () => {
  return (
    <LayoutDualPanel>
      <h1 className="pt-4 text-5xl font-semibold text-white">Invoices</h1>
      <BillTableControls />
    </LayoutDualPanel>
  );
};
