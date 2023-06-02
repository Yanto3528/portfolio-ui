import React, { ReactNode } from "react";

import { ElementWrapperStylesProps } from "../Form";

export interface Option<T, K = object> {
  label: string;
  value: T;
  disabled?: boolean;
  metadata?: K;
}

export interface AutocompleteProps<T>
  extends Partial<ElementWrapperStylesProps> {
  options?: Option<T>[];
  onChange: (option: Option<T>) => void;
  value?: Option<T>;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  label?: ReactNode;
  required?: boolean;
  loading?: boolean;
}

export interface AutocompleteMultiProps<T>
  extends Omit<AutocompleteProps<T>, "value" | "onChange"> {
  value: Option<T>[];
  onChange: (option: Option<T>[]) => void;
}

export interface AutocompleteButtonProps<T>
  extends Pick<
    AutocompleteProps<T>,
    "error" | "disabled" | "className" | "size" | "colorScheme"
  > {
  open: boolean;
  children: React.ReactNode;
}

export interface AutocompleteOptionsProps<T> {
  options?: Option<T>[];
  show: boolean;
  loading?: boolean;
}
