import { ComponentProps } from "react"

type Props = ComponentProps<'p'>;

export function ErrorMessage({ children, ...props }: Props) {
  if (!children) return null;
  
  return (
    <p className="text-sm text-red-400 mt-1" {...props}>{children}</p>
  );
}
