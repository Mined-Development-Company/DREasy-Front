import React from 'react';
// Libs
import { cn } from '../libs';

interface IBaseLayout {
  children: React.ReactNode;
  className?: string;
}

export const BaseLayout = ({ children, className }: IBaseLayout) => {
  return (
    <section
      className={cn(
        'max-w-[1536px] p-2 m-auto mt-3 bg-white border shadow-md sm:p-4 rounded-xl',
        className,
      )}
    >
      {children}
    </section>
  );
};
