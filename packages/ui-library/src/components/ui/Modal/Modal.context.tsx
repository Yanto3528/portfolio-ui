import { createContext, useContext, useMemo } from "react";

import { ModalContextProps, ModalProviderProps } from "./Modal.types";

export const ModalContext = createContext<ModalContextProps>({
  onClose: () => {},
});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }

  return context;
};

export function ModalProvider({ onClose, children }: ModalProviderProps) {
  const value = useMemo(
    () => ({
      onClose,
    }),
    [onClose]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
