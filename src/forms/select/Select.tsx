import {
  ChangeEvent,
  ComponentProps,
  KeyboardEventHandler,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { IoIosArrowDown } from "react-icons/io";
import { cn } from "../../libs/cn";

type Props = ComponentProps<'select'> & {
  children: ReactNode;
  placeholder?: string;
};

type Option = {
  value: string | number;
  text: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  function Select({
    children,
    placeholder = 'Selecione',
    className,
    ...props
  }, ref) {
    const selectRef = useRef<HTMLSelectElement  | null>(null);
    const [options, setOptions] = useState<Option[]>([]);
    const [selected, setSelected] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (!selectRef.current) return;
      const optionElements = selectRef.current.childNodes as NodeListOf<HTMLInputElement>;

      const optionsData: Option[] = [];
      optionElements.forEach((option) => {
        optionsData.push({ text: option.textContent!, value: option.value });
      });

      setOptions(optionsData);
    }, [children]);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = event.target.querySelector(`option[value=${event.target.value}]`);
      setSelected({ text: selectedOption!.textContent!, value: event.target.value });
    };

    const toggleOpen = () => { setIsOpen((prev) => !prev); };

    const handleClick = () => {
      toggleOpen();
      if (!isOpen) { selectRef.current?.focus(); }
    }

    const handleBlur = () => {
      if (!isOpen) return;

      setTimeout(() => {
        setIsOpen(false);
      }, 200)
    };

    const handleKey: KeyboardEventHandler<HTMLSelectElement> = (event) => {
      switch (event.code) {
        case 'Enter':
          return toggleOpen();
        case 'Escape':
          return setIsOpen(false);
      }
    };

    const handleRef = (element: HTMLSelectElement | null) => {
      selectRef.current = element;
      if (!ref) return;
      if (typeof ref === 'function') { return ref(element) }
      ref.current = element;
    }

    return (
      <div>
        <select
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKey}
          ref={handleRef}
          className="peer sr-only -left-full -top-full"
          value={selected?.value}
          aria-label={placeholder}
        >
          {children}
        </select>

        <div aria-hidden className={cn("peer-focus:outline outline-2 w-40 relative text-grayish-green", className)}>
          <div onClick={handleClick} className="p-3 border flex justify-between items-center gap-2 rounded-sm text-sm cursor-pointer">
            <span className="text-ellipsis select-none">{selected?.text ?? placeholder}</span>
            
            <IoIosArrowDown className={cn('transition-transform', isOpen && 'rotate-180')} />
          </div>

          <div className={cn('absolute z-10 left-0 w-full border rounded-sm text-sm bg-gray-100 hidden', isOpen && 'block')}>
            {options.map((option) => (
              <div
                onClick={() => {
                  setSelected(option);
                  selectRef.current?.focus();
                }}
                className={cn("p-3 py-2 border-b cursor-pointer", option.value === selected?.value && 'bg-green-300')}
                key={option.value}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
