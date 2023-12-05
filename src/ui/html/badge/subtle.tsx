import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { globalBadgeStyles } from "@/ui/html/badge/global-styles";
import { twMerge } from "tailwind-merge";

const subtleBadge = cva(globalBadgeStyles, {
  defaultVariants: {
    variant: "default",
    color: "blue",
  },
  variants: {
    variant: {
      default: "border-transparent",
      outline: "",
      ghost: "border-transparent bg-transparent",
    },
    color: {
      brand: "",
      slate: "",
      gray: "",
      zinc: "",
      neutral: "",
      stone: "",
      red: "",
      orange: "",
      amber: "",
      yellow: "",
      lime: "",
      green: "",
      emerald: "",
      teal: "",
      cyan: "",
      sky: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: "",
      "white-black": "",
    },
  },
  compoundVariants: [
    {
      color: "brand",
      variant: "default",
      className: `bg-brand-100
                text-brand-900
                dark:bg-brand-900
                dark:text-brand-100`,
    },
    {
      color: "slate",
      variant: "default",
      className: `bg-slate-100
                text-slate-900
                dark:bg-slate-900
                dark:text-slate-100`,
    },
    {
      color: "gray",
      variant: "default",
      className: `bg-gray-100
                text-gray-900
                dark:bg-gray-900
                dark:text-gray-100`,
    },
    {
      color: "zinc",
      variant: "default",
      className: `bg-zinc-100
                text-zinc-900
                dark:bg-zinc-900
                dark:text-zinc-100`,
    },
    {
      color: "neutral",
      variant: "default",
      className: `bg-neutral-100
                text-neutral-900
                dark:bg-neutral-900
                dark:text-neutral-100`,
    },
    {
      color: "stone",
      variant: "default",
      className: `bg-stone-100
                text-stone-900
                dark:bg-stone-900
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
                dark:bg-brand-900
                dark:border-brand-800
                dark:text-brand-100`,
    },
    {
      color: "slate",
      variant: "outline",
      className: `bg-slate-100
                border-slate-300
                text-slate-900
                dark:bg-slate-900
                dark:border-slate-800
                dark:text-slate-100`,
    },
    {
      color: "gray",
      variant: "outline",
      className: `bg-gray-100
                border-gray-300
                text-gray-900
                dark:bg-gray-900
                dark:border-gray-800
                dark:text-gray-100`,
    },
    {
      color: "zinc",
      variant: "outline",
      className: `bg-zinc-100
                border-zinc-300
                text-zinc-900
                dark:bg-zinc-900
                dark:border-zinc-800
                dark:text-zinc-100`,
    },
    {
      color: "neutral",
      variant: "outline",
      className: `bg-neutral-100
                border-neutral-300
                text-neutral-900
                dark:bg-neutral-900
                dark:border-neutral-800
                dark:text-neutral-100`,
    },
    {
      color: "stone",
      variant: "outline",
      className: `bg-stone-100
                border-stone-300
                text-stone-900
                dark:bg-stone-900
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

const SubtleBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof subtleBadge>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(subtleBadge({ variant, color }), className)}
    />
  );
});
SubtleBadge.displayName = "SubtleBadge";

const Subtle = SubtleBadge;

export { Subtle };
