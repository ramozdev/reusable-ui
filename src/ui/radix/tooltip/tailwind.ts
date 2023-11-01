import type { Config } from "tailwindcss";

const tooltip: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "tooltip-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "tooltip-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "tooltip-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "tooltip-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "tooltip-slide-down-and-fade":
      "tooltip-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-left-and-fade":
      "tooltip-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-up-and-fade":
      "tooltip-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-right-and-fade":
      "tooltip-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { tooltip };
