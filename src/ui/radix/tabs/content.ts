import { cva } from "class-variance-authority";

const content = cva(
  `grow
  p-5
  rounded-b-md
  outline-none
  focus:ring-1`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
          focus:ring-brand-950
          dark:bg-brand-950
          dark:focus:ring-brand-300`,
        slate: `bg-slate-50
          focus:ring-slate-950
          dark:bg-slate-950
          dark:focus:ring-slate-300`,
        gray: `bg-gray-50
          focus:ring-gray-950
          dark:bg-gray-950
          dark:focus:ring-gray-300`,
        zinc: `bg-zinc-50
          focus:ring-zinc-950
          dark:bg-zinc-950
          dark:focus:ring-zinc-300`,
        neutral: `bg-neutral-50
          focus:ring-neutral-950
          dark:bg-neutral-950
          dark:focus:ring-neutral-300`,
        stone: `bg-stone-50
          focus:ring-stone-950
          dark:bg-stone-950
          dark:focus:ring-stone-300`,
        red: `bg-red-50
          focus:ring-red-950
          dark:bg-red-950
          dark:focus:ring-red-300`,
        orange: `bg-orange-50
          focus:ring-orange-950
          dark:bg-orange-950
          dark:focus:ring-orange-300`,
        amber: `bg-amber-50
          focus:ring-amber-950
          dark:bg-amber-950
          dark:focus:ring-amber-300`,
        yellow: `bg-yellow-50
          focus:ring-yellow-950
          dark:bg-yellow-950
          dark:focus:ring-yellow-300`,
        lime: `bg-lime-50
          focus:ring-lime-950
          dark:bg-lime-950
          dark:focus:ring-lime-300`,
        green: `bg-green-50
          focus:ring-green-950
          dark:bg-green-950
          dark:focus:ring-green-300`,
        emerald: `bg-emerald-50
          focus:ring-emerald-950
          dark:bg-emerald-950
          dark:focus:ring-emerald-300`,
        teal: `bg-teal-50
          focus:ring-teal-950
          dark:bg-teal-950
          dark:focus:ring-teal-300`,
        cyan: `bg-cyan-50
          focus:ring-cyan-950
          dark:bg-cyan-950
          dark:focus:ring-cyan-300`,
        sky: `bg-sky-50
          focus:ring-sky-950
          dark:bg-sky-950
          dark:focus:ring-sky-300`,
        blue: `bg-blue-50
          focus:ring-blue-950
          dark:bg-blue-950
          dark:focus:ring-blue-300`,
        indigo: `bg-indigo-50
          focus:ring-indigo-950
          dark:bg-indigo-950
          dark:focus:ring-indigo-300`,
        violet: `bg-violet-50
          focus:ring-violet-950
          dark:bg-violet-950
          dark:focus:ring-violet-300`,
        purple: `bg-purple-50
          focus:ring-purple-950
          dark:bg-purple-950
          dark:focus:ring-purple-300`,
        fuchsia: `bg-fuchsia-50
          focus:ring-fuchsia-950
          dark:bg-fuchsia-950
          dark:focus:ring-fuchsia-300`,
        pink: `bg-pink-50
          focus:ring-pink-950
          dark:bg-pink-950
          dark:focus:ring-pink-300`,
        rose: `bg-rose-50
          focus:ring-rose-950
          dark:bg-rose-950
          dark:focus:ring-rose-300`,
        "white-black": `bg-white
          focus:ring-neutral-950
          dark:bg-black
          dark:focus:ring-neutral-300`,
      },
    },
  },
);

export { content };
