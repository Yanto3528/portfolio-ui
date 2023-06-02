import { XIcon } from "lucide-react";

import { badgeStyles, badgeCloseStyles } from "./Badge.styles";
import { BadgeProps } from "./Badge.types";

export default function Badge({
  children,
  className,
  colorScheme,
  variant,
  closeable,
  onClose,
}: BadgeProps) {
  return (
    <span className={badgeStyles({ colorScheme, variant, className })}>
      <span className="relative">{children}</span>
      {closeable && (
        <button
          type="button"
          onClick={onClose}
          className={badgeCloseStyles({ colorScheme, variant })}
        >
          <XIcon size={12} />
        </button>
      )}
    </span>
  );
}
