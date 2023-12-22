// React
import { ComponentProps, forwardRef } from 'react';
// Libs
import { cn } from '../libs';
// React icons
import { RiCalendarLine } from 'react-icons/ri';

type Props = ComponentProps<'input'> & {
  classes?: {
    container?: string;
    input?: string;
    icon?: string;
  };
  className?: never;
};

export const DateInput = forwardRef<HTMLInputElement, Props>(function DateInput(
  { classes, ...props },
  ref,
) {
  return (
    <div
      className={cn(
        'w-fit relative text-green-700 flex items-center',
        classes?.container,
      )}
    >
      <input
        {...props}
        className={cn(
          'px-1 py-3.5 text-xs tablet:text-sm text-left w-full border rounded-sm',
          classes?.input,
        )}
        ref={ref}
        type="date"
      />

      <RiCalendarLine
        className={cn(
          'bg-white pointer-events-none text-lg absolute right-0 mr-1',
          classes?.icon,
        )}
      />
    </div>
  );
});
