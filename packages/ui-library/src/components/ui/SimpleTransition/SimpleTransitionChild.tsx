import { Transition } from "@headlessui/react";

import { SimpleTransitionChildProps } from "./SimpleTransition.types";

export function SimpleTransitionChild({
  children,
  enter,
  leave,
  animate,
  className,
}: SimpleTransitionChildProps) {
  return (
    <Transition.Child
      enterFrom={enter}
      leaveTo={enter}
      enterTo={leave}
      leaveFrom={leave}
      enter={animate}
      leave={animate}
      className={className}
    >
      {children}
    </Transition.Child>
  );
}
