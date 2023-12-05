import { cva } from "class-variance-authority";

const item = cva(
  `mt-px
    overflow-hidden
    first:mt-0
    first:rounded-t
    last:rounded-b
    focus-within:relative
    focus-within:z-10
    focus-within:shadow-[0_0_0_2px]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        brand: `focus-within:shadow-brand-950
            dark:focus-within:shadow-brand-50`,
        slate: `focus-within:shadow-slate-950
            dark:focus-within:shadow-slate-50`,
        gray: `focus-within:shadow-gray-950
            dark:focus-within:shadow-gray-50`,
        zinc: `focus-within:shadow-zinc-950
            dark:focus-within:shadow-zinc-50`,
        neutral: `focus-within:shadow-neutral-950
            dark:focus-within:shadow-neutral-50`,
        stone: `focus-within:shadow-stone-950
            dark:focus-within:shadow-stone-50`,
        red: `focus-within:shadow-red-950
            dark:focus-within:shadow-red-50`,
        orange: `focus-within:shadow-orange-950
            dark:focus-within:shadow-orange-50`,
        amber: `focus-within:shadow-amber-950
            dark:focus-within:shadow-amber-50`,
        yellow: `focus-within:shadow-yellow-950
            dark:focus-within:shadow-yellow-50`,
        lime: `focus-within:shadow-lime-950
            dark:focus-within:shadow-lime-50`,
        green: `focus-within:shadow-green-950
            dark:focus-within:shadow-green-50`,
        emerald: `focus-within:shadow-emerald-950
            dark:focus-within:shadow-emerald-50`,
        teal: `focus-within:shadow-teal-950
            dark:focus-within:shadow-teal-50`,
        cyan: `focus-within:shadow-cyan-950
            dark:focus-within:shadow-cyan-50`,
        sky: `focus-within:shadow-sky-950
            dark:focus-within:shadow-sky-50`,
        blue: `focus-within:shadow-blue-950
            dark:focus-within:shadow-blue-50`,
        indigo: `focus-within:shadow-indigo-950
            dark:focus-within:shadow-indigo-50`,
        violet: `focus-within:shadow-violet-950
            dark:focus-within:shadow-violet-50`,
        purple: `focus-within:shadow-purple-950
            dark:focus-within:shadow-purple-50`,
        fuchsia: `focus-within:shadow-fuchsia-950
            dark:focus-within:shadow-fuchsia-50`,
        pink: `focus-within:shadow-pink-950
            dark:focus-within:shadow-pink-50`,
        rose: `focus-within:shadow-rose-950
              dark:focus-within:shadow-rose-50`,
        "white-black": `focus-within:shadow-black
              dark:focus-within:shadow-white`,
      },
    },
  },
);

export { item };
