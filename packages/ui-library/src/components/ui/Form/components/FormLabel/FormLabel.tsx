import { twMerge } from "tailwind-merge";

import { FormLabelProps } from "./FormLabel.types";

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label className={twMerge("mb-2 block font-medium", className)} {...props}>
      {children}
    </label>
  );
}
