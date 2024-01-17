// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { PageIdentifier } from '../components';
import { CashFlowFilter } from '../components/cash-flow-filter/CashFlowFilter';
import TableDre from '../components/table-dre/TableDre';
import { Graphic } from '../components/graphic';

export const DrePage = () => {

  const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const arrayDados = [{
    label: 'Receitas',
    data: [19, 20, 15, 20, 2, 14],
    backgroundColor: '#4ADE80',
  },
  {
    label: 'Despesas',
    data: [25, 19, 10, 12, 26, 15],
    backgroundColor: '#FF3636',
  }]

  return (
    <LayoutDualPanel>
      <PageIdentifier title="DRE" />
      <CashFlowFilter />
      <Graphic title='DRE' labels={labels} arrayDados={arrayDados} />
      <TableDre />
    </LayoutDualPanel>
  );
};
