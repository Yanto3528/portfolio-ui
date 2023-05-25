import { tv } from "@/lib/tailwind-variant";

export const accordionTriggerStyles = tv(
  "group flex w-full border-b border-transparent items-center justify-between py-4 px-6 text-lg font-semibold radix-disabled:bg-gray-50 radix-disabled:cursor-not-allowed",
  {
    variants: {
      showBorder: {
        true: "border-gray-200 group-last/item:radix-state-closed:rounded-bl-md group-last/item:radix-state-closed:rounded-br-md",
      },
    },
  }
);
