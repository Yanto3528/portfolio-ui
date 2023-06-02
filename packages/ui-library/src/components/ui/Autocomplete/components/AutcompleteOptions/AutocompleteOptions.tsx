import { Combobox } from "@headlessui/react";

import Spinner from "@/components/ui/Spinner";
import SimpleTransition from "@/components/ui/SimpleTransition";

import { AutocompleteOptionsProps } from "../../Autocomplete.types";

function AutocompleteOptions<T>({
  options,
  loading,
  show,
}: AutocompleteOptionsProps<T>) {
  return (
    <SimpleTransition
      show={show}
      enter="opacity-0 -translate-y-2 relative z-50"
      leave="opacity-100 translate-y-0 relative z-50"
      animate="transition-all duration-200 origin-top"
    >
      <Combobox.Options
        static
        className="absolute -bottom-2 z-50 h-auto max-h-[12.5rem] w-full translate-y-full overflow-y-auto overflow-x-hidden rounded-md bg-white shadow-md scrollbar-thin"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2 p-3">
            <Spinner />
          </div>
        ) : (
          options?.map((option, index) => (
            <Combobox.Option
              className="cursor-pointer truncate p-2 text-left outline-none transition-all ui-selected:bg-primary ui-selected:text-white ui-active:ui-not-selected:bg-primary-200 ui-active:ui-not-selected:text-primary-800 ui-disabled:bg-gray-200 ui-disabled:text-gray-600"
              key={`${option.label}-${index}`}
              value={option}
              disabled={option.disabled}
            >
              {option.label}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </SimpleTransition>
  );
}

export default AutocompleteOptions;
