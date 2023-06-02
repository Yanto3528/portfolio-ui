import { formLabelStyles } from "./FormLabel.styles";
import { FormLabelProps } from "./FormLabel.types";

export function FormLabel({
  children,
  className,
  required,
  ...props
}: FormLabelProps) {
  return (
    <label className={formLabelStyles({ required, className })} {...props}>
      {children}
    </label>
  );
}
