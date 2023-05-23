import { ComponentPropsWithoutRef } from "react";

import { FormElementWrapperProps } from "@/components/ui/Form";

export interface FormELementWrapperProps
  extends ComponentPropsWithoutRef<"div">,
    FormElementWrapperProps {}
