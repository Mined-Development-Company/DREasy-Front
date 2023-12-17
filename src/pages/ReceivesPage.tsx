// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls, PageIdentifier } from '../components';

export const ReceivesPage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Receives" />
      <BillTableControls />
    </LayoutDualPanel>
  );
};
