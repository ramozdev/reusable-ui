import type { Config } from "tailwindcss";

const accordion: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "accordion-slide-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-slide-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
  },
  animation: {
    "accordion-slide-down":
      "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "accordion-slide-up":
      "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  },
};

export { accordion };
