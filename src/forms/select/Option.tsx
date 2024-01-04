import { ComponentProps, ReactNode } from "react";
import { cn } from "../../libs";

type OptionProps = ComponentProps<'option'> & {
  children: ReactNode;
  value: string | number;
};

export function Option({ className, ...props }: OptionProps) {
  return (
    <option
      {...props}
      className={cn("text-base bg-gray-100 text-grayish-green", className)}
    />
  );
}
