import { ReactNode } from "react";
import { AccordionContentProps as BaseAccordionContentProps } from "@radix-ui/react-accordion";

export interface AccordionContentProps extends BaseAccordionContentProps {
  className?: string;
  wrapperClassName?: string;
  children: ReactNode;
}
