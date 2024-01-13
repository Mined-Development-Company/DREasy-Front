import { BaseLayout } from '../../layouts';

const TableDre = () => {
  return (
    <BaseLayout className="space-y-8">
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-green-light text-grayish-green sm:w-[280px]">
              Receita operacional bruta
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="">
            <td className="font-bold border-r text-start">Faturamento</td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-pink-light text-grayish-green sm:w-[280px]">
              Dedução de receita bruta
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="border-b">
            <td className="font-medium border-r text-start">
              Vendas cancelada
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="border-b">
            <td className="font-medium border-r text-start">
              Devolução de venda
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="border-b">
            <td className="font-medium border-r text-start">
              Desconto sobre vendas
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="border-b">
            <td className="font-medium border-r text-start">Impostos</td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-green-light text-grayish-green sm:w-[280px]">
              Receita operacional liquida
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="w-full overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-pink-light text-grayish-green sm:w-[280px]">
              Receita operacional bruta
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
          <tr className="">
            <td className="font-bold border-r text-start">
              Custo dos produtos vendidos
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-green-light text-grayish-green sm:w-[280px]">
              Receita operacional Bruta
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-green-light text-grayish-green sm:w-[280px]">
              Resultado operacional liquido do exercicio
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
      {/*  */}
      <div className="overflow-auto border shadow-md rounded-xl">
        <table
          className="w-full text-[#4D6E5A] [&_tr]:h-10 [&_td]:px-4"
          border={1}
        >
          <tr className="border-b">
            <td className="font-bold border-r text-start bg-green-light text-grayish-green sm:w-[280px]">
              Indice de lucratividade
            </td>
            <td className="text-center border-r">65411613</td>
          </tr>
        </table>
      </div>
    </BaseLayout>
  );
};

export default TableDre;
