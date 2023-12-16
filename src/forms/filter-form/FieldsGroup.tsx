// React
import { ComponentProps } from 'react';
// Libs
import { cn } from '../../libs';

type Props = ComponentProps<'div'>;

export function FieldsGroup({ className, ...props }: Props) {
  return (
    <div className={cn('flex flex-col gap-3 flex-1', className)} {...props} />
  );
}
