import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ROUNDED } from "@/ui/globals";

const fieldset = cva(
  `[&:not(:last-child)]:[&_input]:mb-4 [&:not(:last-child)]:[&_textarea]:mb-4`,
  {
    variants: {
      outline: {
        true: twMerge(
          `ring-1
        pt-1
        pb-3
        px-3
        md:ring-neutral-300`,
          ROUNDED,
        ),
      },
    },
  },
);

const Fieldset = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
    VariantProps<typeof fieldset>
>(({ className, outline, ...props }, ref) => {
  return (
    <fieldset
      {...props}
      ref={ref}
      className={twMerge(fieldset({ outline }), className)}
    />
  );
});
Fieldset.displayName = "Fieldset";

export { fieldset };

export default Fieldset;
