import { cva } from "class-variance-authority";

const arrow = cva("", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      brand: "fill-brand-300 dark:fill-brand-800",
      slate: "fill-slate-300 dark:fill-slate-800",
      gray: "fill-gray-300 dark:fill-gray-800",
      zinc: "fill-zinc-300 dark:fill-zinc-800",
      neutral: "fill-neutral-300 dark:fill-neutral-800",
      stone: "fill-stone-300 dark:fill-stone-800",
      red: "fill-red-300 dark:fill-red-800",
      orange: "fill-orange-300 dark:fill-orange-800",
      amber: "fill-amber-300 dark:fill-amber-800",
      yellow: "fill-yellow-300 dark:fill-yellow-800",
      lime: "fill-lime-300 dark:fill-lime-800",
      green: "fill-green-300 dark:fill-green-800",
      emerald: "fill-emerald-300 dark:fill-emerald-800",
      teal: "fill-teal-300 dark:fill-teal-800",
      cyan: "fill-cyan-300 dark:fill-cyan-800",
      sky: "fill-sky-300 dark:fill-sky-800",
      blue: "fill-blue-300 dark:fill-blue-800",
      indigo: "fill-indigo-300 dark:fill-indigo-800",
      violet: "fill-violet-300 dark:fill-violet-800",
      purple: "fill-purple-300 dark:fill-purple-800",
      fuchsia: "fill-fuchsia-300 dark:fill-fuchsia-800",
      pink: "fill-pink-300 dark:fill-pink-800",
      rose: "fill-rose-300 dark:fill-rose-800",
      "white-black": "fill-black dark:fill-white",
    },
  },
});

export { arrow };
