import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const label = cva("font-medium leading-loose", {
  variants: {
    required: {
      true: `after:ml-0.5 after:text-red-500 after:content-['*']`,
    },
  },
});

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof label>
>(({ className, ...props }, ref) => {
  return (
    <label {...props} ref={ref} className={twMerge(label({ className }))} />
  );
});
Label.displayName = "Label";

export { Label, label };
