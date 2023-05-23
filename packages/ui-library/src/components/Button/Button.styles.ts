import { tv } from "@/lib/tailwind-variant";

export const buttonStyles = tv(
  "font-semibold flex items-center justify-center gap-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:ring border border-transparent outline-none",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary text-white enabled:hover:bg-primary-700",
        danger:
          "bg-danger text-white enabled:hover:bg-red-700 focus:ring-danger-200",
      },
      variant: {
        outline: "bg-transparent",
      },
      size: {
        sm: "px-4 py-1",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      colorScheme: "primary",
      size: "md",
      radius: "md",
    },
    variantsFunction: {
      outlineCompound: (variants) => {
        const { variant, colorScheme } = variants;

        const outlineClasses = {
          primary:
            "border-primary text-primary enabled:hover:bg-primary enabled:hover:text-white",
          danger:
            "border-danger text-danger enabled:hover:bg-danger enabled:hover:text-white",
        } as const;

        if (variant === "outline" && colorScheme) {
          return outlineClasses[colorScheme];
        }

        return "";
      },
    },
  }
);
