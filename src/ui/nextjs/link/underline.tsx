import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const underlineLinkVariants = cva(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
rounded-sm
underline
hover:no-underline
focus:outline-none
disabled:pointer-events-none
disabled:opacity-75
focus-visible:ring-offset-4
focus-visible:ring-offset-white
dark:focus-visible:ring-offset-black
focus-visible:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `text-brand-600
        dark:text-brand-200`,

          // FOCUS
          `focus-visible:ring-brand-950
          dark:focus-visible:ring-brand-300`,
        ),
        slate: cx(
          `text-slate-600
        dark:text-slate-200`,

          // FOCUS
          `focus-visible:ring-slate-950
          dark:focus-visible:ring-slate-300`,
        ),
        gray: cx(
          `text-gray-600
        dark:text-gray-200`,

          // FOCUS
          `focus-visible:ring-gray-950
          dark:focus-visible:ring-gray-300`,
        ),
        zinc: cx(
          `text-zinc-600
        dark:text-zinc-200`,

          // FOCUS
          `focus-visible:ring-zinc-950
          dark:focus-visible:ring-zinc-300`,
        ),
        neutral: cx(
          `text-neutral-600
        dark:text-neutral-200`,

          // FOCUS
          `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-300`,
        ),
        stone: cx(
          `text-stone-600
        dark:text-stone-200`,

          // FOCUS
          `focus-visible:ring-stone-950
          dark:focus-visible:ring-stone-300`,
        ),
        red: cx(
          `text-red-600
        dark:text-red-200`,

          // FOCUS
          `focus-visible:ring-red-950
          dark:focus-visible:ring-red-300`,
        ),
        orange: cx(
          `text-orange-600
        dark:text-orange-200`,

          // FOCUS
          `focus-visible:ring-orange-950
          dark:focus-visible:ring-orange-300`,
        ),
        amber: cx(
          `text-amber-600
        dark:text-amber-200`,

          // FOCUS
          `focus-visible:ring-amber-950
          dark:focus-visible:ring-amber-300`,
        ),
        yellow: cx(
          `text-yellow-600
        dark:text-yellow-200`,

          // FOCUS
          `focus-visible:ring-yellow-950
          dark:focus-visible:ring-yellow-300`,
        ),
        lime: cx(
          `text-lime-600
        dark:text-lime-200`,

          // FOCUS
          `focus-visible:ring-lime-950
          dark:focus-visible:ring-lime-300`,
        ),
        green: cx(
          `text-green-600
        dark:text-green-200`,

          // FOCUS
          `focus-visible:ring-green-950
          dark:focus-visible:ring-green-300`,
        ),
        emerald: cx(
          `text-emerald-600
        dark:text-emerald-200`,

          // FOCUS
          `focus-visible:ring-emerald-950
          dark:focus-visible:ring-emerald-300`,
        ),
        teal: cx(
          `text-teal-600
        dark:text-teal-200`,

          // FOCUS
          `focus-visible:ring-teal-950
          dark:focus-visible:ring-teal-300`,
        ),
        cyan: cx(
          `text-cyan-600
        dark:text-cyan-200`,

          // FOCUS
          `focus-visible:ring-cyan-950
          dark:focus-visible:ring-cyan-300`,
        ),
        sky: cx(
          `text-sky-600
        dark:text-sky-200`,

          // FOCUS
          `focus-visible:ring-sky-950
          dark:focus-visible:ring-sky-300`,
        ),
        blue: cx(
          `text-blue-600
      dark:text-blue-200`,

          // FOCUS
          `focus-visible:ring-blue-950
        dark:focus-visible:ring-blue-300`,
        ),
        indigo: cx(
          `text-indigo-600
        dark:text-indigo-200`,

          // FOCUS
          `focus-visible:ring-indigo-950
          dark:focus-visible:ring-indigo-300`,
        ),
        violet: cx(
          `text-violet-600
        dark:text-violet-200`,

          // FOCUS
          `focus-visible:ring-violet-950
          dark:focus-visible:ring-violet-300`,
        ),
        purple: cx(
          `text-purple-600
        dark:text-purple-200`,

          // FOCUS
          `focus-visible:ring-purple-950
          dark:focus-visible:ring-purple-300`,
        ),
        fuchsia: cx(
          `text-fuchsia-600
        dark:text-fuchsia-200`,

          // FOCUS
          `focus-visible:ring-fuchsia-950
          dark:focus-visible:ring-fuchsia-300`,
        ),
        pink: cx(
          `text-pink-600
        dark:text-pink-200`,

          // FOCUS
          `focus-visible:ring-pink-950
          dark:focus-visible:ring-pink-300`,
        ),
        rose: cx(
          `text-rose-600
        dark:text-rose-200`,

          // FOCUS
          `focus-visible:ring-rose-950
          dark:focus-visible:ring-rose-300`,
        ),
        "white-black": cx(
          `text-black
        dark:text-white`,

          // FOCUS
          `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-300`,
        ),
      },
    },
  },
);

const UnderlineLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> &
    VariantProps<typeof underlineLinkVariants>
>(({ className, color, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className={twMerge(underlineLinkVariants({ color }), className)}
    />
  );
});
UnderlineLink.displayName = "UnderlineLink";

const Underline = UnderlineLink;

export { Underline };
