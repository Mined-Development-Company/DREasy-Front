// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls, PageIdentifier, Table } from '../components';

export const InvoicesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Invoices" />
      <BillTableControls />
      <Table />
    </LayoutDualPanel>
  );
};
