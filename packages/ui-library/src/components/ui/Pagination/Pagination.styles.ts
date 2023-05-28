import { tv } from "@/lib/tailwind-variant";

export const paginationItemStyles = tv(
  "flex w-8 h-8 items-center justify-center border border-transparent disabled:text-gray-300 disabled:cursor-not-allowed transition-all rounded-md enabled:hover:text-primary enabled:hover:border-primary",
  {
    variants: {
      selected: {
        true: "border-primary bg-primary text-white enabled:hover:text-white",
      },
    },
  }
);
