import { BORDER, ROUNDED } from "@/ui/globals";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const root = cva(
  twMerge(
    `flex
h-[80vh]
md:h-[60vh]
w-[95vw]
md:w-[75vh]
flex-col
overflow-hidden

[&_[cmdk-group-heading]]:px-2
[&_[cmdk-group-heading]]:font-medium
[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
[&_[cmdk-group]]:px-2
[&_[cmdk-input-wrapper]_svg]:h-5
[&_[cmdk-input-wrapper]_svg]:w-5
[&_[cmdk-input]]:h-12
[&_[cmdk-item]]:px-2
[&_[cmdk-item]]:py-3
[&_[cmdk-item]_svg]:h-5
[&_[cmdk-item]_svg]:w-5`,
    ROUNDED,
    BORDER,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: `bg-brand-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-brand-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-brand-950
        dark:border-brand-800`,
        slate: `bg-slate-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-slate-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-slate-950
        dark:border-slate-800`,
        gray: `bg-gray-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-gray-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-gray-950
        dark:border-gray-800`,
        zinc: `bg-zinc-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-zinc-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-zinc-950
        dark:border-zinc-800`,
        neutral: `bg-neutral-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-neutral-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-neutral-950
        dark:border-neutral-800`,
        stone: `bg-stone-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-stone-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-stone-950
        dark:border-stone-800`,
        red: `bg-red-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-red-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-red-950
        dark:border-red-800`,
        orange: `bg-orange-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-orange-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-orange-950
        dark:border-orange-800`,
        amber: `bg-amber-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-amber-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-amber-950
        dark:border-amber-800`,
        yellow: `bg-yellow-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-yellow-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-yellow-950
        dark:border-yellow-800`,
        lime: `bg-lime-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-lime-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-lime-950
        dark:border-lime-800`,
        green: `bg-green-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-green-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-green-950
        dark:border-green-800`,
        emerald: `bg-emerald-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-emerald-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-emerald-950
        dark:border-emerald-800`,
        teal: `bg-teal-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-teal-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-teal-950
        dark:border-teal-800`,
        cyan: `bg-cyan-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-cyan-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-cyan-950
        dark:border-cyan-800`,
        sky: `bg-sky-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-sky-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-sky-950
        dark:border-sky-800`,
        blue: `bg-blue-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-blue-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-blue-950
        dark:border-blue-800`,
        indigo: `bg-indigo-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-indigo-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-indigo-950
        dark:border-indigo-800`,
        violet: `bg-violet-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-violet-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-violet-950
        dark:border-violet-800`,
        purple: `bg-purple-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-purple-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-purple-950
        dark:border-purple-800`,
        fuchsia: `bg-fuchsia-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-fuchsia-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-fuchsia-950
        dark:border-fuchsia-800`,
        pink: `bg-pink-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-pink-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-pink-950
        dark:border-pink-800`,
        rose: `bg-rose-50
        [&_[cmdk-group-heading]]:text-neutral-600
        border-rose-200
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-rose-950
        dark:border-rose-800`,
        "white-black": `bg-white
        [&_[cmdk-group-heading]]:text-neutral-600
        dark:[&_[cmdk-group-heading]]:text-neutral-400
        dark:bg-black`,
      },
    },
  },
);

export { root };
