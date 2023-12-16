import { ChangeEvent, ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../libs/cn";
import { formatToCurrency } from "../../libs/currency";
import styles from './styles.module.css';

type Props = ComponentProps<'input'> & {
  handleChange?: (value: number) => void;
  classes?: {
    container?: string;
    input?: string;
    icon?: string;
  };
  className?: never;
};

/**
 * CurrencyInput é um input personalizado que recebe apenas números
 * e exibe o valor formatado com **no mínimo** 1 casa inteira e 2 casas decimais.
 * 
 * Exemplo: 0.00 ou 0.10 ou 123.00
 * 
 * @component
 * @param {string} props.defaultValue - Define o valor inicial do input. Deve 
 * ser um número ou uma string representando um número decimal com um ponto como
 * separador decimal.
 * 
 * @example
 * // Exemplo de uso
 * function handleChange(inputValue: number) {
 *   console.log(inputValue);
 *   // resultado do console log: 12.3
 * }
 * 
 * <CurrencyInput defaultValue="12.3" onChange={handleChange} />
 */
export const CurrencyInput = forwardRef<HTMLInputElement, Props>(
  function CurrencyInput({ classes, onChange, defaultValue, ...props }, ref) {
    const [value, setValue] = useState(defaultValue ?? '');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const currencyValue = formatToCurrency(inputValue);

      setValue(currencyValue);

      if (onChange) { onChange(event) }
    }
    
    return (
      <div className={cn("text-sm relative flex items-center text-[#658A73] w-fit", styles.currency, classes?.container)}>
        <span className={cn("ml-3 z-0 cursor-text absolute pointer-events-none", classes?.icon)}>R$</span>

        <input
          placeholder="0,00"
          className={cn("p-3 py-4 pl-10 w-full left-0 border border-zinc-300 top-0 rounded-sm text-right text-xs", classes?.input)}
          {...props}
          value={value}
          ref={ref}
          onChange={handleChange}
          type="number"
        />
      </div>
    );
  } 
);
