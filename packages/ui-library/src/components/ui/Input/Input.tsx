import { forwardRef } from "react";

import { FormElementWrapper, FormLabel, FormErrorMessage } from "../Form";

import { inputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      disabled,
      colorScheme,
      radius,
      label,
      labelClassName,
      wrapperClassName,
      size,
      id,
      rightElement,
      leftElement,
      ...props
    },
    ref
  ) => (
    <div className="w-full">
      {label && (
        <FormLabel htmlFor={id} className={labelClassName}>
          {label}
        </FormLabel>
      )}
      <FormElementWrapper
        error={error}
        disabled={disabled}
        colorScheme={colorScheme}
        size={size}
        radius={radius}
        className={wrapperClassName}
      >
        {leftElement && (
          <span className="pl-2 text-gray-400 flex items-center justify-center">
            {leftElement}
          </span>
        )}
        <input
          ref={ref}
          className={inputStyles({ className })}
          disabled={disabled}
          id={id}
          {...props}
        />
        {rightElement && (
          <span className="pr-2 text-gray-400 flex items-center justify-center">
            {rightElement}
          </span>
        )}
      </FormElementWrapper>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  )
);

export default Input;
