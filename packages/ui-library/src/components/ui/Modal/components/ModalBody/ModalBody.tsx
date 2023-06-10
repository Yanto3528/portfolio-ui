import { twMerge } from "tailwind-merge";

import { ModalBodyProps } from "../../Modal.types";

function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={twMerge("bg-white py-3 pb-6 px-5 text-sm", className)}>
      {children}
    </div>
  );
}

export default ModalBody;
