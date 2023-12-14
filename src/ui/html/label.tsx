import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const label = cva("font-medium text-sm leading-loose", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    required: {
      true: `after:ml-0.5 after:text-red-500 after:content-['*']`,
    },
    color: {
      brand: `text-brand-600
        dark:text-brand-200`,
      slate: `text-slate-600
        dark:text-slate-200`,
      gray: `text-gray-600
        dark:text-gray-200`,
      zinc: `text-zinc-600
        dark:text-zinc-200`,
      neutral: `text-neutral-600
        dark:text-neutral-200`,
      stone: `text-stone-600
        dark:text-stone-200`,
      red: `text-red-600
        dark:text-red-200`,
      orange: `text-orange-600
        dark:text-orange-200`,
      amber: `text-amber-600
        dark:text-amber-200`,
      yellow: `text-yellow-600
        dark:text-yellow-200`,
      lime: `text-lime-600
        dark:text-lime-200`,
      green: `text-green-600
        dark:text-green-200`,
      emerald: `text-emerald-600
        dark:text-emerald-200`,
      teal: `text-teal-600
        dark:text-teal-200`,
      cyan: `text-cyan-600
        dark:text-cyan-200`,
      sky: `text-sky-600
        dark:text-sky-200`,
      blue: `text-blue-600
        dark:text-blue-200`,
      indigo: `text-indigo-600
        dark:text-indigo-200`,
      violet: `text-violet-600
        dark:text-violet-200`,
      purple: `text-purple-600
        dark:text-purple-200`,
      fuchsia: `text-fuchsia-600
        dark:text-fuchsia-200`,
      pink: `text-pink-600
        dark:text-pink-200`,
      rose: `text-rose-600
        dark:text-rose-200`,
      "white-black": `text-neutral-600
        dark:text-neutral-200`,
    },
  },
});

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof label>
>(({ className, color, ...props }, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={twMerge(label({ color, className }))}
    />
  );
});
Label.displayName = "Label";

export { label };

export default Label;
