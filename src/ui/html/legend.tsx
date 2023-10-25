import { BORDER, ROUNDED } from "@/ui/globals";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const Legend = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement>
>(({ className, ...props }, ref) => {
  return (
    <legend
      {...props}
      ref={ref}
      className={twMerge(
        twMerge(
          `border-neutral-300
        bg-neutral-100
        px-1.5
        py-0.5
        font-semibold
        tracking-wide
        text-neutral-900`,
          ROUNDED,
          BORDER,
        ),
        className,
      )}
    />
  );
});
Legend.displayName = "Legend";

export { Legend };
