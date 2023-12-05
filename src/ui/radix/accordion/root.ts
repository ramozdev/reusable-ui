import { ROUNDED, SHADOW } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(twMerge("w-[300px]", ROUNDED, SHADOW), {
  defaultVariants: {
    color: "white-black",
  },
  variants: {
    color: {
      brand: "bg-brand-300 dark:bg-brand-700",
      slate: "bg-slate-300 dark:bg-slate-700",
      gray: "bg-gray-300 dark:bg-gray-700",
      zinc: "bg-zinc-300 dark:bg-zinc-700",
      neutral: "bg-neutral-300 dark:bg-neutral-700",
      stone: "bg-stone-300 dark:bg-stone-700",
      red: "bg-red-300 dark:bg-red-700",
      orange: "bg-orange-300 dark:bg-orange-700",
      amber: "bg-amber-300 dark:bg-amber-700",
      yellow: "bg-yellow-300 dark:bg-yellow-700",
      lime: "bg-lime-300 dark:bg-lime-700",
      green: "bg-green-300 dark:bg-green-700",
      emerald: "bg-emerald-300 dark:bg-emerald-700",
      teal: "bg-teal-300 dark:bg-teal-700",
      cyan: "bg-cyan-300 dark:bg-cyan-700",
      sky: "bg-sky-300 dark:bg-sky-700",
      blue: "bg-blue-300 dark:bg-blue-700",
      indigo: "bg-indigo-300 dark:bg-indigo-700",
      violet: "bg-violet-300 dark:bg-violet-700",
      purple: "bg-purple-300 dark:bg-purple-700",
      fuchsia: "bg-fuchsia-300 dark:bg-fuchsia-700",
      pink: "bg-pink-300 dark:bg-pink-700",
      rose: "bg-rose-300 dark:bg-rose-700",
      "white-black": "bg-white dark:bg-black",
    },
  },
});

export { root };
