// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls, PageIdentifier } from '../components';
import { BillForm } from '../forms/bill-form/BillForm';

export const InvoicesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Invoices" />
      <BillTableControls />
      <BillForm />
    </LayoutDualPanel>
  );
};
