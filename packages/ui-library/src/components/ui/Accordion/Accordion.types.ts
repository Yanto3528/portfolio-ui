import { ReactNode } from "react";
import {
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";

// export interface AccordionProps extends Omit<AccordionSingleProps, "type"> {
//   type?: "single";
//   showBorder?: boolean;
// }
type SingleProps = {
  // type?: "single";
  showBorder?: boolean;
} & AccordionSingleProps;

type MultipleProps = {
  // type?: "multiple";
  showBorder?: boolean;
} & AccordionMultipleProps;

export type AccordionProps = SingleProps | MultipleProps;

export interface AccordionProviderProps {
  children: ReactNode;
  showBorder?: boolean;
}
