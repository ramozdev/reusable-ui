import { cva } from "class-variance-authority";

const range = cva("absolute h-full rounded-full", {
  defaultVariants: {
    color: "green",
  },
  variants: {
    color: {
      brand: "bg-brand-500 dark:bg-brand-500",
      slate: "bg-slate-500 dark:bg-slate-500",
      gray: "bg-gray-500 dark:bg-gray-500",
      zinc: "bg-zinc-500 dark:bg-zinc-500",
      neutral: "bg-neutral-500 dark:bg-neutral-500",
      stone: "bg-stone-500 dark:bg-stone-500",
      red: "bg-red-500 dark:bg-red-500",
      orange: "bg-orange-500 dark:bg-orange-500",
      amber: "bg-amber-500 dark:bg-amber-500",
      yellow: "bg-yellow-500 dark:bg-yellow-500",
      lime: "bg-lime-500 dark:bg-lime-500",
      green: "bg-green-500 dark:bg-green-500",
      emerald: "bg-emerald-500 dark:bg-emerald-500",
      teal: "bg-teal-500 dark:bg-teal-500",
      cyan: "bg-cyan-500 dark:bg-cyan-500",
      sky: "bg-sky-500 dark:bg-sky-500",
      blue: "bg-blue-500 dark:bg-blue-500",
      indigo: "bg-indigo-500 dark:bg-indigo-500",
      violet: "bg-violet-500 dark:bg-violet-500",
      purple: "bg-purple-500 dark:bg-purple-500",
      fuchsia: "bg-fuchsia-500 dark:bg-fuchsia-500",
      pink: "bg-pink-500 dark:bg-pink-500",
      rose: "bg-rose-500 dark:bg-rose-500",
      "white-black": "bg-black dark:bg-white",
    },
  },
});

export { range };
