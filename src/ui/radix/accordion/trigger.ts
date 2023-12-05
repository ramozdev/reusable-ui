import { cva, cx } from "class-variance-authority";

const trigger = cva(
  `group
  flex
  h-[45px]
  flex-1
  cursor-default
  items-center
  justify-between
  w-full
  px-5
  text-[15px]
  leading-none
  outline-none`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          `bg-brand-100
        dark:bg-brand-900`,

          `hover:bg-brand-200
        dark:hover:bg-brand-800`,
        ),
        slate: cx(
          `bg-slate-100
        dark:bg-slate-900`,

          `hover:bg-slate-200
        dark:hover:bg-slate-800`,
        ),
        gray: cx(
          `bg-gray-100
        dark:bg-gray-900`,

          `hover:bg-gray-200
        dark:hover:bg-gray-800`,
        ),
        zinc: cx(
          `bg-zinc-100
        dark:bg-zinc-900`,

          `hover:bg-zinc-200
        dark:hover:bg-zinc-800`,
        ),
        neutral: cx(
          `bg-neutral-100
        dark:bg-neutral-900`,

          `hover:bg-neutral-200
        dark:hover:bg-neutral-800`,
        ),
        stone: cx(
          `bg-stone-100
        dark:bg-stone-900`,

          `hover:bg-stone-200
        dark:hover:bg-stone-800`,
        ),
        red: cx(
          `bg-red-100
        dark:bg-red-900`,

          `hover:bg-red-200
        dark:hover:bg-red-800`,
        ),
        orange: cx(
          `bg-orange-100
        dark:bg-orange-900`,

          `hover:bg-orange-200
        dark:hover:bg-orange-800`,
        ),
        amber: cx(
          `bg-amber-100
        dark:bg-amber-900`,

          `hover:bg-amber-200
        dark:hover:bg-amber-800`,
        ),
        yellow: cx(
          `bg-yellow-100
        dark:bg-yellow-900`,

          `hover:bg-yellow-200
        dark:hover:bg-yellow-800`,
        ),
        lime: cx(
          `bg-lime-100
        dark:bg-lime-900`,

          `hover:bg-lime-200
        dark:hover:bg-lime-800`,
        ),
        green: cx(
          `bg-green-100
        dark:bg-green-900`,

          `hover:bg-green-200
        dark:hover:bg-green-800`,
        ),
        emerald: cx(
          `bg-emerald-100
        dark:bg-emerald-900`,

          `hover:bg-emerald-200
        dark:hover:bg-emerald-800`,
        ),
        teal: cx(
          `bg-teal-100
        dark:bg-teal-900`,

          `hover:bg-teal-200
        dark:hover:bg-teal-800`,
        ),
        cyan: cx(
          `bg-cyan-100
        dark:bg-cyan-900`,

          `hover:bg-cyan-200
        dark:hover:bg-cyan-800`,
        ),
        sky: cx(
          `bg-sky-100
        dark:bg-sky-900`,

          `hover:bg-sky-200
        dark:hover:bg-sky-800`,
        ),
        blue: cx(
          `bg-blue-100
        dark:bg-blue-900`,

          `hover:bg-blue-200
        dark:hover:bg-blue-800`,
        ),
        indigo: cx(
          `bg-indigo-100
        dark:bg-indigo-900`,

          `hover:bg-indigo-200
        dark:hover:bg-indigo-800`,
        ),
        violet: cx(
          `bg-violet-100
        dark:bg-violet-900`,

          `hover:bg-violet-200
        dark:hover:bg-violet-800`,
        ),
        purple: cx(
          `bg-purple-100
        dark:bg-purple-900`,

          `hover:bg-purple-200
        dark:hover:bg-purple-800`,
        ),
        fuchsia: cx(
          `bg-fuchsia-100
        dark:bg-fuchsia-900`,

          `hover:bg-fuchsia-200
        dark:hover:bg-fuchsia-800`,
        ),
        pink: cx(
          `bg-pink-100
        dark:bg-pink-900`,

          `hover:bg-pink-200
        dark:hover:bg-pink-800`,
        ),
        rose: cx(
          `bg-rose-100
        dark:bg-rose-900`,

          `hover:bg-rose-200
        dark:hover:bg-rose-800`,
        ),
        "white-black": cx(
          `bg-white
        dark:bg-black`,

          `hover:bg-neutral-200
        dark:hover:bg-neutral-800`,
        ),
      },
    },
  },
);

export { trigger };
