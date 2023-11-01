import type { Config } from "tailwindcss";

const dropdownMenu: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "dropdown-menu-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "dropdown-menu-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "dropdown-menu-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "dropdown-menu-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    "dropdown-menu-slide-down-and-fade":
      "dropdown-menu-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-left-and-fade":
      "dropdown-menu-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-up-and-fade":
      "dropdown-menu-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-right-and-fade":
      "dropdown-menu-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { dropdownMenu };
