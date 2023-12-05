import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  h-12
  items-center
  gap-x-2
  space-x-1
  p-2`,
    BORDER,
    SHADOW,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: `border-brand-300
            bg-brand-50
            text-brand-900
            dark:border-brand-700
            dark:bg-brand-950
            dark:text-brand-200`,
        slate: `border-slate-300
            bg-slate-50
            text-slate-900
            dark:border-slate-700
            dark:bg-slate-950
            dark:text-slate-200`,
        gray: `border-gray-300
            bg-gray-50
            text-gray-900
            dark:border-gray-700
            dark:bg-gray-950
            dark:text-gray-200`,
        zinc: `border-zinc-300
            bg-zinc-50
            text-zinc-900
            dark:border-zinc-700
            dark:bg-zinc-950
            dark:text-zinc-200`,
        neutral: `border-neutral-300
            bg-neutral-50
            text-neutral-900
            dark:border-neutral-700
            dark:bg-neutral-950
            dark:text-neutral-200`,
        stone: `border-stone-300
            bg-stone-50
            text-stone-900
            dark:border-stone-700
            dark:bg-stone-950
            dark:text-stone-200`,
        red: `border-red-300
            bg-red-50
            text-red-900
            dark:border-red-700
            dark:bg-red-950
            dark:text-red-200`,
        orange: `border-orange-300
            bg-orange-50
            text-orange-900
            dark:border-orange-700
            dark:bg-orange-950
            dark:text-orange-200`,
        amber: `border-amber-300
            bg-amber-50
            text-amber-900
            dark:border-amber-700
            dark:bg-amber-950
            dark:text-amber-200`,
        yellow: `border-yellow-300
            bg-yellow-50
            text-yellow-900
            dark:border-yellow-700
            dark:bg-yellow-950
            dark:text-yellow-200`,
        lime: `border-lime-300
            bg-lime-50
            text-lime-900
            dark:border-lime-700
            dark:bg-lime-950
            dark:text-lime-200`,
        green: `border-green-300
            bg-green-50
            text-green-900
            dark:border-green-700
            dark:bg-green-950
            dark:text-green-200`,
        emerald: `border-emerald-300
            bg-emerald-50
            text-emerald-900
            dark:border-emerald-700
            dark:bg-emerald-950
            dark:text-emerald-200`,
        teal: `border-teal-300
            bg-teal-50
            text-teal-900
            dark:border-teal-700
            dark:bg-teal-950
            dark:text-teal-200`,
        cyan: `border-cyan-300
            bg-cyan-50
            text-cyan-900
            dark:border-cyan-700
            dark:bg-cyan-950
            dark:text-cyan-200`,
        sky: `border-sky-300
            bg-sky-50
            text-sky-900
            dark:border-sky-700
            dark:bg-sky-950
            dark:text-sky-200`,
        blue: `border-blue-300
            bg-blue-50
            text-blue-900
            dark:border-blue-700
            dark:bg-blue-950
            dark:text-blue-200`,
        indigo: `border-indigo-300
            bg-indigo-50
            text-indigo-900
            dark:border-indigo-700
            dark:bg-indigo-950
            dark:text-indigo-200`,
        violet: `border-violet-300
            bg-violet-50
            text-violet-900
            dark:border-violet-700
            dark:bg-violet-950
            dark:text-violet-200`,
        purple: `border-purple-300
            bg-purple-50
            text-purple-900
            dark:border-purple-700
            dark:bg-purple-950
            dark:text-purple-200`,
        fuchsia: `border-fuchsia-300
            bg-fuchsia-50
            text-fuchsia-900
            dark:border-fuchsia-700
            dark:bg-fuchsia-950
            dark:text-fuchsia-200`,
        pink: `border-pink-300
            bg-pink-50
            text-pink-900
            dark:border-pink-700
            dark:bg-pink-950
            dark:text-pink-200`,
        rose: `border-rose-300
            bg-rose-50
            text-rose-900
            dark:border-rose-700
            dark:bg-rose-950
            dark:text-rose-200`,
        "white-black": `border-neutral-300
            bg-white
            text-neutral-900
            dark:border-neutral-700
            dark:bg-black
            dark:text-neutral-200`,
      },
    },
  },
);

export { root };
