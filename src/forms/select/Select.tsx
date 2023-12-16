// React
import {
  ChangeEvent,
  ComponentProps,
  KeyboardEventHandler,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

// Libs
import { cn } from '../../libs';
// React icons
import { IoIosArrowDown } from 'react-icons/io';

type Props = ComponentProps<'select'> & {
  children: ReactNode;
  placeholder?: string;
  classes?: {
    container?: string;
    select?: string;
    option?: string;
  };
  className?: never;
};

type Option = {
  value: string | number;
  text: string;
};

/**
 * Select é um input personalizado que permite mais possibilidades de
 * estilização de um select e suas options.
 *
 * O componente renderiza um select comum, mas que só aparece para leitores de
 * tela, mantendo acessível.
 *
 * Mapeia as interações no select original para uma interface personalizada
 *
 * Funciona em conjunto com o compnente Option
 *
 * @component
 * @param {function} props.placeholder - Renderiza um placeholder dentro do
 * select quando nenhum valor foi selecionado
 *
 * @example
 *
 * <Select placeholder="Selecione o fornecedor">
 *   <Option value="amazon">Amazon</Option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { children, placeholder = 'Selecione', classes, ...props },
  ref,
) {
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // sempre que as options filhas do select forem alteradas esse useEffect
  // busca as options e armazena as informações delas no estado para poder
  // renderizar as options personalizadas
  useEffect(() => {
    if (!selectRef.current) return;
    const optionElements = selectRef.current
      .childNodes as NodeListOf<HTMLInputElement>;

    const optionsData: Option[] = [];
    optionElements.forEach((option) => {
      optionsData.push({ text: option.textContent!, value: option.value });
    });

    setOptions(optionsData);
  }, [children]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.querySelector(
      `option[value=${event.target.value}]`,
    );
    setSelected({
      text: selectedOption!.textContent!,
      value: event.target.value,
    });
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = () => {
    toggleOpen();
    if (!isOpen) {
      selectRef.current?.focus();
    }
  };

  const handleBlur = () => {
    if (!isOpen) return;

    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleKey: KeyboardEventHandler<HTMLSelectElement> = (event) => {
    switch (event.code) {
      case 'Enter':
        return toggleOpen();
      case 'Escape':
        return setIsOpen(false);
    }
  };

  // permite usar uma ref interna e ainda assim expor a ref para o zod
  const handleRef = (element: HTMLSelectElement | null) => {
    selectRef.current = element;
    if (!ref) return;
    if (typeof ref === 'function') {
      return ref(element);
    }
    ref.current = element;
  };

  return (
    <div>
      <select
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKey}
        ref={handleRef}
        className="sr-only peer -left-full -top-full"
        value={selected?.value}
        aria-label={placeholder}
      >
        {children}
      </select>

      <div
        aria-hidden
        className={cn(
          'peer-focus:outline outline-2 w-40 relative text-grayish-green',
          classes?.container,
        )}
      >
        <div
          onClick={handleClick}
          className={cn(
            'p-3 border flex justify-between items-center gap-2 rounded-sm text-sm cursor-pointer',
            classes?.select,
          )}
        >
          <span className="select-none text-ellipsis">
            {selected?.text ?? placeholder}
          </span>

          <IoIosArrowDown
            className={cn('transition-transform', isOpen && 'rotate-180')}
          />
        </div>

        <div
          className={cn(
            'absolute z-10 left-0 w-full border rounded-sm text-sm bg-gray-100 hidden',
            isOpen && 'block',
            classes?.option,
          )}
        >
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                selectRef.current?.focus();
              }}
              className={cn(
                'p-3 py-2 border-b cursor-pointer',
                option.value === selected?.value && 'bg-green-300',
              )}
              key={option.value}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
