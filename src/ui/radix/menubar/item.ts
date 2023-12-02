import { ROUNDED } from "@/ui/globals";
import { cva, cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const item = cva(
  twMerge(
    `relative
  flex
  select-none
  items-center
  p-2
  text-sm
  outline-none
  md:py-1
  disabled:pointer-events-none
  data-[disabled]:opacity-50
  
  text-neutral-900
  dark:text-neutral-100`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-brand-900
  data-[highlighted]:text-brand-50
  dark:data-[highlighted]:bg-brand-800
  dark:data-[highlighted]:text-brand-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-brand-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-brand-50`,
        ),
        slate: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-slate-900
  data-[highlighted]:text-slate-50
  dark:data-[highlighted]:bg-slate-200
  dark:data-[highlighted]:text-slate-950`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-slate-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-slate-950`,
        ),
        gray: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-gray-900
  data-[highlighted]:text-gray-50
  dark:data-[highlighted]:bg-gray-200
  dark:data-[highlighted]:text-gray-950`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-gray-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-gray-950`,
        ),
        zinc: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-zinc-900
  data-[highlighted]:text-zinc-50
  dark:data-[highlighted]:bg-zinc-200
  dark:data-[highlighted]:text-zinc-950`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-zinc-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-zinc-950`,
        ),
        neutral: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-neutral-900
  data-[highlighted]:text-neutral-50
  dark:data-[highlighted]:bg-neutral-200
  dark:data-[highlighted]:text-neutral-950`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-neutral-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-neutral-950`,
        ),
        stone: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-stone-900
  data-[highlighted]:text-stone-50
  dark:data-[highlighted]:bg-stone-200
  dark:data-[highlighted]:text-stone-950`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-stone-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-stone-950`,
        ),
        red: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-red-900
  data-[highlighted]:text-red-50
  dark:data-[highlighted]:bg-red-800
  dark:data-[highlighted]:text-red-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-red-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-red-50`,
        ),
        orange: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-orange-900
  data-[highlighted]:text-orange-50
  dark:data-[highlighted]:bg-orange-800
  dark:data-[highlighted]:text-orange-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-orange-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-orange-50`,
        ),
        amber: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-amber-900
  data-[highlighted]:text-amber-50
  dark:data-[highlighted]:bg-amber-800
  dark:data-[highlighted]:text-amber-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-amber-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-amber-50`,
        ),
        yellow: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-yellow-900
  data-[highlighted]:text-yellow-50
  dark:data-[highlighted]:bg-yellow-800
  dark:data-[highlighted]:text-yellow-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-yellow-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-yellow-50`,
        ),
        lime: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-lime-900
  data-[highlighted]:text-lime-50
  dark:data-[highlighted]:bg-lime-800
  dark:data-[highlighted]:text-lime-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-lime-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-lime-50`,
        ),
        green: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-green-900
  data-[highlighted]:text-green-50
  dark:data-[highlighted]:bg-green-800
  dark:data-[highlighted]:text-green-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-green-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-green-50`,
        ),
        emerald: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-emerald-900
  data-[highlighted]:text-emerald-50
  dark:data-[highlighted]:bg-emerald-800
  dark:data-[highlighted]:text-emerald-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-emerald-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-emerald-50`,
        ),
        teal: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-teal-900
  data-[highlighted]:text-teal-50
  dark:data-[highlighted]:bg-teal-800
  dark:data-[highlighted]:text-teal-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-teal-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-teal-50`,
        ),
        cyan: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-cyan-900
  data-[highlighted]:text-cyan-50
  dark:data-[highlighted]:bg-cyan-800
  dark:data-[highlighted]:text-cyan-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-cyan-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-cyan-50`,
        ),
        sky: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-sky-900
  data-[highlighted]:text-sky-50
  dark:data-[highlighted]:bg-sky-800
  dark:data-[highlighted]:text-sky-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-sky-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-sky-50`,
        ),
        blue: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-blue-900
  data-[highlighted]:text-blue-50
  dark:data-[highlighted]:bg-blue-800
  dark:data-[highlighted]:text-blue-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-blue-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-blue-50`,
        ),
        indigo: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-indigo-900
  data-[highlighted]:text-indigo-50
  dark:data-[highlighted]:bg-indigo-800
  dark:data-[highlighted]:text-indigo-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-indigo-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-indigo-50`,
        ),
        violet: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-violet-900
  data-[highlighted]:text-violet-50
  dark:data-[highlighted]:bg-violet-800
  dark:data-[highlighted]:text-violet-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-violet-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-violet-50`,
        ),
        purple: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-purple-900
  data-[highlighted]:text-purple-50
  dark:data-[highlighted]:bg-purple-800
  dark:data-[highlighted]:text-purple-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-purple-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-purple-50`,
        ),
        fuchsia: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-fuchsia-900
  data-[highlighted]:text-fuchsia-50
  dark:data-[highlighted]:bg-fuchsia-800
  dark:data-[highlighted]:text-fuchsia-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-fuchsia-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-fuchsia-50`,
        ),
        pink: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-pink-900
  data-[highlighted]:text-pink-50
  dark:data-[highlighted]:bg-pink-800
  dark:data-[highlighted]:text-pink-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-pink-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-pink-50`,
        ),
        rose: cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-rose-900
  data-[highlighted]:text-rose-50
  dark:data-[highlighted]:bg-rose-800
  dark:data-[highlighted]:text-rose-50`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-rose-50
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-rose-50`,
        ),
        "white-black": cx(
          // HIGHLIGHTED
          `data-[highlighted]:bg-black
  data-[highlighted]:text-white
  dark:data-[highlighted]:bg-white
  dark:data-[highlighted]:text-black`,

          // RIGHT SLOT
          `[&_>_[data-role=right-slot]]:data-[highlighted]:text-white
  dark:[&_>_[data-role=right-slot]]:data-[highlighted]:text-black`,
        ),
      },
    },
  },
);

export { item };
