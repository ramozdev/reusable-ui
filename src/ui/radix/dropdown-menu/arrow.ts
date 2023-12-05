import { cva } from "class-variance-authority";

const arrow = cva("", {
  defaultVariants: {
    color: "neutral",
  },
  variants: {
    color: {
      brand: "fill-brand-300 dark:fill-brand-700",
      slate: "fill-slate-300 dark:fill-slate-700",
      gray: "fill-gray-300 dark:fill-gray-700",
      zinc: "fill-zinc-300 dark:fill-zinc-700",
      neutral: "fill-neutral-300 dark:fill-neutral-700",
      stone: "fill-stone-300 dark:fill-stone-700",
      red: "fill-red-300 dark:fill-red-700",
      orange: "fill-orange-300 dark:fill-orange-700",
      amber: "fill-amber-300 dark:fill-amber-700",
      yellow: "fill-yellow-300 dark:fill-yellow-700",
      lime: "fill-lime-300 dark:fill-lime-700",
      green: "fill-green-300 dark:fill-green-700",
      emerald: "fill-emerald-300 dark:fill-emerald-700",
      teal: "fill-teal-300 dark:fill-teal-700",
      cyan: "fill-cyan-300 dark:fill-cyan-700",
      sky: "fill-sky-300 dark:fill-sky-700",
      blue: "fill-blue-300 dark:fill-blue-700",
      indigo: "fill-indigo-300 dark:fill-indigo-700",
      violet: "fill-violet-300 dark:fill-violet-700",
      purple: "fill-purple-300 dark:fill-purple-700",
      fuchsia: "fill-fuchsia-300 dark:fill-fuchsia-700",
      pink: "fill-pink-300 dark:fill-pink-700",
      rose: "fill-rose-300 dark:fill-rose-700",
      "white-black": "fill-black/40 dark:fill-white/40",
    },
  },
});

export { arrow };
