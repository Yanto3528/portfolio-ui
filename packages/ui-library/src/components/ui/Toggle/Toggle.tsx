import { twMerge } from "tailwind-merge";

import { ToggleSwitch, ToggleLabel } from "./components";
import { ToggleProvider } from "./Toggle.context";
import { ToggleProps } from "./Toggle.types";

function Toggle({ className, ...props }: ToggleProps) {
  const { children } = props;

  return (
    <ToggleProvider {...props}>
      <div className={twMerge("flex items-center gap-3", className)}>
        {children}
      </div>
    </ToggleProvider>
  );
}

Toggle.Switch = ToggleSwitch;
Toggle.Label = ToggleLabel;

export default Toggle;
