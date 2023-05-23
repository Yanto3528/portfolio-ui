import { FormLabel, FormErrorMessage } from "./components";
import { FormProps } from "./Form.types";

export function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

Form.Label = FormLabel;
Form.ErrorMessage = FormErrorMessage;
