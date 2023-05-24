import { tv } from "@/lib/tailwind-variant";

export const avatarStyles = tv(
  "rounded-full block object-cover aspect-square",
  {
    variants: {
      size: {
        sm: "w-5",
        md: "w-8",
        lg: "w-12",
        xl: "w-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
