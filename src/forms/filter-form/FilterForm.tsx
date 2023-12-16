import { Button } from "../../ui/Button";
import { DateInput } from "../DateInput";
import { CurrencyInput } from "../currency-input/CurrencyInput";
import { Option, Select } from "../select";
import { DateGroup } from "./DateGroup";
import { FieldsGroup } from "./FieldsGroup";
import { Legend } from "./Legend";

const statuses = [
  { text: 'Abertas', value: '' },
  { text: 'Vencidas', value: '' },
  { text: 'Quitadas', value: '' },
  { text: 'Estornadas', value: '' },
];

export function FilterForm() {
  return (
    <form>
      <div className=" flex-col sm:flex-row mt-8 gap-8 flex flex-wrap justify-between">
        <FieldsGroup className="justify-between">
          <fieldset className="grid grid-cols-2 grid-rows-2 text-sm">
            <Legend>Status</Legend>

            {statuses.map((status) => (
              <label key={status.text}>
                <input
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
              <CurrencyInput classes={{ container: "flex-1" }} />

              <span>até</span>

              <CurrencyInput classes={{ container: "flex-1" }} />
            </DateGroup>
          </fieldset>

          <Select classes={{ container: "w-full" }} placeholder="Fornecedor ou transportadora" id="supplier-input">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>
        </FieldsGroup>

        <FieldsGroup>
          <Select classes={{ container: "w-full" }} placeholder="Categoria">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select classes={{ container: "w-full" }} placeholder="Tipo de documento">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select classes={{ container: "w-full" }} placeholder="Conta bancária">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <fieldset>
            <Legend>Data de emissão</Legend>
            
            <DateGroup>
              <DateInput classes={{ container: 'flex-1' }} />

              <span>até</span>

              <DateInput classes={{ container: 'flex-1' }} />
            </DateGroup>
          </fieldset>
        </FieldsGroup>

        <FieldsGroup className="justify-between">
          <fieldset className="lg:w-[48.5%]">
            <Legend>Data de vencimento</Legend>

            <DateGroup className="w-full"> 
              <DateInput classes={{ container: 'flex-1' }} />

              <span>até</span>

              <DateInput classes={{ container: 'flex-1' }} />
            </DateGroup>
          </fieldset>

          <fieldset className="lg:w-[48.5%]">
            <Legend>Data de quitação</Legend>

            <DateGroup className="w-full"> 
              <DateInput classes={{ container: 'flex-1' }} />

              <span>até</span>

              <DateInput classes={{ container: 'flex-1' }} />
            </DateGroup>
          </fieldset>

          <fieldset className="lg:w-[48.5%]">
            <Legend>Data de estorno</Legend>

            <DateGroup className="w-full"> 
              <DateInput classes={{ container: 'flex-1' }} />

              <span>até</span>

              <DateInput classes={{ container: 'flex-1' }} />
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
          type="button"
          className="min-w-[112px]"
          aria-label="Adicionar uma conta"
        >
          Filtrar
        </Button>
      </div>
    </form>
  );
}
