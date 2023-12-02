import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
  flex-col
  w-[300px]`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "border-brand-300 dark:border-brand-800",
        slate: "border-slate-300 dark:border-slate-800",
        gray: "border-gray-300 dark:border-gray-800",
        zinc: "border-zinc-300 dark:border-zinc-800",
        neutral: "border-neutral-300 dark:border-neutral-800",
        stone: "border-stone-300 dark:border-stone-800",
        red: "border-red-300 dark:border-red-800",
        orange: "border-orange-300 dark:border-orange-800",
        amber: "border-amber-300 dark:border-amber-800",
        yellow: "border-yellow-300 dark:border-yellow-800",
        lime: "border-lime-300 dark:border-lime-800",
        green: "border-green-300 dark:border-green-800",
        emerald: "border-emerald-300 dark:border-emerald-800",
        teal: "border-teal-300 dark:border-teal-800",
        cyan: "border-cyan-300 dark:border-cyan-800",
        sky: "border-sky-300 dark:border-sky-800",
        blue: "border-blue-300 dark:border-blue-800",
        indigo: "border-indigo-300 dark:border-indigo-800",
        violet: "border-violet-300 dark:border-violet-800",
        purple: "border-purple-300 dark:border-purple-800",
        fuchsia: "border-fuchsia-300 dark:border-fuchsia-800",
        pink: "border-pink-300 dark:border-pink-800",
        rose: "border-rose-300 dark:border-rose-800",
        "white-black": "border-neutral-300 dark:border-neutral-800",
      },
    },
  },
);

export { root };
