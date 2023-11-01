import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const navigationMenu: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "navigation-menu-enter-from-right": {
      from: { opacity: "0", transform: "translateX(200px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "navigation-menu-enter-from-left": {
      from: { opacity: "0", transform: "translateX(-200px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "navigation-menu-exit-to-right": {
      from: { opacity: "1", transform: "translateX(0)" },
      to: { opacity: "0", transform: "translateX(200px)" },
    },
    "navigation-menu-exit-to-left": {
      from: { opacity: "1", transform: "translateX(0)" },
      to: { opacity: "0", transform: "translateX(-200px)" },
    },
    "navigation-menu-scale-in": {
      from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
      to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
    },
    "navigation-menu-scale-out": {
      from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
      to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
    },
    "navigation-menu-fade-in": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "navigation-menu-fade-out": {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
  },
  animation: {
    "navigation-menu-scale-in": "navigation-menu-scale-in 200ms ease",
    "navigation-menu-scale-out": "navigation-menu-scale-out 200ms ease",
    "navigation-menu-fade-in": "navigation-menu-fade-in 200ms ease",
    "navigation-menu-fade-out": "navigation-menu-fade-out 200ms ease",
    "navigation-menu-enter-from-left":
      "navigation-menu-enter-from-left 250ms ease",
    "navigation-menu-enter-from-right":
      "navigation-menu-enter-from-right 250ms ease",
    "navigation-menu-exit-to-left": "navigation-menu-exit-to-left 250ms ease",
    "navigation-menu-exit-to-right": "navigation-menu-exit-to-right 250ms ease",
  },
};

const navigationMenuPlugin: NonNullable<Config["plugins"]> = [
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
];

export { navigationMenu, navigationMenuPlugin };
