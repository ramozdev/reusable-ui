import { BORDER } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `relative
  h-5
  w-[300px]
  overflow-hidden
  rounded-full
  [transform:translateZ(0)]`,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
          border-brand-300
          dark:bg-brand-950
          dark:border-brand-700`,
        slate: `bg-slate-50
          border-slate-300
          dark:bg-slate-950
          dark:border-slate-700`,
        gray: `bg-gray-50
          border-gray-300
          dark:bg-gray-950
          dark:border-gray-700`,
        zinc: `bg-zinc-50
          border-zinc-300
          dark:bg-zinc-950
          dark:border-zinc-700`,
        neutral: `bg-neutral-50
          border-neutral-300
          dark:bg-neutral-950
          dark:border-neutral-700`,
        stone: `bg-stone-50
          border-stone-300
          dark:bg-stone-950
          dark:border-stone-700`,
        red: `bg-red-50
          border-red-300
          dark:bg-red-950
          dark:border-red-700`,
        orange: `bg-orange-50
          border-orange-300
          dark:bg-orange-950
          dark:border-orange-700`,
        amber: `bg-amber-50
          border-amber-300
          dark:bg-amber-950
          dark:border-amber-700`,
        yellow: `bg-yellow-50
          border-yellow-300
          dark:bg-yellow-950
          dark:border-yellow-700`,
        lime: `bg-lime-50
          border-lime-300
          dark:bg-lime-950
          dark:border-lime-700`,
        green: `bg-green-50
          border-green-300
          dark:bg-green-950
          dark:border-green-700`,
        emerald: `bg-emerald-50
          border-emerald-300
          dark:bg-emerald-950
          dark:border-emerald-700`,
        teal: `bg-teal-50
          border-teal-300
          dark:bg-teal-950
          dark:border-teal-700`,
        cyan: `bg-cyan-50
          border-cyan-300
          dark:bg-cyan-950
          dark:border-cyan-700`,
        sky: `bg-sky-50
          border-sky-300
          dark:bg-sky-950
          dark:border-sky-700`,
        blue: `bg-blue-50
          border-blue-300
          dark:bg-blue-950
          dark:border-blue-700`,
        indigo: `bg-indigo-50
          border-indigo-300
          dark:bg-indigo-950
          dark:border-indigo-700`,
        violet: `bg-violet-50
          border-violet-300
          dark:bg-violet-950
          dark:border-violet-700`,
        purple: `bg-purple-50
          border-purple-300
          dark:bg-purple-950
          dark:border-purple-700`,
        fuchsia: `bg-fuchsia-50
          border-fuchsia-300
          dark:bg-fuchsia-950
          dark:border-fuchsia-700`,
        pink: `bg-pink-50
          border-pink-300
          dark:bg-pink-950
          dark:border-pink-700`,
        rose: `bg-rose-50
          border-rose-300
          dark:bg-rose-950
          dark:border-rose-700`,
        "white-black": `bg-white
          border-neutral-300
          dark:bg-black
          dark:border-neutral-700`,
      },
    },
  },
);

export { root };
