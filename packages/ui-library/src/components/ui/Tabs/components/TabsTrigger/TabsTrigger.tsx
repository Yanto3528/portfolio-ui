import { Trigger } from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

import { TabsTriggerProps } from "./TabsTrigger.types";

function TabsTrigger({
  children,
  className,
  icon,
  ...props
}: TabsTriggerProps) {
  return (
    <Trigger
      className={twMerge(
        "border-b-2 border-transparent py-3 px-4 font-semibold text-sm text-gray-400 transition-all hover:text-primary  radix-state-active:border-primary radix-state-active:text-primary flex items-center gap-2",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </Trigger>
  );
}

export default TabsTrigger;
