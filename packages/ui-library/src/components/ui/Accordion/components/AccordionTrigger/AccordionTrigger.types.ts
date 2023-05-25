import { ReactNode } from "react";
import { AccordionTriggerProps as BaseAccordionTriggerProps } from "@radix-ui/react-accordion";

export interface AccordionTriggerProps extends BaseAccordionTriggerProps {
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
}
