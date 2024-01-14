// Layout
import { LayoutDualPanel } from '../layouts';
// Components
import { PageIdentifier } from '../components';
import { CashFlowFilter } from '../components/cash-flow-filter/CashFlowFilter';
import TableCashFlow from '../components/table-cash-flow/TableCashFlow';
import { Graphic } from '../components/graphic';

export const CashFlow = () => {

  const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const arrayDados = [{
    label: 'Receitas',
    data: [19, 10, 12, 26, 15, 20],
    backgroundColor: ['#4ADE80'],
  },
  {
    label: 'Despesas',
    data: [20, 15, 20, 2, 14, 25],
    backgroundColor: ['#FF3636'],
  }]

  return (
    <LayoutDualPanel>
      <PageIdentifier title="Cash flow" />
      <CashFlowFilter />
      <Graphic title='FLUXO DE CAIXA' labels={labels} arrayDados={arrayDados} />
      <TableCashFlow />
    </LayoutDualPanel>
  );
};
