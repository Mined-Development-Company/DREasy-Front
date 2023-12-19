// React
import { ComponentProps } from 'react';
// Libs
import { cn } from '../libs';

type Props = ComponentProps<'div'>;

export function DateGroup({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'flex flex-row gap-2 text-xs items-center sm:text-sm',
        className,  
      )}
      {...props}
    />
  );
}
