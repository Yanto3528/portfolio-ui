import { forwardRef } from "react";
import * as BaseAccordion from "@radix-ui/react-accordion";
import { ChevronUpIcon } from "lucide-react";

import { useAccordionContext } from "../../Accordion.context";
import { accordionTriggerStyles } from "./AccordionTrigger.styles";
import { AccordionTriggerProps } from "./AccordionTrigger.types";

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, asChild, showArrow = true }, ref) => {
    const { showBorder } = useAccordionContext();

    return (
      <BaseAccordion.Header className="w-full">
        <BaseAccordion.Trigger
          ref={ref}
          asChild={asChild}
          className={accordionTriggerStyles({
            showBorder,
            className,
          })}
        >
          {children}
          {showArrow && (
            <ChevronUpIcon className="text-gray-500 transition-all duration-300 group-radix-state-closed:rotate-180" />
          )}
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
    );
  }
);

export default AccordionTrigger;
