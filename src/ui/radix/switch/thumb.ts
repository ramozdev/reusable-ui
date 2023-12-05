import { cva } from "class-variance-authority";

const thumb = cva(
  `block
    h-[21px]
    w-[21px]
    rounded-full
    transition-transform
    duration-100
    translate-x-0.5
    will-change-transform
    data-[state=checked]:translate-x-[19px]`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
          data-[state=checked]:bg-brand-100
          dark:bg-brand-100`,
        slate: `bg-slate-50
          data-[state=checked]:bg-slate-100
          dark:bg-slate-100`,
        gray: `bg-gray-50
          data-[state=checked]:bg-gray-100
          dark:bg-gray-100`,
        zinc: `bg-zinc-50
          data-[state=checked]:bg-zinc-100
          dark:bg-zinc-100`,
        neutral: `bg-neutral-50
          data-[state=checked]:bg-neutral-100
          dark:bg-neutral-100`,
        stone: `bg-stone-50
          data-[state=checked]:bg-stone-100
          dark:bg-stone-100`,
        red: `bg-red-50
          data-[state=checked]:bg-red-100
          dark:bg-red-100`,
        orange: `bg-orange-50
          data-[state=checked]:bg-orange-100
          dark:bg-orange-100`,
        amber: `bg-amber-50
          data-[state=checked]:bg-amber-100
          dark:bg-amber-100`,
        yellow: `bg-yellow-50
          data-[state=checked]:bg-yellow-100
          dark:bg-yellow-100`,
        lime: `bg-lime-50
          data-[state=checked]:bg-lime-100
          dark:bg-lime-100`,
        green: `bg-green-50
          data-[state=checked]:bg-green-100
          dark:bg-green-100`,
        emerald: `bg-emerald-50
          data-[state=checked]:bg-emerald-100
          dark:bg-emerald-100`,
        teal: `bg-teal-50
          data-[state=checked]:bg-teal-100
          dark:bg-teal-100`,
        cyan: `bg-cyan-50
          data-[state=checked]:bg-cyan-100
          dark:bg-cyan-100`,
        sky: `bg-sky-50
          data-[state=checked]:bg-sky-100
          dark:bg-sky-100`,
        blue: `bg-blue-50
          data-[state=checked]:bg-blue-100
          dark:bg-blue-100`,
        indigo: `bg-indigo-50
          data-[state=checked]:bg-indigo-100
          dark:bg-indigo-100`,
        violet: `bg-violet-50
          data-[state=checked]:bg-violet-100
          dark:bg-violet-100`,
        purple: `bg-purple-50
          data-[state=checked]:bg-purple-100
          dark:bg-purple-100`,
        fuchsia: `bg-fuchsia-50
          data-[state=checked]:bg-fuchsia-100
          dark:bg-fuchsia-100`,
        pink: `bg-pink-50
          data-[state=checked]:bg-pink-100
          dark:bg-pink-100`,
        rose: `bg-rose-50
          data-[state=checked]:bg-rose-100
          dark:bg-rose-100`,
        "white-black": `bg-white
          data-[state=checked]:bg-neutral-100
          dark:bg-neutral-100`,
      },
    },
  },
);

export { thumb };
