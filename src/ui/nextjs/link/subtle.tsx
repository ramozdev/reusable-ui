import * as React from "react";
import { type VariantProps, cva, cx } from "class-variance-authority";

import { globalLinkStyles } from "./global-styles";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const subtleLink = cva(globalLinkStyles, {
  defaultVariants: {
    variant: "default",
    color: "blue",
    size: "default",
  },
  variants: {
    variant: {
      default: "border-transparent text-white",
      outline: "text-white",
      ghost: "border-transparent bg-transparent",
    },
    size: {
      sm: `px-3 h-7`,
      default: `px-4 py-1`,
      lg: `px-7 h-12`,
      "icon-sm": `h-4 w-4`,
      icon: `h-8
      w-8
      [&_>_svg]:h-4
      [&_>_svg]:w-4`,
      "icon-lg": `h-10 w-10`,
    },
    color: {
      brand: cx(
        // HOVER
        `hover:bg-brand-200
          hover:text-brand-950
          dark:hover:text-brand-100
          dark:hover:bg-brand-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-brand-950
          dark:focus-visible:ring-brand-200`,

        // ACTIVE
        `active:bg-brand-300
          active:text-brand-950
          dark:active:text-brand-100
          dark:active:bg-brand-800`,
      ),
      slate: cx(
        // HOVER
        `hover:bg-slate-200
          hover:text-slate-950
          dark:hover:text-slate-100
          dark:hover:bg-slate-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-slate-950
          dark:focus-visible:ring-slate-200`,

        // ACTIVE
        `active:bg-slate-300
          active:text-slate-950
          dark:active:text-slate-100
          dark:active:bg-slate-800`,
      ),
      gray: cx(
        // HOVER
        `hover:bg-gray-200
          hover:text-gray-950
          dark:hover:text-gray-100
          dark:hover:bg-gray-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-gray-950
          dark:focus-visible:ring-gray-200`,

        // ACTIVE
        `active:bg-gray-300
          active:text-gray-950
          dark:active:text-gray-100
          dark:active:bg-gray-800`,
      ),
      zinc: cx(
        // HOVER
        `hover:bg-zinc-200
          hover:text-zinc-950
          dark:hover:text-zinc-100
          dark:hover:bg-zinc-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-zinc-950
          dark:focus-visible:ring-zinc-200`,

        // ACTIVE
        `active:bg-zinc-300
          active:text-zinc-950
          dark:active:text-zinc-100
          dark:active:bg-zinc-800`,
      ),
      neutral: cx(
        // HOVER
        `hover:bg-neutral-200
          hover:text-neutral-950
          dark:hover:text-neutral-100
          dark:hover:bg-neutral-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-200`,

        // ACTIVE
        `active:bg-neutral-300
          active:text-neutral-950
          dark:active:text-neutral-100
          dark:active:bg-neutral-800`,
      ),
      stone: cx(
        // HOVER
        `hover:bg-stone-200
          hover:text-stone-950
          dark:hover:text-stone-100
          dark:hover:bg-stone-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-stone-950
          dark:focus-visible:ring-stone-200`,

        // ACTIVE
        `active:bg-stone-300
          active:text-stone-950
          dark:active:text-stone-100
          dark:active:bg-stone-800`,
      ),
      red: cx(
        // HOVER
        `hover:bg-red-200
          hover:text-red-950
          dark:hover:text-red-100
          dark:hover:bg-red-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-red-950
          dark:focus-visible:ring-red-200`,

        // ACTIVE
        `active:bg-red-300
          active:text-red-950
          dark:active:text-red-100
          dark:active:bg-red-800`,
      ),
      orange: cx(
        // HOVER
        `hover:bg-orange-200
          hover:text-orange-950
          dark:hover:text-orange-100
          dark:hover:bg-orange-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-orange-950
          dark:focus-visible:ring-orange-200`,

        // ACTIVE
        `active:bg-orange-300
          active:text-orange-950
          dark:active:text-orange-100
          dark:active:bg-orange-800`,
      ),
      amber: cx(
        // HOVER
        `hover:bg-amber-200
          hover:text-amber-950
          dark:hover:text-amber-100
          dark:hover:bg-amber-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-amber-950
          dark:focus-visible:ring-amber-200`,

        // ACTIVE
        `active:bg-amber-300
          active:text-amber-950
          dark:active:text-amber-100
          dark:active:bg-amber-800`,
      ),
      yellow: cx(
        // HOVER
        `hover:bg-yellow-200
          hover:text-yellow-950
          dark:hover:text-yellow-100
          dark:hover:bg-yellow-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-yellow-950
          dark:focus-visible:ring-yellow-200`,

        // ACTIVE
        `active:bg-yellow-300
          active:text-yellow-950
          dark:active:text-yellow-100
          dark:active:bg-yellow-800`,
      ),
      lime: cx(
        // HOVER
        `hover:bg-lime-200
          hover:text-lime-950
          dark:hover:text-lime-100
          dark:hover:bg-lime-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-lime-950
          dark:focus-visible:ring-lime-200`,

        // ACTIVE
        `active:bg-lime-300
          active:text-lime-950
          dark:active:text-lime-100
          dark:active:bg-lime-800`,
      ),
      green: cx(
        // HOVER
        `hover:bg-green-200
          hover:text-green-950
          dark:hover:text-green-100
          dark:hover:bg-green-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-green-950
          dark:focus-visible:ring-green-200`,

        // ACTIVE
        `active:bg-green-300
          active:text-green-950
          dark:active:text-green-100
          dark:active:bg-green-800`,
      ),
      emerald: cx(
        // HOVER
        `hover:bg-emerald-200
          hover:text-emerald-950
          dark:hover:text-emerald-100
          dark:hover:bg-emerald-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-emerald-950
          dark:focus-visible:ring-emerald-200`,

        // ACTIVE
        `active:bg-emerald-300
          active:text-emerald-950
          dark:active:text-emerald-100
          dark:active:bg-emerald-800`,
      ),
      teal: cx(
        // HOVER
        `hover:bg-teal-200
          hover:text-teal-950
          dark:hover:text-teal-100
          dark:hover:bg-teal-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-teal-950
          dark:focus-visible:ring-teal-200`,

        // ACTIVE
        `active:bg-teal-300
          active:text-teal-950
          dark:active:text-teal-100
          dark:active:bg-teal-800`,
      ),
      cyan: cx(
        // HOVER
        `hover:bg-cyan-200
          hover:text-cyan-950
          dark:hover:text-cyan-100
          dark:hover:bg-cyan-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-cyan-950
          dark:focus-visible:ring-cyan-200`,

        // ACTIVE
        `active:bg-cyan-300
          active:text-cyan-950
          dark:active:text-cyan-100
          dark:active:bg-cyan-800`,
      ),
      sky: cx(
        // HOVER
        `hover:bg-sky-200
          hover:text-sky-950
          dark:hover:text-sky-100
          dark:hover:bg-sky-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-sky-950
          dark:focus-visible:ring-sky-200`,

        // ACTIVE
        `active:bg-sky-300
          active:text-sky-950
          dark:active:text-sky-100
          dark:active:bg-sky-800`,
      ),
      blue: cx(
        // HOVER
        `hover:bg-blue-200
          hover:text-blue-950
          dark:hover:text-blue-100
          dark:hover:bg-blue-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-blue-950
        dark:focus-visible:ring-blue-200`,

        // ACTIVE
        `active:bg-blue-300
          active:text-blue-950
          dark:active:text-blue-100
          dark:active:bg-blue-800`,
      ),
      indigo: cx(
        // HOVER
        `hover:bg-indigo-200
          hover:text-indigo-950
          dark:hover:text-indigo-100
          dark:hover:bg-indigo-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-indigo-950
          dark:focus-visible:ring-indigo-200`,

        // ACTIVE
        `active:bg-indigo-300
          active:text-indigo-950
          dark:active:text-indigo-100
          dark:active:bg-indigo-800`,
      ),
      violet: cx(
        // HOVER
        `hover:bg-violet-200
          hover:text-violet-950
          dark:hover:text-violet-100
          dark:hover:bg-violet-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-violet-950
          dark:focus-visible:ring-violet-200`,

        // ACTIVE
        `active:bg-violet-300
          active:text-violet-950
          dark:active:text-violet-100
          dark:active:bg-violet-800`,
      ),
      purple: cx(
        // HOVER
        `hover:bg-purple-200
          hover:text-purple-950
          dark:hover:text-purple-100
          dark:hover:bg-purple-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-purple-950
          dark:focus-visible:ring-purple-200`,

        // ACTIVE
        `active:bg-purple-300
          active:text-purple-950
          dark:active:text-purple-100
          dark:active:bg-purple-800`,
      ),
      fuchsia: cx(
        // HOVER
        `hover:bg-fuchsia-200
          hover:text-fuchsia-950
          dark:hover:text-fuchsia-100
          dark:hover:bg-fuchsia-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-fuchsia-950
          dark:focus-visible:ring-fuchsia-200`,

        // ACTIVE
        `active:bg-fuchsia-300
          active:text-fuchsia-950
          dark:active:text-fuchsia-100
          dark:active:bg-fuchsia-800`,
      ),
      pink: cx(
        // HOVER
        `hover:bg-pink-200
          hover:text-pink-950
          dark:hover:text-pink-100
          dark:hover:bg-pink-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-pink-950
          dark:focus-visible:ring-pink-200`,

        // ACTIVE
        `active:bg-pink-300
          active:text-pink-950
          dark:active:text-pink-100
          dark:active:bg-pink-800`,
      ),
      rose: cx(
        // HOVER
        `hover:bg-rose-200
          hover:text-rose-950
          dark:hover:text-rose-100
          dark:hover:bg-rose-900`,

        // FOCUS-VISIBLE
        `focus-visible:ring-rose-950
          dark:focus-visible:ring-rose-200`,

        // ACTIVE
        `active:bg-rose-300
          active:text-rose-950
          dark:active:text-rose-100
          dark:active:bg-rose-800`,
      ),
      "white-black": cx(
        // HOVER
        `hover:bg-neutral-100
          hover:text-black
          dark:hover:bg-neutral-950
          dark:hover:text-white`,

        // FOCUS-VISIBLE
        `focus-visible:ring-neutral-950
          dark:focus-visible:ring-neutral-200`,

        // ACTIVE
        `active:bg-neutral-200
          active:text-black
          dark:active:bg-neutral-900
          dark:active:text-white`,
      ),
    },
  },
  compoundVariants: [
    {
      color: "brand",
      variant: "default",
      className: `bg-brand-100
                text-brand-900
                dark:bg-brand-950
                dark:text-brand-100`,
    },
    {
      color: "slate",
      variant: "default",
      className: `bg-slate-100
                text-slate-900
                dark:bg-slate-950
                dark:text-slate-100`,
    },
    {
      color: "gray",
      variant: "default",
      className: `bg-gray-100
                text-gray-900
                dark:bg-gray-950
                dark:text-gray-100`,
    },
    {
      color: "zinc",
      variant: "default",
      className: `bg-zinc-100
                text-zinc-900
                dark:bg-zinc-950
                dark:text-zinc-100`,
    },
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900
                dark:bg-neutral-950
                dark:text-neutral-100`,
    },
    {
      color: "stone",
      variant: "default",
      className: `bg-stone-100
                text-stone-900
                dark:bg-stone-950
                dark:text-stone-100`,
    },
    {
      color: "red",
      variant: "default",
      className: `bg-red-100
                text-red-900
                dark:bg-red-950
                dark:text-red-100`,
    },
    {
      color: "orange",
      variant: "default",
      className: `bg-orange-100
                text-orange-900
                dark:bg-orange-950
                dark:text-orange-100`,
    },
    {
      color: "amber",
      variant: "default",
      className: `bg-amber-100
                text-amber-900
                dark:bg-amber-950
                dark:text-amber-100`,
    },
    {
      color: "yellow",
      variant: "default",
      className: `bg-yellow-100
                text-yellow-900
                dark:bg-yellow-950
                dark:text-yellow-100`,
    },
    {
      color: "lime",
      variant: "default",
      className: `bg-lime-100
                text-lime-900
                dark:bg-lime-950
                dark:text-lime-100`,
    },
    {
      color: "green",
      variant: "default",
      className: `bg-green-100
                text-green-900
                dark:bg-green-950
                dark:text-green-100`,
    },
    {
      color: "emerald",
      variant: "default",
      className: `bg-emerald-100
                text-emerald-900
                dark:bg-emerald-950
                dark:text-emerald-100`,
    },
    {
      color: "teal",
      variant: "default",
      className: `bg-teal-100
                text-teal-900
                dark:bg-teal-950
                dark:text-teal-100`,
    },
    {
      color: "cyan",
      variant: "default",
      className: `bg-cyan-100
                text-cyan-900
                dark:bg-cyan-950
                dark:text-cyan-100`,
    },
    {
      color: "sky",
      variant: "default",
      className: `bg-sky-100
                text-sky-900
                dark:bg-sky-950
                dark:text-sky-100`,
    },
    {
      color: "blue",
      variant: "default",
      className: `bg-blue-100
                text-blue-900
                dark:bg-blue-950
                dark:text-blue-100`,
    },
    {
      color: "indigo",
      variant: "default",
      className: `bg-indigo-100
                text-indigo-900
                dark:bg-indigo-950
                dark:text-indigo-100`,
    },
    {
      color: "violet",
      variant: "default",
      className: `bg-violet-100
                text-violet-900
                dark:bg-violet-950
                dark:text-violet-100`,
    },
    {
      color: "purple",
      variant: "default",
      className: `bg-purple-100
                text-purple-900
                dark:bg-purple-950
                dark:text-purple-100`,
    },
    {
      color: "fuchsia",
      variant: "default",
      className: `bg-fuchsia-100
                text-fuchsia-900
                dark:bg-fuchsia-950
                dark:text-fuchsia-100`,
    },
    {
      color: "pink",
      variant: "default",
      className: `bg-pink-100
                text-pink-900
                dark:bg-pink-950
                dark:text-pink-100`,
    },
    {
      color: "rose",
      variant: "default",
      className: `bg-rose-100
                text-rose-900
                dark:bg-rose-950
                dark:text-rose-100`,
    },
    {
      color: "white-black",
      variant: "default",
      className: `bg-white/80
                text-black
                dark:bg-black/80
                dark:text-white`,
    },
    // -------------OUTLINE-------------
    {
      color: "brand",
      variant: "outline",
      className: `bg-brand-100
                border-brand-300
                text-brand-900
                dark:bg-brand-950
                dark:border-brand-800
                dark:text-brand-100`,
    },
    {
      color: "slate",
      variant: "outline",
      className: `bg-slate-100
                border-slate-300
                text-slate-900
                dark:bg-slate-950
                dark:border-slate-800
                dark:text-slate-100`,
    },
    {
      color: "gray",
      variant: "outline",
      className: `bg-gray-100
                border-gray-300
                text-gray-900
                dark:bg-gray-950
                dark:border-gray-800
                dark:text-gray-100`,
    },
    {
      color: "zinc",
      variant: "outline",
      className: `bg-zinc-100
                border-zinc-300
                text-zinc-900
                dark:bg-zinc-950
                dark:border-zinc-800
                dark:text-zinc-100`,
    },
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900
                dark:bg-neutral-950
                dark:border-neutral-800
                dark:text-neutral-100`,
    },
    {
      color: "stone",
      variant: "outline",
      className: `bg-stone-100
                border-stone-300
                text-stone-900
                dark:bg-stone-950
                dark:border-stone-800
                dark:text-stone-100`,
    },
    {
      color: "red",
      variant: "outline",
      className: `bg-red-100
                border-red-300
                text-red-900
                dark:bg-red-950
                dark:border-red-800
                dark:text-red-100`,
    },
    {
      color: "orange",
      variant: "outline",
      className: `bg-orange-100
                border-orange-300
                text-orange-900
                dark:bg-orange-950
                dark:border-orange-800
                dark:text-orange-100`,
    },
    {
      color: "amber",
      variant: "outline",
      className: `bg-amber-100
                border-amber-300
                text-amber-900
                dark:bg-amber-950
                dark:border-amber-800
                dark:text-amber-100`,
    },
    {
      color: "yellow",
      variant: "outline",
      className: `bg-yellow-100
                border-yellow-300
                text-yellow-900
                dark:bg-yellow-950
                dark:border-yellow-800
                dark:text-yellow-100`,
    },
    {
      color: "lime",
      variant: "outline",
      className: `bg-lime-100
                border-lime-300
                text-lime-900
                dark:bg-lime-950
                dark:border-lime-800
                dark:text-lime-100`,
    },
    {
      color: "green",
      variant: "outline",
      className: `bg-green-100
                border-green-300
                text-green-900
                dark:bg-green-950
                dark:border-green-800
                dark:text-green-100`,
    },
    {
      color: "emerald",
      variant: "outline",
      className: `bg-emerald-100
                border-emerald-300
                text-emerald-900
                dark:bg-emerald-950
                dark:border-emerald-800
                dark:text-emerald-100`,
    },
    {
      color: "teal",
      variant: "outline",
      className: `bg-teal-100
                border-teal-300
                text-teal-900
                dark:bg-teal-950
                dark:border-teal-800
                dark:text-teal-100`,
    },
    {
      color: "cyan",
      variant: "outline",
      className: `bg-cyan-100
                border-cyan-300
                text-cyan-900
                dark:bg-cyan-950
                dark:border-cyan-800
                dark:text-cyan-100`,
    },
    {
      color: "sky",
      variant: "outline",
      className: `bg-sky-100
                border-sky-300
                text-sky-900
                dark:bg-sky-950
                dark:border-sky-800
                dark:text-sky-100`,
    },
    {
      color: "blue",
      variant: "outline",
      className: `bg-blue-100
                border-blue-300
                text-blue-900
                dark:bg-blue-950
                dark:border-blue-800
                dark:text-blue-100`,
    },
    {
      color: "indigo",
      variant: "outline",
      className: `bg-indigo-100
                border-indigo-300
                text-indigo-900
                dark:bg-indigo-950
                dark:border-indigo-800
                dark:text-indigo-100`,
    },
    {
      color: "violet",
      variant: "outline",
      className: `bg-violet-100
                border-violet-300
                text-violet-900
                dark:bg-violet-950
                dark:border-violet-800
                dark:text-violet-100`,
    },
    {
      color: "purple",
      variant: "outline",
      className: `bg-purple-100
                border-purple-300
                text-purple-900
                dark:bg-purple-950
                dark:border-purple-800
                dark:text-purple-100`,
    },
    {
      color: "fuchsia",
      variant: "outline",
      className: `bg-fuchsia-100
                border-fuchsia-300
                text-fuchsia-900
                dark:bg-fuchsia-950
                dark:border-fuchsia-800
                dark:text-fuchsia-100`,
    },
    {
      color: "pink",
      variant: "outline",
      className: `bg-pink-100
                border-pink-300
                text-pink-900
                dark:bg-pink-950
                dark:border-pink-800
                dark:text-pink-100`,
    },
    {
      color: "rose",
      variant: "outline",
      className: `bg-rose-100
                border-rose-300
                text-rose-900
                dark:bg-rose-950
                dark:border-rose-800
                dark:text-rose-100`,
    },
    {
      color: "white-black",
      variant: "outline",
      className: `bg-white/80
                border-neutral-300
                text-black
                dark:bg-black/80
                dark:border-neutral-800
                dark:text-white`,
    },
    // ------------GHOST-------------
    {
      color: "brand",
      variant: "ghost",
      className: `text-brand-600
              dark:text-brand-200`,
    },
    {
      color: "slate",
      variant: "ghost",
      className: `text-slate-600
              dark:text-slate-200`,
    },
    {
      color: "gray",
      variant: "ghost",
      className: `text-gray-600
              dark:text-gray-200`,
    },
    {
      color: "zinc",
      variant: "ghost",
      className: `text-zinc-600
              dark:text-zinc-200`,
    },
    {
      color: "neutral",
      variant: "ghost",
      className: `text-neutral-600
              dark:text-neutral-200`,
    },
    {
      color: "stone",
      variant: "ghost",
      className: `text-stone-600
              dark:text-stone-200`,
    },
    {
      color: "red",
      variant: "ghost",
      className: `text-red-600
              dark:text-red-200`,
    },
    {
      color: "orange",
      variant: "ghost",
      className: `text-orange-700
              dark:text-orange-200`,
    },
    {
      color: "amber",
      variant: "ghost",
      className: `text-amber-700
              dark:text-amber-200`,
    },
    {
      color: "yellow",
      variant: "ghost",
      className: `text-yellow-700
              dark:text-yellow-200`,
    },
    {
      color: "lime",
      variant: "ghost",
      className: `text-lime-700
              dark:text-lime-200`,
    },
    {
      color: "green",
      variant: "ghost",
      className: `text-green-700
              dark:text-green-200`,
    },
    {
      color: "emerald",
      variant: "ghost",
      className: `text-emerald-700
              dark:text-emerald-200`,
    },
    {
      color: "teal",
      variant: "ghost",
      className: `text-teal-700
              dark:text-teal-200`,
    },
    {
      color: "cyan",
      variant: "ghost",
      className: `text-cyan-700
              dark:text-cyan-200`,
    },
    {
      color: "sky",
      variant: "ghost",
      className: `text-sky-700
              dark:text-sky-200`,
    },
    {
      color: "blue",
      variant: "ghost",
      className: `text-blue-600
              dark:text-blue-200`,
    },
    {
      color: "indigo",
      variant: "ghost",
      className: `text-indigo-600
              dark:text-indigo-200`,
    },
    {
      color: "violet",
      variant: "ghost",
      className: `text-violet-600
              dark:text-violet-200`,
    },
    {
      color: "purple",
      variant: "ghost",
      className: `text-purple-600
              dark:text-purple-200`,
    },
    {
      color: "fuchsia",
      variant: "ghost",
      className: `text-fuchsia-600
              dark:text-fuchsia-200`,
    },
    {
      color: "pink",
      variant: "ghost",
      className: `text-pink-700
              dark:text-pink-200`,
    },
    {
      color: "rose",
      variant: "ghost",
      className: `text-rose-600
              dark:text-rose-200`,
    },
    {
      color: "white-black",
      variant: "ghost",
      className: `text-black/80
              dark:text-white/80`,
    },
  ],
});

const SubtleLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof subtleLink>
>(({ className, size, color, variant, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className={twMerge(subtleLink({ size, color, variant }), className)}
    />
  );
});
SubtleLink.displayName = "SubtleLink";

const Subtle = SubtleLink;

export { Subtle };
