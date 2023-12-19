import { BaseLayout } from '../../layouts';
// Libs
import { cn } from '../../libs';
// Forms
import { InputCheckBox } from '../../forms';
// React icons
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import React from 'react';

const data = [
  {
    id: 1,
    situacao: 'Pendente',
    vencimento: '01/02/2023',
    numero: '123456',
    detalhe: 'Pagamento de fatura',
    pago: 200,
    pago_em: '----',
    valor: 100,
    a_pagar: 100,
    acao: 'Pagar agora',
  },
  {
    id: 2,
    situacao: 'Pago',
    vencimento: '15/02/2023',
    numero: '789012',
    detalhe: 'Compra online',
    pago_em: '10/02/2023',
    pago: 200,
    valor: 50,
    a_pagar: 20,
    acao: 'Ver detalhes',
  },
  {
    id: 3,
    situacao: 'Atrasado',
    vencimento: '10/03/2023',
    numero: '345678',
    pago: 200,
    detalhe: 'Aluguel',
    pago_em: '----',
    valor: 800.0,
    a_pagar: 850,
    acao: 'Pagar agora',
  },
  {
    id: 4,
    situacao: 'Pendente',
    vencimento: '05/04/2023',
    numero: '901234',
    pago: 200,
    detalhe: 'Mensalidade escolar',
    pago_em: '----',
    valor: 200,
    a_pagar: 200,
    acao: 'Pagar agora',
  },
  {
    id: 5,
    situacao: 'Pago',
    vencimento: '20/04/2023',
    numero: '567890',
    pago: 200,
    detalhe: 'Manutenção do carro',
    pago_em: '18/04/2023',
    valor: 150.0,
    a_pagar: 30,
    acao: 'Ver detalhes',
  },
  {
    id: 6,
    situacao: 'Atrasado',
    vencimento: '15/05/2023',
    numero: '123456',
    pago: 200,
    detalhe: 'Conta de luz',
    pago_em: '----',
    valor: 80,
    a_pagar: 90,
    acao: 'Pagar agora',
  },
  {
    id: 7,
    situacao: 'Pendente',
    vencimento: '10/06/2023',
    numero: '789012',
    pago: 200,
    detalhe: 'Compra de mantimentos',
    pago_em: '----',
    valor: 70,
    a_pagar: 70,
    acao: 'Pagar agora',
  },
  {
    id: 8,
    situacao: 'Pago',
    vencimento: '25/06/2023',
    numero: '345678',
    pago: 200,
    detalhe: 'Assinatura de streaming',
    pago_em: '23/06/2023',
    valor: 10,
    a_pagar: 0,
    acao: 'Ver detalhes',
  },
  {
    id: 9,
    situacao: 'Atrasado',
    vencimento: '20/07/2023',
    numero: '901234',
    pago: 200,
    detalhe: 'Parcela do empréstimo',
    pago_em: '----',
    valor: 300,
    a_pagar: 320,
    acao: 'Pagar agora',
  },
  {
    id: 10,
    situacao: 'Pendente',
    vencimento: '15/08/2023',
    numero: '567890',
    pago: 200,
    detalhe: 'Taxa de associação',
    pago_em: '----',
    valor: 25,
    a_pagar: 25,
    acao: 'Pagar agora',
  },
  {
    id: 11,
    situacao: 'Pago',
    vencimento: '20/04/2023',
    numero: '567890',
    pago: 200,
    detalhe: 'Manutenção do carro',
    pago_em: '18/04/2023',
    valor: 150.0,
    a_pagar: 30,
    acao: 'Ver detalhes',
  },
  {
    id: 12,
    situacao: 'Atrasado',
    vencimento: '15/05/2023',
    numero: '123456',
    pago: 200,
    detalhe: 'Conta de luz',
    pago_em: '----',
    valor: 80,
    a_pagar: 90,
    acao: 'Pagar agora',
  },
  {
    id: 13,
    situacao: 'Pendente',
    vencimento: '10/06/2023',
    numero: '789012',
    pago: 200,
    detalhe: 'Compra de mantimentos',
    pago_em: '----',
    valor: 70,
    a_pagar: 70,
    acao: 'Pagar agora',
  },
  {
    id: 14,
    situacao: 'Pago',
    vencimento: '25/06/2023',
    numero: '345678',
    pago: 200,
    detalhe: 'Assinatura de streaming',
    pago_em: '23/06/2023',
    valor: 10,
    a_pagar: 0,
    acao: 'Ver detalhes',
  },
  {
    id: 15,
    situacao: 'Atrasado',
    vencimento: '20/07/2023',
    numero: '901234',
    pago: 200,
    detalhe: 'Parcela do empréstimo',
    pago_em: '----',
    valor: 300,
    a_pagar: 320,
    acao: 'Pagar agora',
  },
  {
    id: 16,
    situacao: 'Pendente',
    vencimento: '15/08/2023',
    numero: '567890',
    pago: 200,
    detalhe: 'Taxa de associação',
    pago_em: '----',
    valor: 25,
    a_pagar: 25,
    acao: 'Pagar agora',
  },
];

type IdataBills = typeof data;

const ITEMS_PER_PAGE = 5;

export const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dataBills, setDataBills] = React.useState<IdataBills>([]);
  const [action, setAction] = React.useState<number>(0);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setDataBills(data.slice(startIndex, endIndex));
  }, [currentPage]);

  return (
    <BaseLayout className="p-0 overflow-x-auto sm:p-0">
      <table className="w-full" border={1}>
        <colgroup>
          <col className="border-b" />
        </colgroup>
        <thead>
          <tr className="text-sm text-green-300 uppercase border-b bg-green-light">
            <th className="flex items-center justify-center py-4 pl-4">
              <InputCheckBox />
            </th>

            <th className="min-w-[100px] lg:min-w-fit ">SITUAÇÃO</th>

            <th className="min-w-[100px] lg:min-w-fit text-start">
              VENCIMENTO
            </th>

            <th className="min-w-[100px] lg:min-w-fit text-start">NÚMERO</th>

            <th className="min-w-[100px] lg:min-w-fit text-start">DETALHE</th>

            <th className="text-end">PAGO EM</th>

            <th className="min-w-[100px] lg:min-w-fit text-end">VALOR</th>

            <th className="min-w-[100px] lg:min-w-fit text-end">PAGo</th>

            <th className="min-w-[100px] lg:min-w-fit text-end">Á PAGAR</th>

            <th className="min-w-[100px] lg:min-w-fit px-4">AÇÃO</th>
          </tr>
        </thead>
        <tbody>
          {dataBills.map((data) => {
            return (
              <tr
                key={data.id}
                className="text-center border-b text-grayish-green"
              >
                <td className="py-4 pl-4">
                  <InputCheckBox />
                </td>

                <td>
                  {data.situacao === 'Pago' && (
                    <div className="w-6 h-6 m-auto bg-green-300 rounded-full"></div>
                  )}
                  {data.situacao === 'Atrasado' && (
                    <div className="w-6 h-6 m-auto bg-red-500 rounded-full"></div>
                  )}
                  {data.situacao === 'Pendente' && (
                    <div className="w-6 h-6 m-auto bg-gray-400 rounded-full"></div>
                  )}
                </td>

                <td className="pl-3 text-start">{data.vencimento}</td>

                <td className="pl-2 text-start">{data.numero}</td>

                <td className="desktop:w-[150px] pl-2 text-start">
                  {data.detalhe}
                </td>

                <td className="min-w-[150px] text-end">{data.pago_em}</td>

                <td className="text-end">
                  R${data.valor.toFixed(2).replace('.', ',')}
                </td>

                <td className="text-end">
                  R${data.pago.toFixed(2).replace('.', ',')}
                </td>

                <td className="text-end">
                  R${data.a_pagar.toFixed(2).replace('.', ',')}
                </td>

                <td className="relative">
                  <button onClick={() => setAction(action === 0 ? data.id : 0)}>
                    <IoEllipsisVerticalSharp />
                  </button>
                  {data.id === action && (
                    <div className="absolute left-0 z-10 flex flex-col items-start p-2 bg-white border rounded-lg shadow-lg">
                      <button className="hover:underline hover:decoration-1">
                        editar
                      </button>
                      <button className="hover:underline hover:decoration-1">
                        estornar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="text-base bg-green-light">
            <th className="py-4 font-bold">Total</th>
            <th className="font-medium max-w-[100px]">
              registros: {data.length}
            </th>

            <th></th>

            <th></th>

            <th></th>

            <th className="font-medium text-start">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={cn(
                    'px-2',
                    currentPage === index + 1 ? 'font-bold' : 'font-normal',
                  )}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </th>

            <th className="pl-2 text-sm font-medium text-end">
              R$
              {dataBills
                .reduce((accumulator, { valor }) => accumulator + valor, 0)
                .toFixed(2)
                .replace('.', ',')}
            </th>

            <th className="pl-2 text-sm font-medium text-end">
              R$
              {dataBills
                .reduce((accumulator, { pago }) => accumulator + pago, 0)
                .toFixed(2)
                .replace('.', ',')}
            </th>

            <th className="pl-2 text-sm font-medium text-end">
              R$
              {dataBills
                .reduce((accumulator, { a_pagar }) => accumulator + a_pagar, 0)
                .toFixed(2)
                .replace('.', ',')}
            </th>
          </tr>
        </tfoot>
      </table>
    </BaseLayout>
  );
};
