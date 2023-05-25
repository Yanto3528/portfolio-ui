import { forwardRef } from "react";
import * as BaseAccordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

import { useAccordionContext } from "../../Accordion.context";
import { accordionContentStyles } from "./AccordionContent.styles";
import { AccordionContentProps } from "./AccordionContent.types";

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, wrapperClassName, asChild, forceMount }, ref) => {
    const { showBorder } = useAccordionContext();

    return (
      <BaseAccordion.Content
        asChild={asChild}
        forceMount={forceMount}
        ref={ref}
        className={accordionContentStyles({
          showBorder,
          className: wrapperClassName,
        })}
      >
        <div className={twMerge("py-4 px-6", className)}>{children}</div>
      </BaseAccordion.Content>
    );
  }
);

export default AccordionContent;
