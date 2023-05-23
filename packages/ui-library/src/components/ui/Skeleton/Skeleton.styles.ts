import { tv } from "@/lib/tailwind-variant";

export const skeletonStyles = tv(
  "rounded-md relative overflow-hidden w-full h-6 bg-gray-200",
  {
    variants: {
      rounded: {
        true: "rounded-full",
      },
    },
  }
);

export const skeletonAnimationStyles = tv(
  "rounded-md top-0 left-0 right-0 bottom-0 h-full -translate-x-full bg-gradient-skeleton animate-skeleton-shimmer",
  {
    variants: {
      rounded: {
        true: "rounded-full",
      },
    },
  }
);
