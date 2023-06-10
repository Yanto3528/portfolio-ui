import { twMerge } from "tailwind-merge";

import { ModalFooterProps } from "../../Modal.types";

function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={twMerge(
        "py-3 px-5 flex items-center justify-end gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ModalFooter;
