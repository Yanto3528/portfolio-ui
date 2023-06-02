import { Switch } from "@headlessui/react";

import {
  switchStyles,
  handleStyles,
  handleWrapperStyles,
} from "../../Toggle.styles";
import { useToggleContext } from "../../Toggle.context";

function ToggleSwitch() {
  const { enabled, onChange, displayLabel, colorScheme } = useToggleContext();

  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={switchStyles({ enabled, colorScheme })}
    >
      <span className="sr-only">{displayLabel}</span>
      <span className={handleWrapperStyles({ enabled })}>
        <span aria-hidden="true" className={handleStyles({ enabled })} />
      </span>
    </Switch>
  );
}

export default ToggleSwitch;
