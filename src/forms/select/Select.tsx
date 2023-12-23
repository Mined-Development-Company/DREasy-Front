import { ComponentProps, forwardRef, useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { cn } from "../../libs";

type SelectPropsWithouClassName = Omit<ComponentProps<'select'>, 'className'>;

type Props = SelectPropsWithouClassName & {
  placeholder: string;
  classes?: {
    container?: string;
    placeholder?: string;
    select?: string;
    icon?: string;
  }
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  function ({ placeholder, classes, ...props }, ref) {
    const [value, setValue] = useState<string | null>(null);

    const padding = 'p-3';
    const bgColor = 'bg-white';

    return (
      <div className={cn("relative text-sm text-green-700 focus-within:outline outline-2 flex items-center border rounded-sm", bgColor, classes?.container)}>
        <div className={cn("absolute text-ellipsis flex items-center h-full w-full pointer-events-none", padding, bgColor, value && 'hidden', classes?.placeholder)}>
          {placeholder}
        </div>

        <select
          {...props}
          className={cn("w-full outline-none h-full border-transparent bg-transparent", padding, classes?.select)}
          onChange={(e) => setValue(e.target.value)}
          ref={ref}
        />

        <IoIosArrowDown className={cn("absolute pointer-events-none box-content right-0", padding, bgColor, classes?.icon)} />
      </div>
    );
  }
);
