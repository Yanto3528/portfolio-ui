import * as BaseAccordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components";
import { AccordionProps } from "./Accordion.types";
import { AccordionProvider } from "./Accordion.context";

function Accordion({
  className,
  children,
  showBorder = true,
  ...props
}: AccordionProps) {
  return (
    <BaseAccordion.Root {...props} className={twMerge("w-full", className)}>
      <AccordionProvider showBorder={showBorder}>{children}</AccordionProvider>
    </BaseAccordion.Root>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
