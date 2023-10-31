import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalButtonStyles } from "@/ui/html/button/global-styles";
import { twMerge } from "tailwind-merge";

const DEFAULT_VARIANT = "default";
const DEFAULT_SIZE = "medium";
const DEFAULT_COLOR = "neutral";

const subtleButton = cva(globalButtonStyles, {
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
        `hover:bg-neutral-200
          hover:text-neutral-950`,

        // FOCUS
        `focus:ring-neutral-950`,

        // ACTIVE
        `active:bg-neutral-300
          active:text-neutral-950`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900`,
    },
    // -------------OUTLINE-------------
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900`,
    },
  ],
  defaultVariants: {
    variant: DEFAULT_VARIANT,
    color: DEFAULT_COLOR,
    size: DEFAULT_SIZE,
  },
});

const SubtleButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof subtleButton>
>(({ className, size, color, variant, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={twMerge(subtleButton({ size, color, variant }), className)}
    />
  );
});
SubtleButton.displayName = "SubtleButton";

const Subtle = SubtleButton;

export { Subtle };
