import { tv } from "@/lib/tailwind-variant";

export const tooltipContentStyles = tv(
  "bg-black/70 text-white p-2 max-w-sm z-[100] rounded-md radix-state-closed:animate-tooltip-fade-out radix-state-delayed-open:animate-tooltip-fade-in",
  {
    variants: {
      side: {
        top: "origin-bottom",
        left: "origin-right",
        right: "origin-left",
        bottom: "origin-top",
      },
    },
    defaultVariants: {
      side: "top",
    },
  }
);
