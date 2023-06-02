import { Provider, Root, Trigger, TooltipProps } from "@radix-ui/react-tooltip";

import TooltipContent from "./TooltipContent";

function Tooltip({ children, delayDuration, ...props }: TooltipProps) {
  return (
    <Provider delayDuration={delayDuration} skipDelayDuration={0}>
      <Root {...props}>{children}</Root>
    </Provider>
  );
}

Tooltip.Content = TooltipContent;
Tooltip.Trigger = Trigger;

export default Tooltip;
