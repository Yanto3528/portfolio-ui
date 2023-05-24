import {
  Content,
  Portal,
  Arrow,
  MenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

export default function DropdownMenuContent({
  children,
  className,
  ...props
}: MenuContentProps) {
  return (
    <Portal>
      <Content
        className={twMerge(
          "relative -bottom-2 z-50 max-h-[20rem] min-w-[15rem] rounded-md bg-white p-1 shadow-md radix-state-closed:animate-out radix-state-closed:fade-out radix-state-closed:slide-out-to-top-2 radix-state-open:animate-in radix-state-open:fade-in radix-state-open:slide-in-from-top-2",
          className
        )}
        {...props}
      >
        <div>{children}</div>
        <Arrow className="fill-white" />
      </Content>
    </Portal>
  );
}
