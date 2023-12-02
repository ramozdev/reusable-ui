import { cva } from "class-variance-authority";

const overlay = cva(
  `fixed
  inset-0
  data-[state=open]:animate-alert-dialog-overlay-show
  backdrop-blur-[2px]`,
  {
    defaultVariants: {
      color: "neutral",
    },
    variants: {
      color: {
        brand: "bg-brand-950/10",
        slate: "bg-slate-950/10",
        gray: "bg-gray-950/10",
        zinc: "bg-zinc-950/10",
        neutral: "bg-neutral-950/10",
        stone: "bg-stone-950/10",
        red: "bg-red-950/10",
        orange: "bg-orange-950/10",
        amber: "bg-amber-950/10",
        yellow: "bg-yellow-950/10",
        lime: "bg-lime-950/10",
        green: "bg-green-950/10",
        emerald: "bg-emerald-950/10",
        teal: "bg-teal-950/10",
        cyan: "bg-cyan-950/10",
        sky: "bg-sky-950/10",
        blue: "bg-blue-950/10",
        indigo: "bg-indigo-950/10",
        violet: "bg-violet-950/10",
        purple: "bg-purple-950/10",
        fuchsia: "bg-fuchsia-950/10",
        pink: "bg-pink-950/10",
        rose: "bg-rose-950/10",
        "white-black": "bg-black/10",
      },
    },
  },
);

export { overlay };
