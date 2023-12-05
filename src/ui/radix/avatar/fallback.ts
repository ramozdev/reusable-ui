import { cva } from "class-variance-authority";

const fallback = cva(
  `flex
  h-full
  w-full
  items-center
  justify-center
  rounded-full
  leading-1
  text-[15px]
  font-medium`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
        text-brand-900
        dark:bg-brand-950
        dark:text-brand-200`,
        slate: `bg-slate-50
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-200`,
        gray: `bg-gray-50
        text-gray-900
        dark:bg-gray-950
        dark:text-gray-200`,
        zinc: `bg-zinc-50
        text-zinc-900
        dark:bg-zinc-950
        dark:text-zinc-200`,
        neutral: `bg-neutral-50
        text-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-200`,
        stone: `bg-stone-50
        text-stone-900
        dark:bg-stone-950
        dark:text-stone-200`,
        red: `bg-red-50
        text-red-900
        dark:bg-red-950
        dark:text-red-200`,
        orange: `bg-orange-50
        text-orange-900
        dark:bg-orange-950
        dark:text-orange-200`,
        amber: `bg-amber-50
        text-amber-900
        dark:bg-amber-950
        dark:text-amber-200`,
        yellow: `bg-yellow-50
        text-yellow-900
        dark:bg-yellow-950
        dark:text-yellow-200`,
        lime: `bg-lime-50
        text-lime-900
        dark:bg-lime-950
        dark:text-lime-200`,
        green: `bg-green-50
        text-green-900
        dark:bg-green-950
        dark:text-green-200`,
        emerald: `bg-emerald-50
        text-emerald-900
        dark:bg-emerald-950
        dark:text-emerald-200`,
        teal: `bg-teal-50
        text-teal-900
        dark:bg-teal-950
        dark:text-teal-200`,
        cyan: `bg-cyan-50
        text-cyan-900
        dark:bg-cyan-950
        dark:text-cyan-200`,
        sky: `bg-sky-50
        text-sky-900
        dark:bg-sky-950
        dark:text-sky-200`,
        blue: `bg-blue-50
        text-blue-900
        dark:bg-blue-950
        dark:text-blue-200`,
        indigo: `bg-indigo-50
        text-indigo-900
        dark:bg-indigo-950
        dark:text-indigo-200`,
        violet: `bg-violet-50
        text-violet-900
        dark:bg-violet-950
        dark:text-violet-200`,
        purple: `bg-purple-50
        text-purple-900
        dark:bg-purple-950
        dark:text-purple-200`,
        fuchsia: `bg-fuchsia-50
        text-fuchsia-900
        dark:bg-fuchsia-950
        dark:text-fuchsia-200`,
        pink: `bg-pink-50
        text-pink-900
        dark:bg-pink-950
        dark:text-pink-200`,
        rose: `bg-rose-50
        text-rose-900
        dark:bg-rose-950
        dark:text-rose-200`,
        "white-black": `bg-white
        text-neutral-900
        dark:bg-black
        dark:text-neutral-200`,
      },
    },
  },
);

export { fallback };
