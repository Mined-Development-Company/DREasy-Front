import React from "react";
import { cn } from "../libs/cn";
import { ErrorMessage } from "./filter-form/ErrorMessage";

type IInputProps = React.HTMLAttributes<HTMLInputElement> & {
  title: string;
  type: string;
  error?: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({title,type, placeholder, className, error,  ...props}:IInputProps) => {
  return (
    <div className="flex flex-col py-2">
      <label className='font-sans text-base font-semibold text-gray-800' htmlFor={title}>{title}</label>
      <input className={cn('px-4 py-3 text-sm leading-5 text-gray-800 bg-white border border-gray-400 rounded outline-none placeholder:text-gray-200 focus:border-green-500 focus:bg-gray-50 focus:outline-none', className)} type={type} placeholder={placeholder} {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
}

