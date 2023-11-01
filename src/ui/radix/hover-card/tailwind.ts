import type { Config } from "tailwindcss";

const hoverCard: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "hover-card-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "hover-card-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "hover-card-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "hover-card-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "hover-card-slide-up-and-fade":
      "hover-card-slide-up-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-down-and-fade":
      "hover-card-slide-down-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-right-and-fade":
      "hover-card-slide-right-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-left-and-fade":
      "hover-card-slide-left-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
  },
};

export { hoverCard };
