import type { Config } from "tailwindcss";

const menubar: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "menubar-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "menubar-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "menubar-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "menubar-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "menubar-slide-down-and-fade":
      "menubar-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-left-and-fade":
      "menubar-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-up-and-fade":
      "menubar-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-right-and-fade":
      "menubar-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { menubar };
