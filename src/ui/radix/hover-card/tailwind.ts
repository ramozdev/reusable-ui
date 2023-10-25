import type { Config } from "tailwindcss";

const hoverCard: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    slideDownAndFade: {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    slideLeftAndFade: {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    slideUpAndFade: {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    slideRightAndFade: {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
  },
  animation: {
    slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideDownAndFade: "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideRightAndFade: "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    slideLeftAndFade: "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
  },
};

export { hoverCard };
