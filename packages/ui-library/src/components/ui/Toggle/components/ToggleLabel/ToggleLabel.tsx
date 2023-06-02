import { toggleTextStyles } from "../../Toggle.styles";
import { useToggleContext } from "../../Toggle.context";
import { ToggleLabelProps } from "../../Toggle.types";

function ToggleLabel({ className, enabledClassName }: ToggleLabelProps) {
  const { enabled, displayLabel, colorScheme } = useToggleContext();
  const finalClassName = enabled ? enabledClassName || className : className;

  return (
    <p
      className={toggleTextStyles({
        enabled,
        colorScheme,
        className: finalClassName,
      })}
    >
      {displayLabel}
    </p>
  );
}

export default ToggleLabel;
