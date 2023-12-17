// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls, PageIdentifier } from '../components';

export const InvoicesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Invoices" />
      <BillTableControls />
    </LayoutDualPanel>
  );
};
