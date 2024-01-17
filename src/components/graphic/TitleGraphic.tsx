import { ComponentProps } from 'react';

export const TitleGraphic = ({
  className,
  children,
  ...rest
}: ComponentProps<'h2'>) => (
  <div
    className={`font-semibold sm:text-3xl text-xl text-green-700 ${className}`}
    {...rest}
  >
    {children}
  </div>
);
