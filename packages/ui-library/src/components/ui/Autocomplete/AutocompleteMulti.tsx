import React, { useState, useMemo, ForwardedRef } from "react";
import { Combobox } from "@headlessui/react";

import { FormErrorMessage, FormLabel } from "../Form";
import Badge from "../Badge";
import { inputStyles } from "../Input";

import { AutocompleteButton, AutocompleteOptions } from "./components";
import { AutocompleteMultiProps, Option } from "./Autocomplete.types";

function AutocompleteMultiInner<T>(
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
  }: AutocompleteMultiProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [query, setQuery] = useState("");

  const filteredOptions = useMemo(
    () =>
      query === ""
        ? options
        : options?.filter((option) =>
            option.label.toLowerCase().includes(query.toLowerCase())
          ),
    [query, options]
  );

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const onRemoveSelectedOption = (selectedOption: Option<T>) => () => {
    const newSelectedValues = value.filter(
      (selectedValue) => selectedValue.value !== selectedOption.value
    );

    onChange(newSelectedValues);
  };

  return (
    <div className="w-full">
      <Combobox
        className="relative w-full"
        as="div"
        value={value}
        by="value"
        multiple
        onChange={onChange}
      >
        {({ open }) => (
          <>
            {label && (
              <Combobox.Label as={FormLabel} required={required}>
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
                placeholder={placeholder}
                autoComplete="off"
                ref={ref}
              />
            </AutocompleteButton>
            <AutocompleteOptions
              loading={loading}
              show={open && !disabled}
              options={filteredOptions}
            />
          </>
        )}
      </Combobox>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {value?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-3">
          {value.map((selectedValue, index) => (
            <li key={`${selectedValue.label}-${index}`}>
              <Badge closeable onClose={onRemoveSelectedOption(selectedValue)}>
                {selectedValue.label}
              </Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const AutocompleteMulti = React.forwardRef(AutocompleteMultiInner);
export default AutocompleteMulti;
