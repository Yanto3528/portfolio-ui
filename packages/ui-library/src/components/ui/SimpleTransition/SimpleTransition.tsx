import { Transition } from "@headlessui/react";

import { SimpleTransitionProps } from "./SimpleTransition.types";
import { SimpleTransitionChild } from "./SimpleTransitionChild";

function SimpleTransition({
  children,
  show,
  enter,
  leave,
  animate,
  className,
}: SimpleTransitionProps) {
  return (
    <Transition
      show={show}
      enterFrom={enter}
      leaveTo={enter}
      enterTo={leave}
      leaveFrom={leave}
      enter={animate}
      leave={animate}
      className={className}
    >
      {children}
    </Transition>
  );
}

SimpleTransition.Child = SimpleTransitionChild;

export default SimpleTransition;
