// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { PageIdentifier } from '../components';
import { CashFlowFilter } from '../components/cash-flow-filter/CashFlowFilter';
import TableDre from '../components/table-dre/TableDre';

export const DrePage = () => {
  return (
    <LayoutDualPanel>
      <PageIdentifier title="DRE" />
      <CashFlowFilter />
      <TableDre />
    </LayoutDualPanel>
  );
};
