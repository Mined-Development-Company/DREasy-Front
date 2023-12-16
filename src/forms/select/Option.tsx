import { ComponentProps, ReactNode } from "react";

type OptionProps = ComponentProps<'option'> & {
  children: ReactNode;
  value: string | number;
};

export function Option(props: OptionProps) {
  return (
    <option {...props} className="sr-only opacity-0" />
  );
}
