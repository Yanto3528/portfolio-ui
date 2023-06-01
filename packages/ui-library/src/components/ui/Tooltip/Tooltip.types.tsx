import { TooltipContentProps as BaseTooltipContentProps } from "@radix-ui/react-tooltip";

import { VariantProps } from "@/lib/tailwind-variant";

import { tooltipContentStyles } from "./Tooltip.styles";

type TooltipContentStylesProps = VariantProps<typeof tooltipContentStyles>;

export interface TooltipContentProps
  extends Omit<TooltipContentStylesProps, "side">,
    BaseTooltipContentProps {}
