import { cva } from "class-variance-authority";

const content = cva(
  `text-[15px]
  data-[state=closed]:animate-accordion-slide-up
  data-[state=open]:animate-accordion-slide-down`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `text-brand-950
          bg-brand-50
          dark:text-brand-100
          dark:bg-brand-950`,
        slate: `text-slate-950
          bg-slate-50
          dark:text-slate-100
          dark:bg-slate-950`,
        gray: `text-gray-950
          bg-gray-50
          dark:text-gray-100
          dark:bg-gray-950`,
        zinc: `text-zinc-950
          bg-zinc-50
          dark:text-zinc-100
          dark:bg-zinc-950`,
        neutral: `text-neutral-950
          bg-neutral-50
          dark:text-neutral-100
          dark:bg-neutral-950`,
        stone: `text-stone-950
          bg-stone-50
          dark:text-stone-100
          dark:bg-stone-950`,
        red: `text-red-950
          bg-red-50
          dark:text-red-100
          dark:bg-red-950`,
        orange: `text-orange-950
          bg-orange-50
          dark:text-orange-100
          dark:bg-orange-950`,
        amber: `text-amber-950
          bg-amber-50
          dark:text-amber-100
          dark:bg-amber-950`,
        yellow: `text-yellow-950
          bg-yellow-50
          dark:text-yellow-100
          dark:bg-yellow-950`,
        lime: `text-lime-950
          bg-lime-50
          dark:text-lime-100
          dark:bg-lime-950`,
        green: `text-green-950
          bg-green-50
          dark:text-green-100
          dark:bg-green-950`,
        emerald: `text-emerald-950
          bg-emerald-50
          dark:text-emerald-100
          dark:bg-emerald-950`,
        teal: `text-teal-950
          bg-teal-50
          dark:text-teal-100
          dark:bg-teal-950`,
        cyan: `text-cyan-950
          bg-cyan-50
          dark:text-cyan-100
          dark:bg-cyan-950`,
        sky: `text-sky-950
          bg-sky-50
          dark:text-sky-100
          dark:bg-sky-950`,
        blue: `text-blue-950
          bg-blue-50
          dark:text-blue-100
          dark:bg-blue-950`,
        indigo: `text-indigo-950
          bg-indigo-50
          dark:text-indigo-100
          dark:bg-indigo-950`,
        violet: `text-violet-950
          bg-violet-50
          dark:text-violet-100
          dark:bg-violet-950`,
        purple: `text-purple-950
          bg-purple-50
          dark:text-purple-100
          dark:bg-purple-950`,
        fuchsia: `text-fuchsia-950
          bg-fuchsia-50
          dark:text-fuchsia-100
          dark:bg-fuchsia-950`,
        pink: `text-pink-950
          bg-pink-50
          dark:text-pink-100
          dark:bg-pink-950`,
        rose: `text-rose-950
          bg-rose-50
          dark:text-rose-100
          dark:bg-rose-950`,
        "white-black": `text-black
          bg-white
          dark:text-white
          dark:bg-black`,
      },
    },
  },
);

export { content };
