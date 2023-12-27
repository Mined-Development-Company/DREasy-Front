import { useForm } from 'react-hook-form';
import {
  CurrencyInput,
  DateGroup,
  DateInput,
  ErrorMessage,
  Legend,
  Option,
  Select,
} from '../../forms';
import { Button } from '../ui';
import { BaseLayout } from '../../layouts';

type Fields = {
  value: string;
  documentType: string;
  supplier: string;
  category: string;
  description: string;

  minPaymentDate: string;
  maxPaymentDate: string;

  confirmedPayment: boolean;
  recurrentBill: boolean;
};

export const NewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <BaseLayout>
      <form onSubmit={onSubmit}>
        <div className="gap-5 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-end xl:items-end">
          <label>
            <span className="text-sm text-grayish-green font-medium mb-1">
              Valor *
            </span>

            <CurrencyInput
              classes={{ container: 'w-full' }}
              {...register('value')}
            />

            <ErrorMessage>{errors.value?.message}</ErrorMessage>
          </label>

          <fieldset>
            <Legend>Data de pagamento</Legend>

            <DateGroup className="w-full">
              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('minPaymentDate')}
              />

              <span>até</span>

              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('maxPaymentDate')}
              />
            </DateGroup>

            <ErrorMessage>
              {errors.minPaymentDate?.message || errors.maxPaymentDate?.message}
            </ErrorMessage>
          </fieldset>

          <div>
            <Select
              placeholder="Categoria *"
              classes={{ container: 'w-full' }}
              {...register('category')}
            >
              <Option value="value-a">option a</Option>
              <Option value="value-b">option b</Option>
            </Select>

            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </div>

          <div className="items-end">
            <Select
              placeholder="Tipo de documento *"
              classes={{ container: 'w-full' }}
              {...register('documentType')}
            >
              <Option value="somevalue1">Some option 1</Option>
              <Option value="somevalue2">Some option 2</Option>
            </Select>

            <ErrorMessage>{errors.documentType?.message}</ErrorMessage>
          </div>

          <label>
            <span className="text-sm text-grayish-green font-medium mb-1">
              Fornecedor ou transportadora
            </span>

            <input
              className="p-3 py-4 w-full left-0 border border-zinc-300 top-0 rounded-sm text-xs"
              {...register('supplier')}
            />

            <ErrorMessage>{errors.supplier?.message}</ErrorMessage>
          </label>

          <label htmlFor="">
            <span className="text-sm text-grayish-green font-medium mb-1">
              Descrição
            </span>

            <input
              className="p-3 py-4 w-full left-0 border border-zinc-300 top-0 rounded-sm text-xs"
              {...register('description')}
            />

            <ErrorMessage>{errors.supplier?.message}</ErrorMessage>
          </label>
        </div>

        <div className="flex flex-col mt-2">
          <label className="flex gap-2">
            <input type="checkbox" {...register('recurrentBill')} />

            <span className="text-green-700">
              Esta conta a pagar irá se repetir
            </span>
          </label>

          <label className="flex gap-2">
            <input type="checkbox" {...register('confirmedPayment')} />

            <span className="text-green-700">Pagamento confirmado</span>
          </label>
        </div>

        <div className="flex justify-end gap-5 mt-3 mobile:mt-6">
          <Button
            size="md"
            color="secondary"
            className="text-ellipsis line-clamp-1"
          >
            Salvar e adicionar outro
          </Button>

          <Button size="md">Salvar</Button>
        </div>
      </form>
    </BaseLayout>
  );
};
