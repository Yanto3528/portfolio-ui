import { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";

export interface CheckboxProps
  extends Omit<RadixCheckboxProps, "onCheckedChange" | "onChange"> {
  label?: string;
  checkedLabel?: string;
  onChange?: RadixCheckboxProps["onCheckedChange"];
  wrapperClassName?: string;
  labelClassName?: string;
  indicatorClassName?: string;
}
