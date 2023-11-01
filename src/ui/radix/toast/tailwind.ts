import type { Config } from "tailwindcss";

const toast: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "toast-hide": {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
    "toast-slide-in": {
      from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
      to: { transform: "translateX(0))" },
    },
    "toast-swipe-out": {
      from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
      to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
    },
  },
  animation: {
    "toast-hide": "toast-hide 100ms ease-in",
    "toast-slide-in": "toast-slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "toast-swipe-out": "toast-swipe-out 100ms ease-out",
  },
};

export { toast };
