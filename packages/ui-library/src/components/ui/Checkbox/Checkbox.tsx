import { forwardRef } from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "lucide-react";

import { FormLabel } from "../Form";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      label,
      checkedLabel,
      onChange,
      checked,
      className,
      wrapperClassName,
      labelClassName,
      indicatorClassName,
      ...props
    },
    ref
  ) => {
    const displayLabel = checked ? checkedLabel || label : label;

    return (
      <div
        className={twMerge(
          "flex items-center gap-2 cursor-pointer",
          wrapperClassName
        )}
      >
        <Root
          className={twMerge(
            "aspect-square w-4 rounded-sm border border-gray-300 bg-white transition-all hover:border-primary radix-state-checked:border-primary radix-state-checked:bg-primary",
            className
          )}
          id={id}
          onCheckedChange={onChange}
          checked={checked}
          ref={ref}
          {...props}
        >
          <Indicator
            className={twMerge(
              "flex items-center justify-center text-white transition-all radix-state-checked:animate-scale-in radix-state-unchecked:animate-scale-out",
              indicatorClassName
            )}
          >
            <CheckIcon size={12} />
          </Indicator>
        </Root>
        {displayLabel && (
          <FormLabel
            className={twMerge(
              "mb-0 text-md font-normal cursor-pointer",
              labelClassName
            )}
            htmlFor={id}
          >
            {displayLabel}
          </FormLabel>
        )}
      </div>
    );
  }
);

export default Checkbox;
