import { ComponentProps, forwardRef } from "react";
import { RiCalendarLine } from "react-icons/ri";

type Props = ComponentProps<'input'>;

export const DateInput = forwardRef<HTMLInputElement, Props>(
  function DateInput(props, ref) {
    return (
      <div className="w-fit relative text-[#658A73] flex items-center">
        <input
          className="p-3 px-4 text-sm text-left w-full border rounded-sm"
          {...props}
          ref={ref}
          type="date"
        />

        <RiCalendarLine className="bg-white pointer-events-none text-lg absolute right-0 mr-4" />
      </div>
    );
  }
);
