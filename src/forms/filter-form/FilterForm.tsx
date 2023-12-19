// React-hook-form
import { useForm } from 'react-hook-form';
// Components / Ui
import { Button } from '../../components/ui';
// Forms
import { DateInput } from '../DateInput';
import { CurrencyInput } from '../currency-input/CurrencyInput';
import { Option, Select } from '../select';
import { DateGroup } from './DateGroup';
import { FieldsGroup } from './FieldsGroup';
import { Legend } from './Legend';
import { ErrorMessage } from './ErrorMessage';

const statuses = [
  { text: 'Abertas', value: 'open' },
  { text: 'Vencidas', value: 'expired' },
  { text: 'Quitadas', value: 'paid' },
  { text: 'Estornadas', value: 'reversed' },
];

type Fields = {
  status?: string[];

  supplier?: string;
  category?: string;
  documentType?: string;
  bankAccount?: string;

  minValue?: number;
  maxValue?: number;

  minOpenDate?: string;
  maxOpenDate?: string;

  minExpirationDate?: string;
  maxExpirationDate?: string;

  minPaymentDate?: string;
  maxPaymentDate?: string;

  minReversalDate?: string;
  maxReversalDate?: string;
};

export function FilterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  const onSubmit = handleSubmit((fields) => {
    console.log(fields);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col flex-wrap desktop:flex-nowrap justify-between gap-8 desktop:gap-4 mt-8 mobile:flex-row">
        <FieldsGroup className="justify-between tablet:min-w-[48.5%] desktop:min-w-0">
          <fieldset className="grid grid-cols-2 grid-rows-2 text-sm">
            <Legend>Status</Legend>

            {statuses.map((status) => (
              <label key={status.text}>
                <input
                  {...register('status')}
                  value={status.value}
                  type="checkbox"
                  name="status"
                  className="mr-1"
                />

                <span>{status.text}</span>
              </label>
            ))}

            <ErrorMessage>{errors.status?.message}</ErrorMessage>
          </fieldset>

          <fieldset>
            <Legend>Valor</Legend>

            <DateGroup>
              <CurrencyInput
                classes={{ container: 'flex-1' }}
                {...register('minValue')}
              />

              <span>até</span>

              <CurrencyInput
                classes={{ container: 'flex-1' }}
                {...register('maxValue')}
              />
            </DateGroup>

            <ErrorMessage>
              {errors.minValue?.message || errors.maxValue?.message}
            </ErrorMessage>
          </fieldset>

          <div>
            <Select
              classes={{ container: 'w-full' }}
              placeholder="Fornecedor ou transportadora"
              {...register('supplier')}
            >
              <Option value="amazon">Amazon</Option>
              <Option value="mercado-livre">Mercado livre</Option>
            </Select>

            <ErrorMessage>{errors.supplier?.message}</ErrorMessage>
          </div>
        </FieldsGroup>

        <FieldsGroup>
          <div>
            <Select
              classes={{ container: 'w-full' }}
              placeholder="Categoria"
              {...register('category')}
            >
              <Option value="somevalue1">Some option 1</Option>
              <Option value="somevalue2">Some option 2</Option>
            </Select>

            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </div>

          <div>
            <Select
              classes={{ container: 'w-full' }}
              placeholder="Tipo de documento"
              {...register('documentType')}
            >
              <Option value="somevalue1">Some option 1</Option>
              <Option value="somevalue2">Some option 2</Option>
            </Select>

            <ErrorMessage>{errors.documentType?.message}</ErrorMessage>
          </div>

          <div>
            <Select
              classes={{ container: 'w-full' }}
              placeholder="Conta bancária"
              {...register('bankAccount')}
            >
              <Option value="somevalue1">Some option 1</Option>
              <Option value="somevalue2">Some option 2</Option>
            </Select>

            <ErrorMessage>{errors.bankAccount?.message}</ErrorMessage>
          </div>

          <fieldset>
            <Legend>Data de emissão</Legend>

            <DateGroup>
              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('minOpenDate')}
              />

              <span>até</span>

              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('maxOpenDate')}
              />
            </DateGroup>

            <ErrorMessage>
              {errors.minOpenDate?.message || errors.maxOpenDate?.message}
            </ErrorMessage>
          </fieldset>
        </FieldsGroup>

        <FieldsGroup className="justify-between">
          <fieldset className="tablet:max-w-[48.5%] desktop:max-w-none">
            <Legend>Data de vencimento</Legend>

            <DateGroup className="w-full">
              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('minExpirationDate')}
              />

              <span>até</span>

              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('maxExpirationDate')}
              />
            </DateGroup>

            <ErrorMessage>
              {errors.minExpirationDate?.message ||
                errors.maxExpirationDate?.message}
            </ErrorMessage>
          </fieldset>

          <fieldset className="tablet:max-w-[48.5%] desktop:max-w-none">
            <Legend>Data de quitação</Legend>

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

          <fieldset className="tablet:max-w-[48.5%] desktop:max-w-none">
            <Legend>Data de estorno</Legend>

            <DateGroup className="w-full">
              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('minReversalDate')}
              />

              <span>até</span>

              <DateInput
                classes={{ container: 'flex-1' }}
                {...register('maxReversalDate')}
              />
            </DateGroup>

            <ErrorMessage>
              {errors.minReversalDate?.message ||
                errors.maxReversalDate?.message}
            </ErrorMessage>
          </fieldset>
        </FieldsGroup>
      </div>

      <div className="flex justify-end gap-5 mt-3 mobile:mt-6">
        <Button color="secondary" type="button" className="tablet:min-w-[112px]">
          Limpar filtros
        </Button>

        <Button
          type="submit"
          className="min-w-[112px]"
          aria-label="Adicionar uma conta"
        >
          Filtrar
        </Button>
      </div>
    </form>
  );
}
