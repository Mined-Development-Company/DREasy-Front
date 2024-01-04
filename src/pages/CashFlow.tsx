// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { PageIdentifier } from '../components';
import { CashFlowFilter } from '../components/cash-flow-filter/CashFlowFilter';

export const CashFlow = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Cash flow" />
      <CashFlowFilter />
    </LayoutDualPanel>
  );
};
