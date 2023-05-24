import { Item } from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

import { DropdownMenuItemProps } from "./DropdownMenuItem.types";

export default function DropdownMenuItem({
  children,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <Item
      className={twMerge(
        "flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium outline-none hover:bg-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </Item>
  );
}
