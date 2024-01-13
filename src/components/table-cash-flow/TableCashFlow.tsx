import { BaseLayout } from '../../layouts';

const TableCashFlow = () => {
  return (
    <BaseLayout className="space-y-4">
      <div className="overflow-auto border shadow-md rounded-xl bg-green-light">
        <table
          className="w-full text-green-300 [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start min-w-[150px]">
              Meses
            </td>
            <td className="text-center border-r">Julho</td>
            <td className="text-center border-r">agosto</td>
            <td className="text-center border-r">Setembro</td>
            <td className="text-center border-r">outubro</td>
            <td className="text-center ">Novembro</td>
          </tr>
          <tr className="">
            <td className="font-bold border-r text-start">Saldo inicial</td>
            <td className="text-center border-r">65411613</td>
            <td className="text-center border-r">65411613</td>
            <td className="text-center border-r">65411613</td>
            <td className="text-center border-r">65411613</td>
            <td className="text-center ">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="pb-8 space-y-2">
        <h3 className="text-lg font-bold text-green-300">Contas a receber</h3>
        <div className="overflow-auto border shadow-md rounded-xl">
          <table
            className="w-full text-sm text-grayish-green [&_tr]:h-10 [&_td]:px-4 [&_tr]:border [&_td]:border"
            border={1}
          >
            <tr className="h-[40px]">
              <td className="font-medium min-w-[150px]">Vendas a prazo</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr>
              <td className="font-medium">Vendas a vista</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr>
              <td className="font-medium">pix</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr className="bg-green-light">
              <td className="font-bold">Total</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="pb-8 space-y-2">
        <h3 className="text-lg font-bold text-custom-red">Contas a pagar</h3>
        <div className="overflow-auto border shadow-md rounded-xl">
          <table
            className="w-full text-sm text-grayish-green [&_tr]:h-10 [&_td]:px-4 [&_tr]:border [&_td]:border [&_td]:border-[#D4D4D4]"
            border={1}
          >
            <tr className="h-[40px]">
              <td className="font-medium min-w-[150px]">Vendas a prazo</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr>
              <td className="font-medium">Vendas a vista</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr>
              <td className="font-medium">pix</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
            <tr className="bg-pink-light">
              <td className="font-bold">Total</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
              <td className="text-center border-r">1316516165</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-sm text-grayish-green [&_tr]:h-10 [&_td]:px-4 [&_tr]:border [&_td]:border [&_td]:border-[#D4D4D4]"
          border={1}
        >
          <tr className="h-[40px]">
            <td className="font-medium min-w-[150px]">Saldo Acumulado</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
          </tr>
          <tr>
            <td className="font-medium">Sobra ou Falta</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r text-custom-red">
              -1316516165
            </td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r text-custom-red">-4545</td>
            <td className="text-center border-r">1316516165</td>
          </tr>
          <tr>
            <td className="font-medium">Contas a receber em aberto</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r text-custom-red">-546516</td>
          </tr>
          <tr className="">
            <td className="font-medium">Contas a pagar em aberto</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r text-custom-red">1316516165</td>
            <td className="text-center border-r">1316516165</td>
            <td className="text-center border-r">1316516165</td>
          </tr>
        </table>
      </div>
    </BaseLayout>
  );
};

export default TableCashFlow;
