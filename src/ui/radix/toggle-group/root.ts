import { BORDER, ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `inline-flex
  gap-x-2
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
        brand: `bg-brand-50
        text-brand-900
        border-brand-300
        dark:bg-brand-950
        dark:text-brand-200
        dark:border-brand-800`,
        slate: `bg-slate-50
        text-slate-900
        border-slate-300
        dark:bg-slate-950
        dark:text-slate-200
        dark:border-slate-800`,
        gray: `bg-gray-50
        text-gray-900
        border-gray-300
        dark:bg-gray-950
        dark:text-gray-200
        dark:border-gray-800`,
        zinc: `bg-zinc-50
        text-zinc-900
        border-zinc-300
        dark:bg-zinc-950
        dark:text-zinc-200
        dark:border-zinc-800`,
        neutral: `bg-neutral-50
        text-neutral-900
        border-neutral-300
        dark:bg-neutral-950
        dark:text-neutral-200
        dark:border-neutral-800`,
        stone: `bg-stone-50
        text-stone-900
        border-stone-300
        dark:bg-stone-950
        dark:text-stone-200
        dark:border-stone-800`,
        red: `bg-red-50
        text-red-900
        border-red-300
        dark:bg-red-950
        dark:text-red-200
        dark:border-red-800`,
        orange: `bg-orange-50
        text-orange-900
        border-orange-300
        dark:bg-orange-950
        dark:text-orange-200
        dark:border-orange-800`,
        amber: `bg-amber-50
        text-amber-900
        border-amber-300
        dark:bg-amber-950
        dark:text-amber-200
        dark:border-amber-800`,
        yellow: `bg-yellow-50
        text-yellow-900
        border-yellow-300
        dark:bg-yellow-950
        dark:text-yellow-200
        dark:border-yellow-800`,
        lime: `bg-lime-50
        text-lime-900
        border-lime-300
        dark:bg-lime-950
        dark:text-lime-200
        dark:border-lime-800`,
        green: `bg-green-50
        text-green-900
        border-green-300
        dark:bg-green-950
        dark:text-green-200
        dark:border-green-800`,
        emerald: `bg-emerald-50
        text-emerald-900
        border-emerald-300
        dark:bg-emerald-950
        dark:text-emerald-200
        dark:border-emerald-800`,
        teal: `bg-teal-50
        text-teal-900
        border-teal-300
        dark:bg-teal-950
        dark:text-teal-200
        dark:border-teal-800`,
        cyan: `bg-cyan-50
        text-cyan-900
        border-cyan-300
        dark:bg-cyan-950
        dark:text-cyan-200
        dark:border-cyan-800`,
        sky: `bg-sky-50
        text-sky-900
        border-sky-300
        dark:bg-sky-950
        dark:text-sky-200
        dark:border-sky-800`,
        blue: `bg-blue-50
        text-blue-900
        border-blue-300
        dark:bg-blue-950
        dark:text-blue-200
        dark:border-blue-800`,
        indigo: `bg-indigo-50
        text-indigo-900
        border-indigo-300
        dark:bg-indigo-950
        dark:text-indigo-200
        dark:border-indigo-800`,
        violet: `bg-violet-50
        text-violet-900
        border-violet-300
        dark:bg-violet-950
        dark:text-violet-200
        dark:border-violet-800`,
        purple: `bg-purple-50
        text-purple-900
        border-purple-300
        dark:bg-purple-950
        dark:text-purple-200
        dark:border-purple-800`,
        fuchsia: `bg-fuchsia-50
        text-fuchsia-900
        border-fuchsia-300
        dark:bg-fuchsia-950
        dark:text-fuchsia-200
        dark:border-fuchsia-800`,
        pink: `bg-pink-50
        text-pink-900
        border-pink-300
        dark:bg-pink-950
        dark:text-pink-200
        dark:border-pink-800`,
        rose: `bg-rose-50
        text-rose-900
        border-rose-300
        dark:bg-rose-950
        dark:text-rose-200
        dark:border-rose-800`,
        "white-black": `bg-white
        text-neutral-900
        border-neutral-300
        dark:bg-black
        dark:text-neutral-200
        dark:border-neutral-800`,
      },
    },
  },
);

export { root };
