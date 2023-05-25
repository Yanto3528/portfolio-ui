import { tv } from "@/lib/tailwind-variant";

export const accordionItemStyles = tv("border border-transparent", {
  variants: {
    showBorder: {
      true: "group/item border-gray-200 border-b-transparent border-t-transparent first:rounded-tr-md first:rounded-tl-md first:border-t-gray-200 last:rounded-bl-md last:rounded-br-md",
    },
  },
});
