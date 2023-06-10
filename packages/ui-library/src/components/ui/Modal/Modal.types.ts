import { ReactNode } from "react";

interface BaseModalProps {
  children: ReactNode;
  className?: string;
}

export interface ModalProps extends BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ModalTitleProps extends BaseModalProps {
  icon?: ReactNode;
}
export interface ModalBodyProps extends BaseModalProps {}
export interface ModalFooterProps extends BaseModalProps {}

export interface ModalContextProps {
  onClose: () => void;
}

export interface ModalProviderProps extends ModalContextProps {
  children: ReactNode;
}
