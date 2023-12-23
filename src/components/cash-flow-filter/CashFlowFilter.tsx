import { useForm } from "react-hook-form";
import { Select, Option } from "../../forms";
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
        <Select
          {...register('exibition')}
          placeholder="Exibição"
          classes={{ container: 'max-w-xs w-full' }}
        >
          <Option value="value-a">option-a</Option>
          <Option value="value-b">option-b</Option>
        </Select>

        <Select
          {...register('month')}
          placeholder="Mês"
          classes={{ container: 'max-w-xs w-full' }}
        >
          <Option value="value-a">option-a</Option>
          <Option value="value-b">option-b</Option>
        </Select>

        <Select
          {...register('year')}
          placeholder="Ano"
          classes={{ container: 'max-w-xs w-full' }}
        >
          <Option value="value-a">option-a</Option>
          <Option value="value-b">option-b</Option>
        </Select>

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
