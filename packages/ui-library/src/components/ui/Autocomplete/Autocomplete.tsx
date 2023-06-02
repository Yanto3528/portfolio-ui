import React, { useState, useMemo, ForwardedRef } from "react";
import { Combobox } from "@headlessui/react";

import { FormErrorMessage, FormLabel } from "../Form";
import { inputStyles } from "../Input";

import { AutocompleteOptions, AutocompleteButton } from "./components";
import { AutocompleteProps, Option } from "./Autocomplete.types";

function AutocompleteInner<T>(
  {
    onChange,
    options,
    colorScheme,
    disabled,
    error,
    className,
    placeholder,
    size,
    value,
    label,
    required,
    loading,
    name,
  }: AutocompleteProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [query, setQuery] = useState("");

  const filteredOptions = useMemo(() => {
    if (query === "") {
      return options;
    }

    return options?.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, options]);

  const displayValue = (option: Option<T>) => option.label;
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="w-full">
      <Combobox
        className="relative w-full"
        as="div"
        value={value}
        by="value"
        onChange={onChange}
        name={name}
      >
        {({ open }) => (
          <>
            {label && (
              <Combobox.Label as={FormLabel} htmlFor={name} required={required}>
                {label}
              </Combobox.Label>
            )}
            <AutocompleteButton
              open={open}
              className={className}
              colorScheme={colorScheme}
              disabled={disabled}
              error={error}
              size={size}
            >
              <Combobox.Input
                className={inputStyles({ size })}
                onChange={onInputChange}
                displayValue={displayValue}
                placeholder={placeholder}
                autoComplete="off"
                ref={ref}
              />
            </AutocompleteButton>
            <AutocompleteOptions
              show={open && !disabled}
              options={filteredOptions}
              loading={loading}
            />
          </>
        )}
      </Combobox>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  );
}

export const Autocomplete = React.forwardRef(AutocompleteInner);
export default Autocomplete;
