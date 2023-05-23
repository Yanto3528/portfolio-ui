import { elementWrapperStyles } from "./FormElementWrapper.styles";
import { FormELementWrapperProps } from "./FormELementWrapper.types";

export function FormElementWrapper({
  children,
  className,
  error,
  disabled,
  colorScheme,
  size,
  radius,
  ...props
}: FormELementWrapperProps) {
  return (
    <div
      className={elementWrapperStyles({
        disabled,
        size,
        colorScheme: error ? "error" : colorScheme,
        radius,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
