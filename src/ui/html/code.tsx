import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BORDER, ROUNDED } from "@/ui/globals";

const code = cva(
  twMerge(
    `whitespace-nowrap
  px-1.5
  py-0.5
  bg-neutral-100
  text-neutral-900
  border-neutral-300`,
    ROUNDED,
    BORDER,
  ),
  {
    variants: {
      variant: {
        outline: `bg-transparent`,
      },
    },
  },
);

const Code = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof code>
>(({ className, variant, ...props }, ref) => {
  return (
    <code
      {...props}
      ref={ref}
      className={twMerge(code({ variant }), className)}
    />
  );
});
Code.displayName = "Code";

export { Code, code };
