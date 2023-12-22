// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls, PageIdentifier, Table } from '../components';

export const ReceivesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Receives" />
      <BillTableControls />
      <Table />
    </LayoutDualPanel>
  );
};
