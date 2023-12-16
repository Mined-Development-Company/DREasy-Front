import { ComponentProps, forwardRef } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { cn } from "../libs/cn";

type Props = ComponentProps<'input'>;

export const DateInput = forwardRef<HTMLInputElement, Props>(
  function DateInput({ className, ...props }, ref) {
    return (
      <div className={cn("w-fit relative text-[#658A73] flex items-center", className)}>
        <input
          {...props}
          className="p-3 px-3 text-sm text-left w-full border rounded-sm"
          ref={ref}
          type="date"
        />

        <RiCalendarLine className="bg-white pointer-events-none text-lg absolute right-0 mr-3" />
      </div>
    );
  }
);
