import { ComponentPropsWithoutRef, ReactNode } from "react";

import { VariantProps } from "@/lib/tailwind-variant";
import { FormElementProps } from "@/components/ui/Form";

import { inputStyles } from "./Input.styles";

type InputStylesProps = VariantProps<typeof inputStyles>;

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> &
  FormElementProps & {
    rightElement?: ReactNode;
  };
