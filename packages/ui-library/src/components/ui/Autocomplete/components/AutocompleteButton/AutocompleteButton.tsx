import { Combobox } from "@headlessui/react";
import { ChevronDownIcon, SearchIcon } from "lucide-react";

import { elementWrapperStyles } from "@/components/ui/Form";

import { AutocompleteButtonProps } from "../../Autocomplete.types";

function AutocompleteButton<T>({
  className,
  error,
  disabled,
  size,
  colorScheme,
  open,
  children,
}: AutocompleteButtonProps<T>) {
  return (
    <Combobox.Button
      className={elementWrapperStyles({
        disabled,
        colorScheme: error ? "error" : colorScheme,
        size,
        className,
      })}
    >
      {children}
      <span className="pr-3 text-gray-600">
        {open ? <SearchIcon size={20} /> : <ChevronDownIcon size={20} />}
      </span>
    </Combobox.Button>
  );
}

export default AutocompleteButton;
