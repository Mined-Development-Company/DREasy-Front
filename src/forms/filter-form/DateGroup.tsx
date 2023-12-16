// React
import { ComponentProps } from 'react';
// Libs
import { cn } from '../../libs';

type Props = ComponentProps<'div'>;

export function DateGroup({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'sm:min-w-xs flex flex-col xs:flex-row gap-2 sm:gap-4 items-center text-sm',
        className,
      )}
      {...props}
    />
  );
}
