import { tv } from "@/lib/tailwind-variant";

export const badgeStyles = tv(
  "relative inline-block rounded-full border border-transparent text-white py-[2px] px-2 text-xs font-bold",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-danger",
      },
      variant: {
        outline: "bg-transparent border-gray-200 text-gray-900",
      },
    },
    defaultVariants: {
      colorScheme: "primary",
    },
  }
);
