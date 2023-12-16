// Clsx
import { type ClassValue, clsx } from "clsx"
// TwMerge-merge
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
