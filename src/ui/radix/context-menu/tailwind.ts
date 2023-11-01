import type { Config } from "tailwindcss";

const contextMenu: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "context-menu-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "context-menu-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "context-menu-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "context-menu-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "context-menu-slide-down-and-fade":
      "context-menu-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-left-and-fade":
      "context-menu-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-up-and-fade":
      "context-menu-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-right-and-fade":
      "context-menu-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { contextMenu };
