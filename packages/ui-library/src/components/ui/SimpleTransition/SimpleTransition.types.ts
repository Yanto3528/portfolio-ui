import { ReactNode } from "react";

export interface SimpleTransitionProps {
  children: ReactNode;
  show?: boolean;
  enter: string;
  leave: string;
  animate: string;
  className?: string;
}

export interface SimpleTransitionChildProps
  extends Omit<SimpleTransitionProps, "show"> {}
