import { useForm } from "react-hook-form";
import { Select, Option, ErrorMessage } from "../../forms";
import { BaseLayout } from "../../layouts"
import { Button } from "../ui";

type Fields = {
  exibition: string;
  month: string;
  year: string;
}

export const CashFlowFilter = () => {
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
      <form
        onSubmit={onSubmit}
        className="grid grid-rows-2 grid-cols-3 gap-2 sm:gap-4 justify-between sm:flex"
      >
        <div className="w-full max-w-xs">
          <Select
            {...register('exibition')}
            placeholder="Exibição"
          >
            <Option value="value-a">option-a</Option>
            <Option value="value-b">option-b</Option>
          </Select>

          <ErrorMessage>{errors.exibition?.message}</ErrorMessage>
        </div>

        <div className="w-full max-w-xs">
          <Select
            {...register('month')}
            placeholder="Mês"
          >
            <Option value="value-a">option-a</Option>
            <Option value="value-b">option-b</Option>
          </Select>

          <ErrorMessage>{errors.month?.message}</ErrorMessage>
        </div>

      
        <div className="w-full max-w-xs">
          <Select
            {...register('year')}
            placeholder="Ano"
          >
            <Option value="value-a">option-a</Option>
            <Option value="value-b">option-b</Option>
          </Select>

          <ErrorMessage>{errors.year?.message}</ErrorMessage>
        </div>


        <Button
          type="submit"
          className="w-fit col-span-3 justify-self-end"
          color="secondary"
          size="md"
        >
          Filtrar
        </Button>
      </form>
    </BaseLayout>
  );
}
