import type { Config } from "tailwindcss";

const cmdk: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "cmdk-overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "cmdk-content-show": {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
  },
  animation: {
    "cmdk-overlay-show":
      "cmdk-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "cmdk-content-show":
      "cmdk-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { cmdk };
