import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button";
import { DateInput } from "../DateInput";
import { CurrencyInput } from "../currency-input/CurrencyInput";
import { Option, Select } from "../select";
import { DateGroup } from "./DateGroup";
import { FieldsGroup } from "./FieldsGroup";
import { Legend } from "./Legend";

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
}

export function FilterForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Fields>();

  const onSubmit = handleSubmit((fields) => {
    console.log(fields);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className=" flex-col sm:flex-row mt-8 gap-8 flex flex-wrap justify-between">
        <FieldsGroup className="justify-between">
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
          </fieldset>

          <fieldset>
            <Legend>Valor</Legend>

            <DateGroup className="xs:min-w-xs">
              <CurrencyInput
                classes={{ container: "flex-1" }}
                {...register('minValue')}
              />

              <span>até</span>

              <CurrencyInput
                classes={{ container: "flex-1" }}
                {...register('maxValue')}
              />
            </DateGroup>
          </fieldset>

          <Select
            classes={{ container: "w-full" }}
            placeholder="Fornecedor ou transportadora"
            {...register('supplier')}
          >
            <Option value="amazon">Amazon</Option>
            <Option value="mercado-livre">Mercado livre</Option>
          </Select>
        </FieldsGroup>

        <FieldsGroup>
          <Select
            classes={{ container: "w-full" }}
            placeholder="Categoria"
            {...register('category')}
          >
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select
            classes={{ container: "w-full" }}
            placeholder="Tipo de documento"
            {...register('documentType')}
          >
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select
            classes={{ container: "w-full" }}
            placeholder="Conta bancária"
            {...register('bankAccount')}
          >
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

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
          </fieldset>
        </FieldsGroup>

        <FieldsGroup className="justify-between">
          <fieldset className="lg:w-[48.5%]">
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
          </fieldset>

          <fieldset className="lg:w-[48.5%]">
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
          </fieldset>

          <fieldset className="lg:w-[48.5%]">
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
          </fieldset>
        </FieldsGroup>
      </div>

      <div className="flex justify-end gap-5 mt-3 sm:mt-6">
        <Button
          color="secondary"
          type="button"
          className="min-w-[112px]"
        >
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
