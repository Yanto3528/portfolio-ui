import { twMerge } from "tailwind-merge";

import { FormErrorMessageProps } from "./FormErrorMessage.types";

export function FormErrorMessage({
  children,
  className,
  ...props
}: FormErrorMessageProps) {
  return (
    <span
      className={twMerge(
        "inline-block text-xs font-medium text-red-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
