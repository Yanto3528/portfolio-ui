import { ButtonProps } from "./Button.types";

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-primary px-4 py-2" {...props}>
      {children}
    </button>
  );
}
