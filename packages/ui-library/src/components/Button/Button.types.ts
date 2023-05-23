import { ComponentPropsWithoutRef } from "react";

import { buttonStyles } from "./Button.styles";
import { VariantProps } from "@/lib/tailwind-variant";

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  ButtonStylesProps & {
    loading?: boolean;
  };
