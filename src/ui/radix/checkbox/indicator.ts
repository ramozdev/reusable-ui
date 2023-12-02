import { cva } from "class-variance-authority";

const indicator = cva(
  `flex
  items-center
  justify-center
  [&_>_svg]:h-5
  [&_>_svg]:w-5`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `text-brand-950
          data-[disabled]:text-brand-700 
          dark:text-brand-200
          dark:data-[disabled]:text-brand-300`,
        slate: `text-slate-950
          data-[disabled]:text-slate-700 
          dark:text-slate-200
          dark:data-[disabled]:text-slate-300`,
        gray: `text-gray-950
          data-[disabled]:text-gray-700 
          dark:text-gray-200
          dark:data-[disabled]:text-gray-300`,
        zinc: `text-zinc-950
          data-[disabled]:text-zinc-700 
          dark:text-zinc-200
          dark:data-[disabled]:text-zinc-300`,
        neutral: `text-neutral-950
          data-[disabled]:text-neutral-700 
          dark:text-neutral-200
          dark:data-[disabled]:text-neutral-300`,
        stone: `text-stone-950
          data-[disabled]:text-stone-700 
          dark:text-stone-200
          dark:data-[disabled]:text-stone-300`,
        red: `text-red-950
          data-[disabled]:text-red-700 
          dark:text-red-200
          dark:data-[disabled]:text-red-300`,
        orange: `text-orange-950
          data-[disabled]:text-orange-700 
          dark:text-orange-200
          dark:data-[disabled]:text-orange-300`,
        amber: `text-amber-950
          data-[disabled]:text-amber-700 
          dark:text-amber-200
          dark:data-[disabled]:text-amber-300`,
        yellow: `text-yellow-950
          data-[disabled]:text-yellow-700 
          dark:text-yellow-200
          dark:data-[disabled]:text-yellow-300`,
        lime: `text-lime-950
          data-[disabled]:text-lime-700 
          dark:text-lime-200
          dark:data-[disabled]:text-lime-300`,
        green: `text-green-950
          data-[disabled]:text-green-700 
          dark:text-green-200
          dark:data-[disabled]:text-green-300`,
        emerald: `text-emerald-950
          data-[disabled]:text-emerald-700 
          dark:text-emerald-200
          dark:data-[disabled]:text-emerald-300`,
        teal: `text-teal-950
          data-[disabled]:text-teal-700 
          dark:text-teal-200
          dark:data-[disabled]:text-teal-300`,
        cyan: `text-cyan-950
          data-[disabled]:text-cyan-700 
          dark:text-cyan-200
          dark:data-[disabled]:text-cyan-300`,
        sky: `text-sky-950
          data-[disabled]:text-sky-700 
          dark:text-sky-200
          dark:data-[disabled]:text-sky-300`,
        blue: `text-blue-950
          data-[disabled]:text-blue-700 
          dark:text-blue-200
          dark:data-[disabled]:text-blue-300`,
        indigo: `text-indigo-950
          data-[disabled]:text-indigo-700 
          dark:text-indigo-200
          dark:data-[disabled]:text-indigo-300`,
        violet: `text-violet-950
          data-[disabled]:text-violet-700 
          dark:text-violet-200
          dark:data-[disabled]:text-violet-300`,
        purple: `text-purple-950
          data-[disabled]:text-purple-700 
          dark:text-purple-200
          dark:data-[disabled]:text-purple-300`,
        fuchsia: `text-fuchsia-950
          data-[disabled]:text-fuchsia-700 
          dark:text-fuchsia-200
          dark:data-[disabled]:text-fuchsia-300`,
        pink: `text-pink-950
          data-[disabled]:text-pink-700 
          dark:text-pink-200
          dark:data-[disabled]:text-pink-300`,
        rose: `text-rose-950
          data-[disabled]:text-rose-700 
          dark:text-rose-200
          dark:data-[disabled]:text-rose-300`,
        "white-black": `text-black
          data-[disabled]:text-neutral-700 
          dark:text-white
          dark:data-[disabled]:text-neutral-300`,
      },
    },
  },
);

export { indicator };
