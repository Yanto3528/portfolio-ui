import { ReactNode } from "react";

import { VariantProps } from "@/lib/tailwind-variant";

import { badgeStyles } from "./Badge.styles";

type BadgeStylesProps = VariantProps<typeof badgeStyles>;

export type BadgeProps = BadgeStylesProps & {
  children: ReactNode;
  className?: string;
};
