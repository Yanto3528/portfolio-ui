import { Dialog } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { XIcon } from "lucide-react";

import { ModalTitleProps } from "../../Modal.types";
import { useModalContext } from "../../Modal.context";

function ModalTitle({ children, icon, className }: ModalTitleProps) {
  const { onClose } = useModalContext();

  return (
    <div
      className={twMerge(
        "flex items-center justify-between text-gray-900 border-b border-gray-300 py-3 px-5",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <Dialog.Title className="flex-1 text-lg font-bold">
          {children}
        </Dialog.Title>
      </div>
      <button
        className="rounded-md text-gray-900 transition-all hover:bg-gray-200 p-1"
        onClick={onClose}
        type="button"
      >
        <XIcon />
      </button>
    </div>
  );
}

export default ModalTitle;
