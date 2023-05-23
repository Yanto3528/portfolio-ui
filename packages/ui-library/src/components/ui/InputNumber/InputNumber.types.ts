import { InputProps } from "../Input/Input.types";

export type InputNumberProps = Omit<InputProps, "onChange" | "type"> & {
  min: number;
  max?: number;
  onChange?: (value: number) => void;
};
