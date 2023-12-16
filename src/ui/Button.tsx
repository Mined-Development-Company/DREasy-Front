import { ComponentProps } from "react";
import { cn } from "../libs/cn";

const variants = {
  color: {
    'primary': 'text-white bg-green-500 shadow-md border',
    'secondary': 'text-grayish-green bg-white shadow-md border',
  },
  size: {
    'sm': 'text-sm px-3 py-1 rounded-md',
    'md': 'font-medium px-3 py-2 rounded-md',
  },
};

type Props = ComponentProps<'button'> & {
  color?: keyof typeof variants.color;
  size?:  keyof typeof variants.size;
};

export function Button({ color = 'primary', size = 'sm' , className, ...props }: Props) {
  
  return (
    <button
      className={cn(variants.color[color], variants.size[size], className)}
      {...props}
    />
  );
}
