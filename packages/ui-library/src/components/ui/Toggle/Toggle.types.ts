import { ReactNode } from "react";
import { switchStyles } from "./Toggle.styles";
import { VariantProps } from "@/lib/tailwind-variant";

type SwitchStylesProps = Omit<VariantProps<typeof switchStyles>, "enabled">;

export type ToggleProps = SwitchStylesProps & {
  onChange: (enabled: boolean) => void;
  enabled: boolean;
  label?: string;
  enabledLabel?: string;
  children: ReactNode;
  className?: string;
};

export type ToggleLabelProps = {
  className?: string;
  enabledClassName?: string;
};

export type ToggleContextProps = Pick<
  ToggleProps,
  "onChange" | "enabled" | "colorScheme"
> & {
  displayLabel?: string;
};
