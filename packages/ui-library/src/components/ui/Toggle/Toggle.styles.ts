import { tv } from "@/lib/tailwind-variant";

const bgColorSchmeClasses = {
  primary: "bg-primary",
  danger: "bg-danger",
  success: "bg-success",
};

const textColorSchemeClasses = {
  primary: "text-primary",
  danger: "text-danger",
  success: "text-success",
};

export const toggleTextStyles = tv("font-semibold", {
  variants: {
    enabled: {
      true: "text-success",
    },
    colorScheme: {
      primary: "",
      danger: "",
      success: "",
    },
  },
  defaultVariants: {
    colorScheme: "success",
  },
  variantsFunction: {
    enabledColorCompound: ({ enabled, colorScheme }) => {
      if (!enabled || !colorScheme) return "";

      return textColorSchemeClasses[colorScheme];
    },
  },
});

export const switchStyles = tv(
  "relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full p-[2px] transition-colors duration-200 ease-in-out focus-visible:ring-[1px] overflow-hidden focus-visible:ring-white focus-visible:ring-opacity-75 bg-gray-200",
  {
    variants: {
      enabled: {
        true: "",
      },
      colorScheme: {
        primary: "",
        danger: "",
        success: "",
      },
    },
    defaultVariants: {
      colorScheme: "success",
    },
    variantsFunction: {
      enabledColorCompound: ({ enabled, colorScheme }) => {
        if (!enabled || !colorScheme) return "";

        return bgColorSchmeClasses[colorScheme];
      },
    },
  }
);

export const handleWrapperStyles = tv(
  "w-full h-full blocktransition duration-200 ease-in-out",
  {
    variants: {
      enabled: {
        true: "translate-x-full",
      },
    },
  }
);

export const handleStyles = tv(
  "pointer-events-none flex aspect-square h-full rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
  {
    variants: {
      enabled: {
        true: "-translate-x-full",
      },
    },
  }
);
