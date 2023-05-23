import Spinner from "../Spinner";

import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export default function Button({
  children,
  size,
  colorScheme,
  radius,
  variant,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        size,
        variant,
        colorScheme,
        radius,
        className,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Spinner
          colorScheme={variant === "outline" ? "inherit" : "white"}
          size="sm"
        />
      )}
      {children}
    </button>
  );
}
