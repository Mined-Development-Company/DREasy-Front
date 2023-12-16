import { ComponentProps } from 'react';
import { cn } from '../../libs/cn';

type Props = ComponentProps<'legend'>;

export function Legend({ className, ...props }: Props) {
  return (
    <legend className={cn('text-sm text-grayish-green font-medium mb-1', className)} {...props} />
  );
}
