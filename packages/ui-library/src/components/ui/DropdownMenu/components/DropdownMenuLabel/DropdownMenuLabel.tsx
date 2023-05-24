import { Label, DropdownMenuLabelProps } from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

export default function DropdownMenuLabel({
  className,
  children,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <Label className={twMerge("p-2 text-gray-500", className)} {...props}>
      {children}
    </Label>
  );
}
