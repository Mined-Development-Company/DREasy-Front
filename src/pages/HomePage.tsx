// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { BillTableControls } from '../components';

export const HomePage = () => {
  return (
    <LayoutDualPanel>
      <BillTableControls />
    </LayoutDualPanel>
  );
};
