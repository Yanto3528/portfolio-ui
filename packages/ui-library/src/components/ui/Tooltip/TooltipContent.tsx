import { Portal, Content, Arrow } from "@radix-ui/react-tooltip";

import { tooltipContentStyles } from "./Tooltip.styles";
import { TooltipContentProps } from "./Tooltip.types";

export default function TooltipContent({
  side,
  children,
  className,
  sideOffset = 5,
  ...props
}: TooltipContentProps) {
  return (
    <Portal>
      <Content
        side={side}
        className={tooltipContentStyles({ side, className })}
        sideOffset={sideOffset}
        {...props}
      >
        <div>{children}</div>
        <Arrow className="fill-black/70" />
      </Content>
    </Portal>
  );
}
