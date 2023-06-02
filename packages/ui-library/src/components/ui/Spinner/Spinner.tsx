import { spinnerStyles } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

function Spinner({ className, colorScheme, size }: SpinnerProps) {
  return (
    <div
      aria-label="loading"
      className={spinnerStyles({ colorScheme, size, className })}
    />
  );
}

export default Spinner;
