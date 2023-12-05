import { cva } from "class-variance-authority";

const separator = cva(`mx-[10px] w-[1px]`, {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      brand: "bg-brand-300 dark:bg-brand-800",
      slate: "bg-slate-300 dark:bg-slate-800",
      gray: "bg-gray-300 dark:bg-gray-800",
      zinc: "bg-zinc-300 dark:bg-zinc-800",
      neutral: "bg-neutral-300 dark:bg-neutral-800",
      stone: "bg-stone-300 dark:bg-stone-800",
      red: "bg-red-300 dark:bg-red-800",
      orange: "bg-orange-300 dark:bg-orange-800",
      amber: "bg-amber-300 dark:bg-amber-800",
      yellow: "bg-yellow-300 dark:bg-yellow-800",
      lime: "bg-lime-300 dark:bg-lime-800",
      green: "bg-green-300 dark:bg-green-800",
      emerald: "bg-emerald-300 dark:bg-emerald-800",
      teal: "bg-teal-300 dark:bg-teal-800",
      cyan: "bg-cyan-300 dark:bg-cyan-800",
      sky: "bg-sky-300 dark:bg-sky-800",
      blue: "bg-blue-300 dark:bg-blue-800",
      indigo: "bg-indigo-300 dark:bg-indigo-800",
      violet: "bg-violet-300 dark:bg-violet-800",
      purple: "bg-purple-300 dark:bg-purple-800",
      fuchsia: "bg-fuchsia-300 dark:bg-fuchsia-800",
      pink: "bg-pink-300 dark:bg-pink-800",
      rose: "bg-rose-300 dark:bg-rose-800",
      "white-black": "bg-black/80 dark:bg-white/20",
    },
  },
});

export { separator };
