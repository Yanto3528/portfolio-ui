import { badgeStyles } from "./Badge.styles";
import { BadgeProps } from "./Badge.types";

export default function Badge({
  children,
  className,
  colorScheme,
  variant,
}: BadgeProps) {
  return (
    <span className={badgeStyles({ colorScheme, variant, className })}>
      <span className="relative">{children}</span>
    </span>
  );
}
