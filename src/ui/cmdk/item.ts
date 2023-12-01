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
  outline-none
  md:py-1
  disabled:pointer-events-none
  data-[disabled]:pointer-events-none
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
          // SELECTED
          `aria-selected:bg-brand-200
  aria-selected:text-brand-950
  dark:aria-selected:bg-brand-800
  dark:aria-selected:text-brand-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-brand-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-brand-50`,
        ),
        slate: cx(
          // SELECTED
          `aria-selected:bg-slate-200
  aria-selected:text-slate-950
  dark:aria-selected:bg-slate-800
  dark:aria-selected:text-slate-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-slate-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-slate-50`,
        ),
        gray: cx(
          // SELECTED
          `aria-selected:bg-gray-200
  aria-selected:text-gray-950
  dark:aria-selected:bg-gray-800
  dark:aria-selected:text-gray-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-gray-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-gray-50`,
        ),
        zinc: cx(
          // SELECTED
          `aria-selected:bg-zinc-200
  aria-selected:text-zinc-950
  dark:aria-selected:bg-zinc-800
  dark:aria-selected:text-zinc-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-zinc-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-zinc-50`,
        ),
        neutral: cx(
          // SELECTED
          `aria-selected:bg-neutral-200
  aria-selected:text-neutral-950
  dark:aria-selected:bg-neutral-800
  dark:aria-selected:text-neutral-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-50`,
        ),
        stone: cx(
          // SELECTED
          `aria-selected:bg-stone-200
  aria-selected:text-stone-950
  dark:aria-selected:bg-stone-800
  dark:aria-selected:text-stone-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-stone-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-stone-50`,
        ),
        red: cx(
          // SELECTED
          `aria-selected:bg-red-200
  aria-selected:text-red-950
  dark:aria-selected:bg-red-900
  dark:aria-selected:text-red-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-red-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-red-50`,
        ),
        orange: cx(
          // SELECTED
          `aria-selected:bg-orange-200
  aria-selected:text-orange-950
  dark:aria-selected:bg-orange-900
  dark:aria-selected:text-orange-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-orange-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-orange-50`,
        ),
        amber: cx(
          // SELECTED
          `aria-selected:bg-amber-200
  aria-selected:text-amber-950
  dark:aria-selected:bg-amber-900
  dark:aria-selected:text-amber-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-amber-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-amber-50`,
        ),
        yellow: cx(
          // SELECTED
          `aria-selected:bg-yellow-200
  aria-selected:text-yellow-950
  dark:aria-selected:bg-yellow-900
  dark:aria-selected:text-yellow-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-yellow-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-yellow-50`,
        ),
        lime: cx(
          // SELECTED
          `aria-selected:bg-lime-200
  aria-selected:text-lime-950
  dark:aria-selected:bg-lime-900
  dark:aria-selected:text-lime-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-lime-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-lime-50`,
        ),
        green: cx(
          // SELECTED
          `aria-selected:bg-green-200
  aria-selected:text-green-950
  dark:aria-selected:bg-green-900
  dark:aria-selected:text-green-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-green-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-green-50`,
        ),
        emerald: cx(
          // SELECTED
          `aria-selected:bg-emerald-200
  aria-selected:text-emerald-950
  dark:aria-selected:bg-emerald-900
  dark:aria-selected:text-emerald-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-emerald-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-emerald-50`,
        ),
        teal: cx(
          // SELECTED
          `aria-selected:bg-teal-200
  aria-selected:text-teal-950
  dark:aria-selected:bg-teal-900
  dark:aria-selected:text-teal-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-teal-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-teal-50`,
        ),
        cyan: cx(
          // SELECTED
          `aria-selected:bg-cyan-200
  aria-selected:text-cyan-950
  dark:aria-selected:bg-cyan-900
  dark:aria-selected:text-cyan-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-cyan-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-cyan-50`,
        ),
        sky: cx(
          // SELECTED
          `aria-selected:bg-sky-200
  aria-selected:text-sky-950
  dark:aria-selected:bg-sky-900
  dark:aria-selected:text-sky-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-sky-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-sky-50`,
        ),
        blue: cx(
          // SELECTED
          `aria-selected:bg-blue-200
  aria-selected:text-blue-950
  dark:aria-selected:bg-blue-900
  dark:aria-selected:text-blue-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-blue-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-blue-50`,
        ),
        indigo: cx(
          // SELECTED
          `aria-selected:bg-indigo-200
  aria-selected:text-indigo-950
  dark:aria-selected:bg-indigo-900
  dark:aria-selected:text-indigo-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-indigo-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-indigo-50`,
        ),
        violet: cx(
          // SELECTED
          `aria-selected:bg-violet-200
  aria-selected:text-violet-950
  dark:aria-selected:bg-violet-900
  dark:aria-selected:text-violet-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-violet-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-violet-50`,
        ),
        purple: cx(
          // SELECTED
          `aria-selected:bg-purple-200
  aria-selected:text-purple-950
  dark:aria-selected:bg-purple-900
  dark:aria-selected:text-purple-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-purple-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-purple-50`,
        ),
        fuchsia: cx(
          // SELECTED
          `aria-selected:bg-fuchsia-200
  aria-selected:text-fuchsia-950
  dark:aria-selected:bg-fuchsia-900
  dark:aria-selected:text-fuchsia-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-fuchsia-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-fuchsia-50`,
        ),
        pink: cx(
          // SELECTED
          `aria-selected:bg-pink-200
  aria-selected:text-pink-950
  dark:aria-selected:bg-pink-900
  dark:aria-selected:text-pink-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-pink-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-pink-50`,
        ),
        rose: cx(
          // SELECTED
          `aria-selected:bg-rose-200
  aria-selected:text-rose-950
  dark:aria-selected:bg-rose-900
  dark:aria-selected:text-rose-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-rose-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-rose-50`,
        ),
        "white-black": cx(
          // SELECTED
          `aria-selected:bg-neutral-200
  aria-selected:text-neutral-950
  dark:aria-selected:bg-neutral-800
  dark:aria-selected:text-neutral-50`,

          // RIGHT SLOT
          `[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-950
  dark:[&_>_[data-role=command-shortcut]]:aria-selected:text-neutral-50`,
        ),
      },
    },
  },
);

export { item };
