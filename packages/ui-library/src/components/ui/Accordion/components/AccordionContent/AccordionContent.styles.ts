import { tv } from "@/lib/tailwind-variant";

export const accordionContentStyles = tv(
  "overflow-hidden radix-state-closed:animate-slide-up radix-state-open:animate-slide-down",
  {
    variants: {
      showBorder: {
        true: "group-last/item:rounded-br-md group-last/item:rounded-bl-md radix-state-closed:animate-slide-up-with-border radix-state-open:animate-slide-down-with-border",
      },
    },
  }
);
