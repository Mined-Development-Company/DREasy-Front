import { ComponentProps } from "react"
import { cn } from "../../libs/cn";

type Props = ComponentProps<'div'>;

export function DateGroup({ className, ...props }: Props) {
  return (
    <div
      className={cn("sm:min-w-xs flex flex-col xs:flex-row gap-2 sm:gap-4 items-center text-sm", className)}
      {...props}
    />
  );
}
