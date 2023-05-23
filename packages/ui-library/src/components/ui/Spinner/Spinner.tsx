import { spinnerStyles } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

export default function Spinner({
  className,
  colorScheme,
  size,
}: SpinnerProps) {
  return (
    <div
      aria-label="loading"
      className={spinnerStyles({ colorScheme, size, className })}
    />
  );
}
