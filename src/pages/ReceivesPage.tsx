// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls } from '../components';

export const ReceivesPage = () => {
  return (
    <LayoutDualPanel>
      <h1 className="pt-4 text-5xl font-semibold text-white">Recives</h1>
      <BillTableControls />
    </LayoutDualPanel>
  );
};
