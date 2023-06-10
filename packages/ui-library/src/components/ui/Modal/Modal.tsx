import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { ModalTitle, ModalBody, ModalFooter } from "./components";
import { ModalProvider } from "./Modal.context";
import { ModalProps } from "./Modal.types";

function Modal({ isOpen, onClose, children, className }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1003]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={twMerge(
                  "w-full transform overflow-hidden rounded-tr-lg rounded-tl-lg bg-white text-left sm:max-w-[30rem] sm:rounded-lg",
                  className
                )}
              >
                <ModalProvider onClose={onClose}>{children}</ModalProvider>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Description = Dialog.Description;

export default Modal;
