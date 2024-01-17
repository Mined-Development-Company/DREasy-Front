import { ComponentProps } from "react";

export const ContainerGraphic = ({ className, children, ...rest }: ComponentProps<'div'>) => (
  <div className={`flex flex-col gap-3 h-fit max-h-[500px] w-full ${className}`}  {...rest}>{children}</div>
);
