import { cva, cx } from "class-variance-authority";

const link = cva(
  `group
inline-flex
select-none
items-center
justify-center
leading-none
rounded-sm
hover:underline
focus:outline-none
disabled:pointer-events-none
disabled:opacity-75
focus:ring-offset-4
focus:ring-offset-white
dark:focus:ring-offset-black
focus:ring-2`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `text-brand-600
        dark:text-brand-200`,

          // FOCUS
          `focus:ring-brand-950
          dark:focus:ring-brand-300`,
        ),
        slate: cx(
          `text-slate-600
        dark:text-slate-200`,

          // FOCUS
          `focus:ring-slate-950
          dark:focus:ring-slate-300`,
        ),
        gray: cx(
          `text-gray-600
        dark:text-gray-200`,

          // FOCUS
          `focus:ring-gray-950
          dark:focus:ring-gray-300`,
        ),
        zinc: cx(
          `text-zinc-600
        dark:text-zinc-200`,

          // FOCUS
          `focus:ring-zinc-950
          dark:focus:ring-zinc-300`,
        ),
        neutral: cx(
          `text-neutral-600
        dark:text-neutral-200`,

          // FOCUS
          `focus:ring-neutral-950
          dark:focus:ring-neutral-300`,
        ),
        stone: cx(
          `text-stone-600
        dark:text-stone-200`,

          // FOCUS
          `focus:ring-stone-950
          dark:focus:ring-stone-300`,
        ),
        red: cx(
          `text-red-600
        dark:text-red-200`,

          // FOCUS
          `focus:ring-red-950
          dark:focus:ring-red-300`,
        ),
        orange: cx(
          `text-orange-600
        dark:text-orange-200`,

          // FOCUS
          `focus:ring-orange-950
          dark:focus:ring-orange-300`,
        ),
        amber: cx(
          `text-amber-600
        dark:text-amber-200`,

          // FOCUS
          `focus:ring-amber-950
          dark:focus:ring-amber-300`,
        ),
        yellow: cx(
          `text-yellow-600
        dark:text-yellow-200`,

          // FOCUS
          `focus:ring-yellow-950
          dark:focus:ring-yellow-300`,
        ),
        lime: cx(
          `text-lime-600
        dark:text-lime-200`,

          // FOCUS
          `focus:ring-lime-950
          dark:focus:ring-lime-300`,
        ),
        green: cx(
          `text-green-600
        dark:text-green-200`,

          // FOCUS
          `focus:ring-green-950
          dark:focus:ring-green-300`,
        ),
        emerald: cx(
          `text-emerald-600
        dark:text-emerald-200`,

          // FOCUS
          `focus:ring-emerald-950
          dark:focus:ring-emerald-300`,
        ),
        teal: cx(
          `text-teal-600
        dark:text-teal-200`,

          // FOCUS
          `focus:ring-teal-950
          dark:focus:ring-teal-300`,
        ),
        cyan: cx(
          `text-cyan-600
        dark:text-cyan-200`,

          // FOCUS
          `focus:ring-cyan-950
          dark:focus:ring-cyan-300`,
        ),
        sky: cx(
          `text-sky-600
        dark:text-sky-200`,

          // FOCUS
          `focus:ring-sky-950
          dark:focus:ring-sky-300`,
        ),
        blue: cx(
          `text-blue-600
      dark:text-blue-200`,

          // FOCUS
          `focus:ring-blue-950
        dark:focus:ring-blue-300`,
        ),
        indigo: cx(
          `text-indigo-600
        dark:text-indigo-200`,

          // FOCUS
          `focus:ring-indigo-950
          dark:focus:ring-indigo-300`,
        ),
        violet: cx(
          `text-violet-600
        dark:text-violet-200`,

          // FOCUS
          `focus:ring-violet-950
          dark:focus:ring-violet-300`,
        ),
        purple: cx(
          `text-purple-600
        dark:text-purple-200`,

          // FOCUS
          `focus:ring-purple-950
          dark:focus:ring-purple-300`,
        ),
        fuchsia: cx(
          `text-fuchsia-600
        dark:text-fuchsia-200`,

          // FOCUS
          `focus:ring-fuchsia-950
          dark:focus:ring-fuchsia-300`,
        ),
        pink: cx(
          `text-pink-600
        dark:text-pink-200`,

          // FOCUS
          `focus:ring-pink-950
          dark:focus:ring-pink-300`,
        ),
        rose: cx(
          `text-rose-600
        dark:text-rose-200`,

          // FOCUS
          `focus:ring-rose-950
          dark:focus:ring-rose-300`,
        ),
        "white-black": cx(
          `text-black
        dark:text-white`,

          // FOCUS
          `focus:ring-black
          dark:focus:ring-white`,
        ),
      },
    },
  },
);

export { link };
