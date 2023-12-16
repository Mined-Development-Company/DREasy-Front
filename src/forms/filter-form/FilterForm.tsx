import { Button } from "../../ui/Button";
import { DateInput } from "../DateInput";
import { Option, Select } from "../select";
import { DateGroup } from "./DateGroup";
import { FieldsGroup } from "./FieldsGroup";
import { Legend } from "./Legend";

export function FilterForm() {
  return (
    <form>
      <div className="mt-8 gap-8 flex flex-wrap justify-between">
        <FieldsGroup className="justify-between">
          <fieldset className="grid grid-cols-2 grid-rows-2 text-sm">
            <Legend>Status</Legend>

            <label>
              <input type="checkbox" name="status" className="mr-1" />
              
              <span>Abertas</span>
            </label>

            <label>
              <input type="checkbox" name="status" className="mr-1" />
              
              <span>Vencidas</span>
            </label>

            <label>
              <input type="checkbox" name="status" className="mr-1" />
              
              <span>Quitadas</span>
            </label>

            <label>
              <input type="checkbox" name="status" className="mr-1" />
              
              <span>Estornadas</span>
            </label>
          </fieldset>

          <fieldset>
            <Legend>Valor</Legend>

            <DateGroup>
              <DateInput className="flex-1" />

              <span>até</span>

              <DateInput className="flex-1" />
            </DateGroup>
          </fieldset>

          <Select className="w-full" placeholder="Fornecedor ou transportadora" id="supplier-input">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>
        </FieldsGroup>

        <FieldsGroup>

          <Select className="w-full" placeholder="Categoria">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select className="w-full" placeholder="Tipo de documento">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <Select className="w-full" placeholder="Conta bancária">
            <Option value="somevalue1">Some option 1</Option>
            <Option value="somevalue2">Some option 2</Option>
          </Select>

          <fieldset>
            <Legend>Data de emissão</Legend>
            
            <DateGroup>
              <DateInput className="flex-1" />

              <span>até</span>

              <DateInput className="flex-1" />
            </DateGroup>
          </fieldset>
        </FieldsGroup>

        <FieldsGroup className="justify-between">
          <fieldset className="w-[48.5%]">
            <Legend>Data de vencimento</Legend>

            <DateGroup className="w-full"> 
              <DateInput className="flex-1" />

              <span>até</span>

              <DateInput className="flex-1" />
            </DateGroup>
          </fieldset>

          <fieldset className="w-[48.5%]">
            <Legend>Data de quitação</Legend>

            <DateGroup className="w-full"> 
              <DateInput className="flex-1" />

              <span>até</span>

              <DateInput className="flex-1" />
            </DateGroup>
          </fieldset>

          <fieldset className="w-[48.5%]">
            <Legend>Data de estorno</Legend>

            <DateGroup className="w-full"> 
              <DateInput className="flex-1" />

              <span>até</span>

              <DateInput className="flex-1" />
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
