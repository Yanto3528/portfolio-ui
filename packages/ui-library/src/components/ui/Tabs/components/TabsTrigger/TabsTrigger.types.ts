import { TabsTriggerProps as BaseTabsTriggerProps } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

export type TabsTriggerProps = BaseTabsTriggerProps & {
  icon?: ReactNode;
};
