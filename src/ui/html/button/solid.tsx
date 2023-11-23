import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalButtonStyles } from "@/ui/html/button/global-styles";
import { twMerge } from "tailwind-merge";

const solidButton = cva(globalButtonStyles, {
  defaultVariants: {
    variant: "default",
    color: "neutral",
    size: "medium",
  },
  variants: {
    variant: {
      default: "border-transparent text-white",
      outline: "text-white",
    },
    size: {
      medium: `px-4 py-1`,
      icon: `h-8
      w-8
      [&_>_svg]:h-4
      [&_>_svg]:w-4`,
    },
    color: {
      neutral: cx(
        // HOVER
        `hover:bg-neutral-700
         hover:text-white
         dark:hover:bg-neutral-500
         dark:hover:text-white`,

        // FOCUS
        `focus:ring-neutral-950
        dark:focus:ring-neutral-500`,

        // ACTIVE
        `active:bg-neutral-800
         active:text-white
         dark:active:bg-neutral-600
         dark:active:text-white`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-600
                  dark:bg-neutral-500`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-600
                  border-neutral-800
                  dark:bg-neutral-500
                  dark:border-neutral-600`,
    },
  ],
});

const SolidButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof solidButton>
>(({ className, size, variant, color, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={twMerge(solidButton({ size, color, variant }), className)}
    />
  );
});
SolidButton.displayName = "SolidButton";

const Solid = SolidButton;

export { Solid };
