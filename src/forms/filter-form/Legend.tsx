// React
import { ComponentProps } from 'react';
// Libs
import { cn } from '../../libs';

type Props = ComponentProps<'legend'>;

export function Legend({ className, ...props }: Props) {
  return (
    <legend
      className={cn('text-sm text-grayish-green font-medium mb-1', className)}
      {...props}
    />
  );
}
