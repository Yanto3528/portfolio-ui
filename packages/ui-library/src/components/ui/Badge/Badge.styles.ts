import { tv } from "@/lib/tailwind-variant";

export const badgeStyles = tv(
  "relative flex items-center gap-1 w-fit rounded-full border border-transparent text-white py-[2px] px-2 text-xs font-bold",
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

export const badgeCloseStyles = tv("rounded-sm p-[2px]", {
  variants: {
    colorScheme: {
      primary: "hover:bg-primary-400",
      secondary: "hover:bg-gray-300",
      danger: "hover:bg-danger-400",
    },
    variant: {
      outline: "bg-transparent hover:bg-gray-200",
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});
