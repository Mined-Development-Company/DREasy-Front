// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { PageIdentifier } from '../components';
import { CashFlowFilter } from '../components/cash-flow-filter/CashFlowFilter';
import TableCashFlow from '../components/table-cash-flow/TableCashFlow';

export const CashFlow = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="Cash flow" />
      <CashFlowFilter />
      <TableCashFlow />
    </LayoutDualPanel>
  );
};
