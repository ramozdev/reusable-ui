import type { Config } from "tailwindcss";

const popover: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "popover-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "popover-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "popover-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "popover-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "popover-slide-down-and-fade":
      "popover-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-left-and-fade":
      "popover-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-up-and-fade":
      "popover-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-right-and-fade":
      "popover-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { popover };
