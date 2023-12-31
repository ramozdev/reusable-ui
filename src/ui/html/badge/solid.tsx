import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const solidBadge = cva(globalBadgeStyles, {
  defaultVariants: {
    variant: "default",
    color: "neutral",
  },
  variants: {
    variant: {
      default: "border-transparent text-white shadow-[2px_2px]",
      // outline: "text-white shadow-[2px_2px]",
      ghost: "border-transparent bg-transparent hover:shadow-[2px_2px]",
    },
    color: {
      brand: `shadow-brand-800 dark:shadow-brand-400`,
      slate: `shadow-slate-800 dark:shadow-slate-400`,
      gray: `shadow-gray-800 dark:shadow-gray-400`,
      zinc: `shadow-zinc-800 dark:shadow-zinc-400`,
      neutral: `shadow-neutral-800 dark:shadow-neutral-400`,
      stone: `shadow-stone-800 dark:shadow-stone-400`,
      red: `shadow-red-800 dark:shadow-red-400`,
      orange: `shadow-orange-800 dark:shadow-orange-300`,
      amber: `shadow-amber-800 dark:shadow-amber-300`,
      yellow: `shadow-yellow-800 dark:shadow-yellow-300`,
      lime: `shadow-lime-800 dark:shadow-lime-300`,
      green: `shadow-green-800 dark:shadow-green-300`,
      emerald: `shadow-emerald-800 dark:shadow-emerald-300`,
      teal: `shadow-teal-800 dark:shadow-teal-300`,
      cyan: `shadow-cyan-800 dark:shadow-cyan-300`,
      sky: `shadow-sky-800 dark:shadow-sky-800`,
      blue: `shadow-blue-800 dark:shadow-blue-400`,
      indigo: `shadow-indigo-800 dark:shadow-indigo-400`,
      violet: `shadow-violet-800  dark:shadow-violet-400`,
      purple: `shadow-purple-800 dark:shadow-purple-400`,
      fuchsia: `shadow-fuchsia-800 dark:shadow-fuchsia-400`,
      pink: `shadow-pink-800 dark:shadow-pink-400`,
      rose: `shadow-rose-800 dark:shadow-rose-400`,
      "white-black": ``,
    },
  },
  compoundVariants: [
    {
      color: "brand",
      variant: "default",
      className: `bg-brand-600`,
    },
    {
      color: "slate",
      variant: "default",
      className: `bg-slate-600`,
    },
    {
      color: "gray",
      variant: "default",
      className: `bg-gray-600`,
    },
    {
      color: "zinc",
      variant: "default",
      className: `bg-zinc-600`,
    },
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-600`,
    },
    {
      color: "stone",
      variant: "default",
      className: `bg-stone-600`,
    },
    {
      color: "red",
      variant: "default",
      className: `bg-red-600`,
    },
    {
      color: "orange",
      variant: "default",
      className: `bg-orange-400
            text-black`,
    },
    {
      color: "amber",
      variant: "default",
      className: `bg-amber-400
            text-black`,
    },
    {
      color: "yellow",
      variant: "default",
      className: `bg-yellow-400
                text-black`,
    },
    {
      color: "lime",
      variant: "default",
      className: `bg-lime-500
                text-black`,
    },
    {
      color: "green",
      variant: "default",
      className: `bg-green-500
              text-black`,
    },
    {
      color: "emerald",
      variant: "default",
      className: `bg-emerald-500
      text-black`,
    },
    {
      color: "teal",
      variant: "default",
      className: `bg-teal-400
              text-black`,
    },
    {
      color: "cyan",
      variant: "default",
      className: `bg-cyan-400
                text-black`,
    },
    {
      color: "sky",
      variant: "default",
      className: `bg-sky-400
                 text-black`,
    },
    {
      color: "blue",
      variant: "default",
      className: `bg-blue-600`,
    },
    {
      color: "indigo",
      variant: "default",
      className: `bg-indigo-600`,
    },
    {
      color: "violet",
      variant: "default",
      className: `bg-violet-600`,
    },
    {
      color: "purple",
      variant: "default",
      className: `bg-purple-600`,
    },
    {
      color: "fuchsia",
      variant: "default",
      className: `bg-fuchsia-600`,
    },
    {
      color: "pink",
      variant: "default",
      className: `bg-pink-600`,
    },
    {
      color: "rose",
      variant: "default",
      className: `bg-rose-600`,
    },
    {
      color: "white-black",
      variant: "default",
      className: `bg-white
                text-black
                dark:bg-black
                dark:text-white`,
    },
    // -------------OUTLINE-------------
    // {
    //   color: "brand",
    //   variant: "outline",
    //   className: `bg-brand-600
    //             border-brand-800
    //             dark:border-brand-400`,
    // },
    // {
    //   color: "slate",
    //   variant: "outline",
    //   className: `bg-slate-600
    //             border-slate-800
    //             dark:border-slate-400`,
    // },
    // {
    //   color: "gray",
    //   variant: "outline",
    //   className: `bg-gray-600
    //             border-gray-800
    //             dark:border-gray-400`,
    // },
    // {
    //   color: "zinc",
    //   variant: "outline",
    //   className: `bg-zinc-600
    //             border-zinc-800
    //             dark:border-zinc-400`,
    // },
    // {
    //   color: "neutral",
    //   variant: "outline",
    //   className: `bg-neutral-600
    //             border-neutral-800
    //             dark:border-neutral-400`,
    // },
    // {
    //   color: "stone",
    //   variant: "outline",
    //   className: `bg-stone-600
    //             border-stone-800
    //             dark:border-stone-400`,
    // },
    // {
    //   color: "red",
    //   variant: "outline",
    //   className: `bg-red-600
    //             border-red-800
    //             dark:border-red-400`,
    // },
    // {
    //   color: "orange",
    //   variant: "outline",
    //   className: `bg-orange-400
    //             text-black
    //             border-orange-800
    //             dark:border-orange-300`,
    // },
    // {
    //   color: "amber",
    //   variant: "outline",
    //   className: `bg-amber-400
    //             text-black
    //             border-amber-800
    //             dark:border-amber-300`,
    // },
    // {
    //   color: "yellow",
    //   variant: "outline",
    //   className: `bg-yellow-400
    //             text-black
    //             border-yellow-800
    //             dark:border-yellow-300`,
    // },
    // {
    //   color: "lime",
    //   variant: "outline",
    //   className: `bg-lime-500
    //             text-black
    //             border-lime-800
    //             dark:border-lime-300`,
    // },
    // {
    //   color: "green",
    //   variant: "outline",
    //   className: `bg-green-500
    //             text-black
    //             border-green-800
    //             dark:border-green-300`,
    // },
    // {
    //   color: "emerald",
    //   variant: "outline",
    //   className: `bg-emerald-500
    //             text-black
    //             border-emerald-800
    //             dark:border-emerald-300`,
    // },
    // {
    //   color: "teal",
    //   variant: "outline",
    //   className: `bg-teal-400
    //             text-black
    //             border-teal-800
    //             dark:border-teal-300`,
    // },
    // {
    //   color: "cyan",
    //   variant: "outline",
    //   className: `bg-cyan-400
    //             text-black
    //             border-cyan-800
    //             dark:border-cyan-300`,
    // },
    // {
    //   color: "sky",
    //   variant: "outline",
    //   className: `bg-sky-400
    //           text-black
    //             border-sky-800
    //             dark:border-sky-400`,
    // },
    // {
    //   color: "blue",
    //   variant: "outline",
    //   className: `bg-blue-600
    //             border-blue-800
    //             dark:border-blue-400`,
    // },
    // {
    //   color: "indigo",
    //   variant: "outline",
    //   className: `bg-indigo-600
    //             border-indigo-800
    //             dark:border-indigo-400`,
    // },
    // {
    //   color: "violet",
    //   variant: "outline",
    //   className: `bg-violet-600
    //             border-violet-800
    //             dark:border-violet-400`,
    // },
    // {
    //   color: "purple",
    //   variant: "outline",
    //   className: `bg-purple-600
    //             border-purple-800
    //             dark:border-purple-400`,
    // },
    // {
    //   color: "fuchsia",
    //   variant: "outline",
    //   className: `bg-fuchsia-600
    //             border-fuchsia-800
    //             dark:border-fuchsia-400`,
    // },
    // {
    //   color: "pink",
    //   variant: "outline",
    //   className: `bg-pink-600
    //             border-pink-800
    //             dark:border-pink-400`,
    // },
    // {
    //   color: "rose",
    //   variant: "outline",
    //   className: `bg-rose-600
    //             border-rose-800
    //             dark:border-rose-400`,
    // },
    // {
    //   color: "white-black",
    //   variant: "outline",
    //   className: `bg-white
    //             text-black
    //             border-black
    //             dark:bg-black
    //             dark:text-white
    //             dark:border-white`,
    // },
    // ------------GHOST-------------
    {
      color: "brand",
      variant: "ghost",
      className: `text-brand-700
            dark:text-brand-400`,
    },
    {
      color: "slate",
      variant: "ghost",
      className: `text-slate-700
            dark:text-slate-400`,
    },
    {
      color: "gray",
      variant: "ghost",
      className: `text-gray-700
            dark:text-gray-400`,
    },
    {
      color: "zinc",
      variant: "ghost",
      className: `text-zinc-700
            dark:text-zinc-400`,
    },
    {
      color: "neutral",
      variant: "ghost",
      className: `text-neutral-700
            dark:text-neutral-400`,
    },
    {
      color: "stone",
      variant: "ghost",
      className: `text-stone-700
            dark:text-stone-400`,
    },
    {
      color: "red",
      variant: "ghost",
      className: `text-red-700
            dark:text-red-400`,
    },
    {
      color: "orange",
      variant: "ghost",
      className: `text-orange-700
            dark:text-orange-400`,
    },
    {
      color: "amber",
      variant: "ghost",
      className: `text-amber-700
            dark:text-amber-400`,
    },
    {
      color: "yellow",
      variant: "ghost",
      className: `text-yellow-700
            dark:text-yellow-400`,
    },
    {
      color: "lime",
      variant: "ghost",
      className: `text-lime-700
            dark:text-lime-400`,
    },
    {
      color: "green",
      variant: "ghost",
      className: `text-green-700
            dark:text-green-400`,
    },
    {
      color: "emerald",
      variant: "ghost",
      className: `text-emerald-700
            dark:text-emerald-400`,
    },
    {
      color: "teal",
      variant: "ghost",
      className: `text-teal-700
            dark:text-teal-400`,
    },
    {
      color: "cyan",
      variant: "ghost",
      className: `text-cyan-700
            dark:text-cyan-400`,
    },
    {
      color: "sky",
      variant: "ghost",
      className: `text-sky-700
            dark:text-sky-400`,
    },
    {
      color: "blue",
      variant: "ghost",
      className: `text-blue-700
            dark:text-blue-400`,
    },
    {
      color: "indigo",
      variant: "ghost",
      className: `text-indigo-700
            dark:text-indigo-400`,
    },
    {
      color: "violet",
      variant: "ghost",
      className: `text-violet-700
            dark:text-violet-400`,
    },
    {
      color: "purple",
      variant: "ghost",
      className: `text-purple-700
            dark:text-purple-400`,
    },
    {
      color: "fuchsia",
      variant: "ghost",
      className: `text-fuchsia-700
            dark:text-fuchsia-400`,
    },
    {
      color: "pink",
      variant: "ghost",
      className: `text-pink-700
            dark:text-pink-400`,
    },
    {
      color: "rose",
      variant: "ghost",
      className: `text-rose-700
            dark:text-rose-400`,
    },
    {
      color: "white-black",
      variant: "ghost",
      className: `text-black
              dark:text-white`,
    },
  ],
});

const SolidBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof solidBadge>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(solidBadge({ variant, color }), className)}
    />
  );
});
SolidBadge.displayName = "SolidBadge";

const Solid = SolidBadge;

export { Solid };
