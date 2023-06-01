import { createContext, useContext, useMemo } from "react";

import { ToggleProps, ToggleContextProps } from "./Toggle.types";

export const ToggleContext = createContext<ToggleContextProps>({
  enabled: false,
  onChange: () => {},
  displayLabel: "",
});

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggleContext must be used within ToggleProvider");
  }

  return context;
};

export function ToggleProvider({
  children,
  enabled,
  onChange,
  enabledLabel,
  label,
  colorScheme,
}: ToggleProps) {
  const displayLabel = enabled ? enabledLabel || label : label;

  const value = useMemo(
    () => ({
      enabled,
      onChange,
      displayLabel,
      colorScheme,
    }),
    [enabled, onChange, displayLabel, colorScheme]
  );

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}
